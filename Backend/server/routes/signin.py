from flask import request, Blueprint
from flask_cors import cross_origin
from server.controller import signin
signinRoute = Blueprint('signinRoute', __name__)


@signinRoute.route('/', methods=['GET'], strict_slashes=False)
@cross_origin()
def signinHandler():
    controller = signin.signinController()
    data = controller.getDetails(request.get_json())
    return data

