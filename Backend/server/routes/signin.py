from flask import request, Blueprint
from server.controller import signin
signinRoute = Blueprint('signinRoute', __name__)


@signinRoute.route('/', methods=['GET'], strict_slashes=False)
def signinHandler():
    controller = signin.signinController()
    data = controller.getDetails(request.get_json())
    return data

