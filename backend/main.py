from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from apps.users.routes import router as user_router


app = FastAPI()
app.include_router(user_router, tags=["Auth"])

mongo_uri = "mongodb://mongoadmin:devpassword@localhost:27017"


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
