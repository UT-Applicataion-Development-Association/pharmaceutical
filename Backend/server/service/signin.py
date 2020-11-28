def executeService(json_data):
    user_name = json_data.get('username', None)
    if len(user_name) == 0:
        error_str = 'This user cannot be found in the database'
        return False, error_str
    return True, 'sign service'