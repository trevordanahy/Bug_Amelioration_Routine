from os import environ
from urllib.parse import quote

# DB Setup
db_user = quote(environ.get("DB_USER"))
db_pass = quote(environ.get("DB_PASS"))
mongo_uri = f"mongodb://{db_user}:{db_pass}@localhost:27017"

# JWT
jwt_secret = environ.get("JWT_KEY")