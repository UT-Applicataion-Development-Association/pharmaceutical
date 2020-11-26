from os import environ, path
from dotenv import load_dotenv
from datetime import timedelta


basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))


class Config:
    """Set Flask config variables"""
    SECRET_KEY = environ.get('SECRET_KEY')
    PERMANENT_SESSION_LIFETIME = timedelta(days=float(environ.get('PERMANENT_SESSION_LIFETIME')))
    SQLALCHEMY_DATABASE_URI = path.join(basedir, 'db', environ.get('SQLALCHEMY_DATABASE_URI'))
    TESTING = True
