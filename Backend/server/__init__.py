from flask import Flask, session
from flask_cors import CORS
from server.routes import index, signin
import sqlite3
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config.from_object("server.config.Config")
db = SQLAlchemy(app)
cors = CORS(app)
app.register_blueprint(index.indexRoutes, url_prefix='/')
app.register_blueprint(signin.signinRoute, url_prefix='/signin')
