from fastapi import APIRouter, Depends, Request, Response
from ..users.routes import credentials

router = APIRouter(prefix="/dev", tags=["Dev User MGMT"])


@router.get("/all_users")
async def get_users(request: Request):
    users = []
    for user in await request.app.mongodb["users"].find().to_list(length=50):
        users.append(user)
    return users
