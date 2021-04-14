from typing import Optional
from pydantic import BaseModel, Field
from datetime import datetime
import uuid

# Model used to log bugs
class BugIn(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    created_date: str = datetime.utcnow().strftime("%m/%d/%Y, %H:%M:%S")
    language: str
    error_type: str
    init_code: str
    owner: Optional[str]

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "language": "Python",
                "error_type": "SyntaxError",
                "init_code": "{item1: 'banana' item2: 'apple'}",
            }
        }


# Model to used in fixed endpoints
class BugFix(BaseModel):
    fixed_date: str = datetime.utcnow().strftime("%m/%d/%Y, %H:%M:%S")
    fixed_code: str
    explanation: str

    class Config:
        schema_extra = {
            "example": {
                "fixed_code": "{item1: 'banana', item2: 'apple'}",
                "explanation": "I missed a comma on a dict item",
            }
        }