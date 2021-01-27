from flask import request, Blueprint
from flask_cors import cross_origin
indexRoutes = Blueprint('indexRoutes', __name__)


@indexRoutes.route('/', methods=["GET"], strict_slashes=False)
def handler():
    return 'Index Route Handler'
