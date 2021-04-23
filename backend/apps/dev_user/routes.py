from fastapi import APIRouter, Depends, Request, Response
from ..users.routes import credentials

router = APIRouter(prefix="/dev", tags=["Dev User MGMT"])


@router.get("/all_users")
async def get_users(request: Request):
    users = []
    for user in await request.app.mongodb["users"].find().to_list(length=50):
        users.append(user)
    return users


@router.delete("/all_logs")
async def delete_all_logs(request: Request):
    deleted = await request.app.mongodb["bug_journal"].delete_many({})
    return {"msg": "success"}