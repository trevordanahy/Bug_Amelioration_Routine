from typing import Optional
from pydantic import BaseModel, Field
from datetime import datetime
import uuid

# Model used to log bugs
class BugIn(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    created_date: datetime = Field(default_factory=datetime.utcnow)
    app: str
    language: str
    error_type: str
    is_fixed: bool
    init_code: str
    owner: Optional[str]

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "app": "Resumio",
                "language": "Python",
                "error_type": "SyntaxError",
                "is_fixed": False,
                "init_code": "{item1: 'banana' item2: 'apple'}",
            }
        }


# Model to used in fixed endpoints
class BugFix(BaseModel):
    fixed_date: datetime = Field(default_factory=datetime.utcnow)
    fixed_code: str
    is_fixed: bool
    explanation: str

    class Config:
        schema_extra = {
            "example": {
                "is_fixed": True,
                "fixed_code": "{item1: 'banana', item2: 'apple'}",
                "explanation": "I missed a comma on a dict item",
            }
        }