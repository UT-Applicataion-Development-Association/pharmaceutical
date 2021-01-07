from flask import abort
from server.service import signup


class signupController():
    def getDetails(self, json_data):
        def validate_key(keys):
            return all([key in json_data for key in keys])
        found, res = signup.executeService(json_data)
        if not found:
            abort(404, 'No valid user found')
        return res