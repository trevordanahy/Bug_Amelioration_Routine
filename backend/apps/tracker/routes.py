from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from ..users.routes import credentials
from .models import BugIn, BugFix

router = APIRouter(prefix="/log", tags=["Log"])

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


@router.get("/buglog", status_code=200)
async def get_buglist(request: Request, user=Depends(credentials)):
    try:
        bug_list = []
        for bug in (
            await request.app.mongodb["bug_journal"]
            .find({"owner": user}, {"owner": 0})
            .to_list(length=50)
        ):
            bug_list.append(bug)
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
        result = await request.app.mongodb["bug_journal"].update_one(
            {"_id": bug_id, "owner": user}, {"$set": fix}
        )
    except:
        raise HTTPException(status_code=400, detail="Error while updating Bug")
    else:
        # modified_count comes from motor library
        # ref https://pymongo.readthedocs.io/en/stable/api/pymongo/results.html
        if result.modified_count < 1:
            raise HTTPException(status_code=404, detail="Bug Not Found")
        return {"detail": "Bug Updated"}


@router.delete("/bug/{bug_id}", status_code=200)
async def delete_bug(bug_id, request: Request, user=Depends(credentials)):
    try:
        result = await request.app.mongodb["bug_journal"].delete_one(
            {"_id": bug_id, "owner": user}
        )
    except:
        raise HTTPException(status_code=400, detail="Error while attempting to delete")
    else:
        # deleted_count comes directly from motor library
        # ref https://pymongo.readthedocs.io/en/stable/api/pymongo/results.html
        if result.deleted_count < 1:
            print("got here")
            raise HTTPException(status_code=404, detail="Bug not found check id")

        return {"detail": "Bug Deleted"}
