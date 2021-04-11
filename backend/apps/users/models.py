from pydantic import BaseModel, Field
import uuid


class User(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    email: str
    username: str
    password: str

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "email": "fake@email.com",
                "username": "fakery",
                "password": "supersecure",
            }
        }


class UserIn(BaseModel):
    email: str
    password: str

    class Config:
        schema_extra = {
            "example": {"email": "fake@email.com", "password": "supersecure"}
        }
