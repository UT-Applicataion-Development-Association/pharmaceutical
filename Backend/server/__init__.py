from flask import Flask, session
from server.routes import index, signin, signup
from server.config import Config
from server.db import db
from server.db.model import Symptom
app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
app.register_blueprint(index.indexRoutes, url_prefix='/')
app.register_blueprint(signin.signinRoute, url_prefix='/signin')
app.register_blueprint(signup.signupRoute, url_prefix='/signup')