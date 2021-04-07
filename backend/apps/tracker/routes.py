from fastapi import APIRouter, Request, Depends
from fastapi.encoders import jsonable_encoder
from ..users.routes import credentials
from .models import BugIn, BugFix

router = APIRouter(prefix="/journal", tags=["Journal"])

# Basic functionality, route path may change, need to add error handling and refactor
@router.post("/bug")
async def log_bug(request: Request, bug: BugIn, user=Depends(credentials)):
    bug.owner = user
    json_bug = jsonable_encoder(bug)
    new_bug = await request.app.mongodb["bug_journal"].insert_one(json_bug)
    return {"msg": "success"}


# Basic functionality, route path may change, need to add error handling and refactor
@router.get("/bugs")
async def all_bugs(request: Request, user=Depends(credentials)):
    bugs = []
    query = {"owner": user}
    for bug in (
        await request.app.mongodb["bug_journal"]
        .find({"owner": user})
        .to_list(length=50)
    ):
        bugs.append(bug)
    return bugs


# Basic functionality, route path may change, need to add error handling and refactor
@router.put("/bug/{bug_id}")
async def log_fix(bug_id, bug_fix: BugFix, request: Request, user=Depends(credentials)):
    fix = jsonable_encoder(bug_fix)
    updated_bug = await request.app.mongodb["bug_journal"].update_one(
        {"_id": bug_id, "owner": user}, {"$set": fix}
    )
    return {"msg": "success"}


# Basic functionality, route path may change, need to add error handling and refactor
@router.delete("/bug/{bug_id}")
async def delete_bug(bug_id, request: Request, user=Depends(credentials)):
    result = await request.app.mongodb["bug_journal"].delete_one(
        {"_id": bug_id, "owner": user}
    )
    return {"msg": "success"}
