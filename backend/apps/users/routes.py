from fastapi import APIRouter, Depends, Request, Response, Body, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_login import LoginManager
from datetime import timedelta
from passlib.hash import bcrypt
from .models import User, UserIn
from config import jwt_secret
import jwt

# Router Setup
router = APIRouter(prefix="/user", tags=["Auth"])


# Credentials Setup
token_cookie_name = "access-token"
token_expire_time = 5
credentials = LoginManager(
    secret=jwt_secret, tokenUrl="/login/", use_cookie=True, use_header=False
)
credentials.cookie_name = token_cookie_name


# Callback run when credentials used as dependency
# Logic in fastapi-login library, Grabs cookie and decodes jwt value, returns user_id
@credentials.user_loader
async def query_user(user):
    return user


# Used to sync expiration for jwt and auth cookie, used in /login route
# jwt is timedelta object, cookie is int in seconds
def set_duration_days(time_days: int):
    period = timedelta(days=time_days)
    expiration = {"jwt": period, "cookie": int(period.total_seconds())}
    return expiration


async def auth_user(email: str, password: str, request: Request):
    user = await request.app.mongodb["users"].find_one({"email": email})
    if not user or not bcrypt.verify(password, user["password"]):
        return False
    return user["_id"]


# creates jwt token, expire_time in days
def create_token(user_id, expire_time):
    try:
        expiration = set_duration_days(expire_time)
        payload = {"sub": user_id}
        token_value = credentials.create_access_token(
            data=payload, expires=expiration["jwt"]
        )
        token = {"value": token_value, "expiration": expiration["cookie"]}
    except:
        raise HTTPException(status_code=400, detail="Unable to create token")
    else:
        return token


# User Routes
@router.post("/register", status_code=201)
async def create_user(request: Request, user: User):
    existing = await request.app.mongodb["users"].find_one({"email": user.email})
    if existing:
        raise HTTPException(
            status_code=409, detail="User already exists, please sign in"
        )
    try:
        hashed_pass = bcrypt.hash(user.password)
        user.password = hashed_pass

        user = jsonable_encoder(user)
        new_user = await request.app.mongodb["users"].insert_one(user)
    except:
        raise HTTPException(status_code=400, detail="Regestration Invalid")
    else:
        return {"detail": "User Created"}


@router.post("/login", status_code=200)
async def login(request: Request, response: Response, user: UserIn):
    # authenticate, returns false if email/password invalid
    user_id = await auth_user(user.email, user.password, request)
    if not user_id:
        raise HTTPException(status_code=401, detail="Invalid Credentials")

    # create jwt
    token = create_token(user_id, token_expire_time)

    # set set auth cookie
    try:
        response.set_cookie(
            key=token_cookie_name,
            value=token["value"],
            httponly=True,
            max_age=(token["expiration"]),
        )
    except:
        raise HTTPException(
            status_code=400, detail="Unable to set authorization cookie"
        )
    else:
        return {"detail": "Logged In"}


@router.get("/logout", status_code=200)
async def logout(response: Response):
    try:
        response.delete_cookie(key=token_cookie_name)
    except:
        raise HTTPException(status_code=400, detail="Error deleting cookie")
    else:
        return {"detail": "Logged Out"}


@router.get("/me", status_code=200)
async def user(request: Request, user=Depends(credentials)):
    try:
        me = await request.app.mongodb["users"].find_one({"_id": user})
        username = me["username"]
    except:
        raise HTTPException(status_code=404, detail="User not found")
    else:
        return {"username": username}
