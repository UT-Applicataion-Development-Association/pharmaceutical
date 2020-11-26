from flask import Flask, session
from server.routes import index, signin
from server.config import Config
import sqlite3
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
app.register_blueprint(index.indexRoutes, url_prefix='/')
app.register_blueprint(signin.signinRoute, url_prefix='/signin')
