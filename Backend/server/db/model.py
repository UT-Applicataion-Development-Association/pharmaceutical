from server.db import db


def query_instance(model, parameters):
    res = model.query.filter_by(**parameters).all()
    return res


def str_repr(model):
    columns = model.__table__.columns
    res = ""
    for column in columns:
        val = getattr(model, column.name)
        res += f'{column.name}: {val} '
    return res


class Clinician(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(500), nullable=False)
    phone = db.Column(db.String(100))
    email = db.Column(db.String(100))

    def __init__(self, name, phone, email):
        self.name = name
        self.phone = phone
        self.email = email

    def __str__(self):
        return str_repr(self)


class Gene(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    parentId = db.Column(db.Integer, db.ForeignKey(id))

    def __init__(self, name, parentId):
        self.name = name
        self.parentId = parentId

    def __str__(self):
        return str_repr(self)


class Medication(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(500), nullable=False)

    def __init__(self, name):
        self.name = name

    def __str__(self):
        return str_repr(self)


class Symptom(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(500), nullable=False)

    def __init__(self, name):
        self.name = name

    def __str__(self):
        return str_repr(self)


class UserMedicationRelationship(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    medicationId = db.Column(db.Integer, db.ForeignKey(Medication.id), nullable=False)
    symptomId = db.Column(db.Integer, db.ForeignKey(Symptom.id), nullable=False)
    effectiveness = db.Column(db.Integer, nullable=False)

    def __init__(self, effectiveness=None):
        self.effectiveness = effectiveness

    def __str__(self):
        return str_repr(self)


class UserGeneRelationship(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    variantId = db.Column(db.Integer, db.ForeignKey(Gene.id), nullable=False)
    uniqueVariantId = db.Column(db.Integer, db.ForeignKey(Gene.id), nullable=False)

    def __str__(self):
        return str_repr(self)


class UserInfo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    DOB = db.Column(db.Date, nullable=False)
    isPatient = db.Column(db.Boolean, nullable=False)
    gender = db.Column(db.Integer, nullable=False)

    def __init__(self, name, DOB, isPatient, gender):
        self.name = name
        self.DOB = DOB
        self.isPatient = isPatient
        self.gender = gender

    def __str__(self):
        return str_repr(self)


class UserTime(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    createTime = db.Column(db.DateTime, nullable=False)
    accessTime = db.Column(db.DateTime, nullable=False)
    modifyTime = db.Column(db.DateTime, nullable=False)

    def __init__(self, createTime, accessTime, modifyTime):
        self.createTime = createTime
        self.accessTime = accessTime
        self.modifyTime = modifyTime

    def __str__(self):
        return str_repr(self)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)
    timeId = db.Column(db.Integer, db.ForeignKey(UserTime.id), nullable=False)
    infoId = db.Column(db.Integer, db.ForeignKey(UserInfo.id), nullable=False)
    clinicianId = db.Column(db.Integer, db.ForeignKey(Clinician.id), nullable=False)
    subsetId = db.Column(db.Integer, db.ForeignKey(UserGeneRelationship.id), nullable=False)
    medicationId = db.Column(db.Integer, db.ForeignKey(Medication.id))

    def __init__(self, email):
        self.email = email

    def __str__(self):
        return str_repr(self)


if __name__ == '__main__':
    x = Symptom('test symsdsd')
    add_instance([x])
