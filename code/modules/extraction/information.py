import re
from enum import Enum


class InvalidInformationType(Exception): pass


class InformationTypeMismatch(Exception): pass


class InformationType(Enum):
    TEXT = 'TEXT'
    TIME = 'TIME'
    DATE = 'DATE'
    GRAPHIC = 'GRAPHIC'

    def __eq__(self, other):
        if isinstance(other, InformationType): return self.value == other.value
        elif isinstance(other, str): return self.value == other
        else: raise InvalidInformationType("Invalid information type")


class CustomDate:
    def __init__(self, day, month, year):
        self.day = day
        self.month = month
        self.year = year
        self.tuple = day, month, year

    @staticmethod
    def fromFormattedString(string: str, regex: str):
        _format = re.compile(regex)
        print('Extracted date : ', string)
        date_match = _format.search(string)
        if date_match is not None:
            return CustomDate(date_match.group(1), date_match.group(2), date_match.group(3))
        else: return None

    def __eq__(self, other):
        return self.tuple == other.tuple

    def __str__(self):
        return str(self.tuple)


class CustomTime:
    def __init__(self, hours, minutes, seconds):
        self.hours = hours
        self.minutes = minutes
        self.seconds = seconds
        self.tuple = hours, minutes, seconds

    @staticmethod
    def fromFormattedString(string: str, format: str):
        _format = re.compile(format)
        time_match = _format.search(string)
        return CustomTime(time_match.group(1), time_match.group(2), time_match.group(3))

    def __eq__(self, other):
        return self.tuple == other.tuple

    def __str__(self):
        return str(self.tuple)
