from abc import abstractmethod, ABCMeta

import modules.extraction.inference as inference
from modules.extraction.information import InvalidInformationType, InformationTypeMismatch, InformationType, CustomDate, \
    CustomTime
from modules.extraction.information_field import InformationField


class InspectionInformation:
    def __init__(self, string, field_inspection_parameters):
        self.type = None
        self.value = None
        self.string = string
        self.id = field_inspection_parameters['id']
        self.inspection_parameters = field_inspection_parameters

        self.init_type()
        self.assert_type()
        self.init_value()

    @abstractmethod
    def init_value(self): raise NotImplementedError("Must override method 'init_value'")

    @abstractmethod
    def init_type(self): raise NotImplementedError("Must override method 'init_type'")

    def inspect(self, information_field: InformationField): return self.value == information_field.value()

    def assert_type(self):
        if self.type != self.field_extraction_parameters['type']:
            raise InformationTypeMismatch("InformationType mismatch for {} : {} != {}"
                                          .format(type(self).__name__, self.field_extraction_parameters['type'],
                                                  self.type))


class TextInformation(InspectionInformation):
    def __init__(self, string, field_inspection_parameters):
        super.__init__(string, field_inspection_parameters)

    def init_value(self):
        self.value = self.string

    def init_type(self):
        self.type = InformationType.TEXT


class DateInformation(InspectionInformation):
    def __init__(self, string, field_inspection_parameters):
        super.__init__(string, field_inspection_parameters)
        self.format = self.field_extraction_parameters['format']

    def init_value(self):
        date = CustomDate.fromFormattedString(self.string, self.format)
        self.value = date

    def init_type(self):
        self.type = InformationType.DATE


class TimeInformation(InspectionInformation):
    def __init__(self, string, field_inspection_parameters):
        super.__init__(string, field_inspection_parameters)
        self.format = self.field_extraction_parameters['format']

    def init_value(self):
        time = CustomTime.fromFormattedString(self.string, self.format)
        self.value = time

    def init_type(self):
        self.type = InformationType.TIME


class InspectionInformationBuilder:
    __metaclass__ = ABCMeta

    @staticmethod
    def build(type: InformationType, string, field_inspection_parameters) -> InspectionInformation:
        if InformationType.TIME == type:
            return TimeInformation(string, field_inspection_parameters)
        elif InformationType.DATE == type:
            return DateInformation(string, field_inspection_parameters)
        elif InformationType.TEXT == type:
            return TextInformation(string, field_inspection_parameters)
        else:
            raise InvalidInformationType("Invalid Information Type : '{}'".format(type))


def inspect_document(image_path, fields_inspection_info, fields_extraction_params):
    extraction_results = inference.extract_information(image_path, fields_extraction_params)
    inspection_results = dict()
    for field_id in fields_inspection_info:
        field_inspection_info: InspectionInformation = fields_inspection_info[field_id]
        information_field = extraction_results[field_id]
        if information_field.is_comparable:
            inspection_results[field_id] = field_inspection_info.inspect(information_field)

    return extraction_results, inspection_results


if not __name__ == '__main__':
    pass
