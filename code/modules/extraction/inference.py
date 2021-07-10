import numpy as np

from safety_image import SafetyImage
import modules.extraction.information_field
# from modules.extraction.information_field import InformationFieldBuilder


def extract_information(image_path, fields_extraction_parameters):
    extraction_results = dict()
    # app_utils.clear_dir('ocr/images', '.ocr.jpg')
    document_image = SafetyImage(image_path).image
    document_image_array = np.array(document_image)

    for field_id in fields_extraction_parameters:
        field_extraction_parameters = fields_extraction_parameters[field_id]
        field_type = fields_extraction_parameters['type']
        extraction_results[field_id] = modules.extraction.information_field.InformationFieldBuilder.build(field_type, document_image_array,
                                                                     field_extraction_parameters)

    return extraction_results


if __name__ == '__main__':
    pass
