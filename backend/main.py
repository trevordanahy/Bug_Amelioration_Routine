from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from apps.users.routes import router as user_router
from apps.tracker.routes import router as tracker_router
from config import db_user, db_pass, mongo_uri

# FastAPI Class setup
app = FastAPI()
app.include_router(user_router)
app.include_router(tracker_router)


@app.on_event("startup")
async def startup_db():
    app.mongodb_client = AsyncIOMotorClient(mongo_uri)
    app.mongodb = app.mongodb_client["bug_amelioration_routine"]


@app.on_event("shutdown")
async def close_db_client():
    app.mongodb_client.close()


@app.get("/", tags=["Main"])
def home():
    return {"home": "world"}
