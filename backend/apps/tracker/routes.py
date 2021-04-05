from fastapi import APIRouter, Request
from fastapi.encoders import jsonable_encoder
from ..users.routes import credentials