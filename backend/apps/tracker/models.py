from pydantic import BaseModel, Optional
from datetime import datetime


class Entry(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    created: str
    fixed: Optional[str]
    error_type: str
    note: Optional[str]
    init_code: str
    fixed_code: Optional[str]

    def set_date():
        now = datetime.now()
        return now

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "created": "2021-04-05 15:22:25.218556",
            }
        }
