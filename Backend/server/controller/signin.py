from flask import abort
from server.service import signin
from server.controller import Controller


class signinController(Controller):
    def getDetails(self, json_data):
        def validate_key(keys):
            return all([key in json_data for key in keys])
        if not validate_key(['username', 'password']):
            abort(400, 'Missing parameters in the request')
        else:
            found, res = signin.executeService(json_data)
            if not found:
                abort(404, 'No valid user found')
            return res

