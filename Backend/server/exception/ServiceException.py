"""
Author: William
"""
from server.exception.AbstractVarientAPIExcpetion import AbstractVairentAPIExcpetion
from server.messages import Messages


class ServiceException(AbstractVairentAPIExcpetion):
    """
    All exception raised at the Service level will use/extend this exception
    This can be a useful wrapper for any invalid database operations
    """

    def __init__(self, message):
        # Log error level
        super(message, Messages.service_level)


