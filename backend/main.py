from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from apps.users.routes import router as user_router
from urllib.parse import quote
import os

#FastAPI Class setup
app = FastAPI()
app.include_router(user_router, tags=["Auth"])

db_user = quote(os.environ.get("DB_USER"))
db_pass = quote(os.environ.get("DB_PASS"))
mongo_uri = f"mongodb://{db_user}:{db_pass}@localhost:27017"


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
