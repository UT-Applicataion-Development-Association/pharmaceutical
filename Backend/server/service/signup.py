from server.db.model import Symptom
import server


def executeService(json_data):
    t = Symptom('ttttt test test test')
    with server.app.app_context():
        server.db.session.add(t)
        server.db.session.commit()
    return True, 'sign service'