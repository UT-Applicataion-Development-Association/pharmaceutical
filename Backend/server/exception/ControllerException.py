"""
Author: William
"""
from server.exception.AbstractVarientAPIExcpetion import AbstractVairentAPIExcpetion
from server.messages import Messages


class ControllerException(AbstractVairentAPIExcpetion):
    """
    All exception raised at the controller level will extend this exception
    This exception logs the necessary information and
    standardizes custom errors thrown where needed
    """
    def __init__(self, message):
        # Log error level
        super(Messages.controller_level)


