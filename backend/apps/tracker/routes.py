from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from ..users.routes import credentials
from .models import BugIn, BugFix

router = APIRouter(prefix="/journal", tags=["Journal"])

# Routes protected by credentials
# credentails will return the user id if user is logged in


@router.post("/bug", status_code=201)
async def log_bug(request: Request, bug: BugIn, user=Depends(credentials)):
    try:
        bug.owner = user
        json_bug = jsonable_encoder(bug)
        new_bug = await request.app.mongodb["bug_journal"].insert_one(json_bug)
    except:
        raise HTTPException(status_code=400, detail="Error Logging Bug")
    else:
        return {"detail": "Bug logged"}


@router.get("/buglist", status_code=200)
async def get_buglist(request: Request, user=Depends(credentials)):
    try:
        bug_list = []
        for bug in (
            await request.app.mongodb["bug_journal"]
            .find({"owner": user})
            .to_list(length=50)
        ):
            bugs.append(bug)
    except:
        raise HTTPException(status_code=404, detail="Couldn't Retrieve Bug List")
    else:
        return bug_list


@router.put("/bug/{bug_id}", status_code=200)
async def log_bug_fix(
    bug_id, bug_fix: BugFix, request: Request, user=Depends(credentials)
):
    try:
        fix = jsonable_encoder(bug_fix)
        updated_bug = await request.app.mongodb["bug_journal"].update_one(
            {"_id": bug_id, "owner": user}, {"$set": fix}
        )
    except:
        raise HTTPException(status_code=404, detail="Bug not found")
    else:
        return {"detail": "Bug Updated"}


@router.delete("/bug/{bug_id}", status_code=200)
async def delete_bug(bug_id, request: Request, user=Depends(credentials)):
    try:
        result = await request.app.mongodb["bug_journal"].delete_one(
            {"_id": bug_id, "owner": user}
        )
    except:
        raise HTTPException(status_code=404, detail="Bug not found")
    else:
        return {"detail": "Bug Deleted"}
