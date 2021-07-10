from abc import abstractmethod, ABCMeta

import cv2
from PIL import Image

import app_utils
import modules.extraction.coordinates as coordinates
import modules.extraction.utils as utils
from modules.extraction.information import InvalidInformationType, InformationTypeMismatch, InformationType, CustomDate, \
    CustomTime


class InformationField:
    def __init__(self, document_image_array, field_extraction_parameters):
        self.type = None
        self.is_comparable = True
        self.field_extraction_parameters = field_extraction_parameters

        im_height, im_width, num_channels = document_image_array.shape
        cords = field_extraction_parameters
        x1, y1, x2, y2 = cords['left'], cords['top'], cords['width']+cords['left'], \
                        cords['height']+cords['top']

        self.cords = x1, y1, x2, y2
        # self.id = self.field_extraction_parameters['id']

        if 'enabled' in self.field_extraction_parameters:
            self.enabled = self.field_extraction_parameters['enabled']
        else: self.enabled =False

        if 'threshold' in self.field_extraction_parameters:
            self.threshold = self.field_extraction_parameters['threshold']
        else: self.threshold =None

        self.image_array = app_utils.crop_image(document_image_array, self.cords)

        self.init_type()
        self.assert_type()
        self.init_value()

    @abstractmethod
    def init_value(self): raise NotImplementedError("Must override method 'init_value'")

    @abstractmethod
    def init_type(self): raise NotImplementedError("Must override method 'init_type'")

    def image(self): return Image.fromarray(self.image_array)


    def filtered_image(self):
        if self.type != InformationType.GRAPHIC :
            return Image.fromarray(app_utils.threshold_image(self.image_array, self.threshold))
        else: return self.image();

    def assert_type(self):
        if self.type != self.field_extraction_parameters['type']:
            raise InformationTypeMismatch("InformationType mismatch for {} : {} != {}"
                                          .format(type(self).__name__, self.field_extraction_parameters['type'],
                                                  self.type))


class TextInformationField(InformationField):
    def __init__(self, document_image_array, field_extraction_parameters):
        super().__init__(document_image_array, field_extraction_parameters)

    def init_value(self):
        self.value = utils.extract_text(self.image_array)

    def init_type(self):
        self.type = InformationType.TEXT


class GraphicInformationField(InformationField):
    def __init__(self, document_image_array, field_extraction_parameters):
        super().__init__(document_image_array, field_extraction_parameters)
        self.is_comparable = False

    def init_value(self):
        self.value = self.image()

    def init_type(self):
        self.type = InformationType.GRAPHIC


class DateInformationField(TextInformationField):
    def __init__(self, document_image_array, field_extraction_parameters):
        if 'format' in field_extraction_parameters:
            self.format = field_extraction_parameters['format']
        else:
            self.format = '([0-9]{2}).([0-9]{2}).([0-9]{4})'

        super().__init__(document_image_array, field_extraction_parameters)

    def init_value(self):
        extracted_text = utils.extract_text(self.filtered_image())
        date = CustomDate.fromFormattedString(extracted_text, self.format)
        self.value = date

    def init_type(self):
        self.type = InformationType.DATE


class TimeInformationField(TextInformationField):
    def __init__(self, document_image_array, field_extraction_parameters):
        super().__init__(document_image_array, field_extraction_parameters)
        self.format = self.field_extraction_parameters['format']

    def init_value(self):
        extracted_text = utils.extract_text(self.filtered_image())
        time = CustomTime.fromFormattedString(extracted_text, self.format)
        self.value = time

    def init_type(self):
        self.type = InformationType.TIME


class InformationFieldBuilder:
    #__metaclass__ = ABCMeta

    @staticmethod
    def build(type: InformationType, document_image_array, field_extraction_parameters) -> InformationField:
        if InformationType.TIME == type:
            return TimeInformationField(document_image_array, field_extraction_parameters)
        elif InformationType.DATE == type:
            return DateInformationField(document_image_array, field_extraction_parameters)
        elif InformationType.TEXT == type:
            return TextInformationField(document_image_array, field_extraction_parameters)
        elif InformationType.GRAPHIC == type:
            return GraphicInformationField(document_image_array, field_extraction_parameters)
        else:
            raise InvalidInformationType("Invalid Information Type : '{}'".format(type))
