from fastapi import FastAPI
from werkzeug.security import safe_str_cmp

from .routes import init_routes

def init_app():
    app = FastAPI()
    init_routes(app)
    return app

