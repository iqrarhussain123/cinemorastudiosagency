import datetime

from pydantic import BaseModel, EmailStr, Field, field_validator


class LeadCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    company: str | None = Field(default=None, max_length=255)
    message: str | None = Field(default=None, max_length=4000)
    source: str = Field(default="website", min_length=2, max_length=64)

    @field_validator("name", "company", "message", "source", mode="before")
    @classmethod
    def clean_optional_strings(cls, value: str | None) -> str | None:
        if value is None:
            return None

        cleaned = value.strip()
        return cleaned or None

    @field_validator("name")
    @classmethod
    def validate_name(cls, value: str) -> str:
        if len(value.split()) < 1:
            raise ValueError("Name is required.")
        return value

    @field_validator("source")
    @classmethod
    def normalize_source(cls, value: str | None) -> str:
        return (value or "website").lower()


class LeadOut(BaseModel):
    id: str
    name: str
    email: str
    company: str | None
    message: str | None
    source: str
    created_at: datetime.datetime

    model_config = {"from_attributes": True}
