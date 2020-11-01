from flask import request, Blueprint
from server.controller import signup
signupRoute = Blueprint('signupRoute', __name__)


@signupRoute.route('/', methods=['POST'], strict_slashes=False)
def signupHandler():
    controller = signup.signupController()
    data = controller.getDetails(request.get_json())
    return data

