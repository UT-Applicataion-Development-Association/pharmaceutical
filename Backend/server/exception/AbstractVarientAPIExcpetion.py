"""
Author: William
"""
import sys

class AbstractVairentAPIExcpetion(RuntimeError):
    """
    Custom exception base class for all errors in thrown in the server
    """

    def __init__(self, message, level):
        msg = "Error occured on level " + level + " with message: "
        print(msg, file=sys.stderr)
        print(message, file=sys.stderr)




