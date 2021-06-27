from flask_jwt import JWT, jwt_required, current_identity
from werkzeug.security import safe_str_cmp

from . import account

def init_routes(app):
    app.include_router(account.router)
    