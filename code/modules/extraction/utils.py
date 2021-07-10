import io
import os

import cv2
import numpy as np
import pytesseract
from PIL import Image

import app_utils
import modules.extraction.dataset as dataset
# from modules.extraction.inspect import InspectionInformation, InspectionInformationBuilder

source_file = '.datasets\\IPADET\\v0\\train.json'


def is_extraction_compatible(mask_path, box=None):
    mask = Image.open(io.BytesIO(mask_path)) if type(mask_path) == bytes else Image.open(mask_path)
    mask_array = np.array(mask)
    image_width, image_height = mask.size
    xmin, ymin, xmax, ymax = box if box else compute_box_from_mask_array(mask_array)
    if xmin == 0 or ymin == 0 or xmax == image_width or ymax == image_height:
        return False
    elif (xmax - xmin) < (ymax - ymin):
        return False
    else:
        return True


def create_image_data(data_source_file=source_file, data_path=dataset.data_path):
    data_dict = app_utils.load_json(data_source_file)
    for data in data_dict['data']:
        image_name = os.path.basename(data['image_url'])
        annotation_dict = app_utils.load_json(data['annotation_url'])
        for shape in annotation_dict['shapes']:
            save_path = os.path.join(data_path, '.' + shape['label'], image_name)
            points = shape['points']
            image = cv2.imread(data['image_url'])
            perspective_image = app_utils.warp_perspective_image(image, app_utils.order_points(np.array(points)))
            Image.fromarray(perspective_image).save(save_path)


def extract_text(image):
    return pytesseract.image_to_string(image)

'''
def load_inspection_information(lookup_data: dict(str, str), inspection_parameters: dict(str, dict)):
    inspection_information: dict[str, InspectionInformation] = dict()
    for field_id in lookup_data:
        if field_id in inspection_parameters:
            string = lookup_data[field_id]
            field_inspection_parameters = inspection_parameters[field_id]
            field_type = field_inspection_parameters['type']
            inspection_information[field_id] = InspectionInformationBuilder.build(field_type, string,
                                                                                  field_inspection_parameters)

    return inspection_information
'''

def compute_box_from_mask_array(mask_array):
    pos = np.where(mask_array)
    xmin = np.min(pos[1])
    xmax = np.max(pos[1])
    ymin = np.min(pos[0])
    ymax = np.max(pos[0])
    box = xmin, ymin, xmax, ymax

    return box


if __name__ == '__main__':
    pass
