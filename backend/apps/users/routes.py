from fastapi import APIRouter, Depends, Request, Response, Body, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_login import LoginManager
from datetime import timedelta
from passlib.hash import bcrypt
from .models import User, UserIn
from config import jwt_secret
import jwt


router = APIRouter(prefix="/user", tags=["Auth"])

token_cookie_name = "access-token"

credentials = LoginManager(
    secret=jwt_secret, tokenUrl="/login/", use_cookie=True, use_header=False
)

credentials.cookie_name = token_cookie_name


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
    if not user:
        return False
    if not bcrypt.verify(password, user["password"]):
        return False
    print(user["_id"])
    return user["_id"]


# User Routes
@router.post("/register/", status_code=201)
async def create_user(request: Request, user: User):
    existing = await request.app.mongodb["users"].find_one({"email": user.email})
    if existing:
        raise HTTPException(
            status_code=401, detail="User already exists, please sign in"
        )

    hashed_pass = bcrypt.hash(user.password)
    user.password = hashed_pass

    user = jsonable_encoder(user)
    new_user = await request.app.mongodb["users"].insert_one(user)
    return {"msg": "success"}


@router.post("/login/")
async def login(request: Request, response: Response, user: UserIn):
    user_id = await auth_user(user.email, user.password, request)
    print(user_id)
    if not user_id:
        return {"msg": "fail"}
    expiration = set_duration_days(5)

    payload = {"sub": user_id}
    token = credentials.create_access_token(data=payload, expires=expiration["jwt"])

    try:
        response.set_cookie(
            key=token_cookie_name,
            value=token,
            httponly=True,
            max_age=(expiration["cookie"]),
        )
    except:
        return {"cookie error": "fuck"}

    return {"msg": "success"}


@router.get("/logout")
async def logout(response: Response):
    try:
        response.delete_cookie(key=token_cookie_name)
    except:
        return {"error": "cookie error"}
    return {"msg": "success"}


@router.get("/me")
async def user(request: Request, user=Depends(credentials)):
    print(user)
    me = await request.app.mongodb["users"].find_one({"_id": user})
    username = me["username"]
    return {"username": username}
