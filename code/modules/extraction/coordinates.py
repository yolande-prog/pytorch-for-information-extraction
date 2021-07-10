import math
import os

import numpy as np

import utils


def denormalise_point(normalised_point, lengh):
    if math.floor(normalised_point * lengh) <= 0:
        return math.ceil(normalised_point * lengh)
    if math.ceil(normalised_point * lengh) >= lengh:
        return math.floor(normalised_point * lengh)
    else:
        return round(normalised_point * lengh)


def compute_relative_coordinates(annotation_folder, ocr_parameters_url='ocr_parameters.json'):
    def is_annotation_file(annotation_file):
        return annotation_file.__contains__('.json') and not annotation_file == ocr_parameters_url

    annotation_files = [annotation_file for annotation_file in os.listdir(annotation_folder) if
                        is_annotation_file(annotation_file)]
    annotations = [utils.load_json(os.path.join(annotation_folder, annotation_file)) for annotation_file in
                   annotation_files]
    ocr_parameters = utils.load_json(os.path.join(annotation_folder, ocr_parameters_url))
    ocr_coordinates = dict()
    for annotation in annotations:
        width = annotation['imageWidth']
        height = annotation['imageHeight']
        for shape in annotation['shapes']:
            if not ocr_coordinates.__contains__(shape['label']): ocr_coordinates[shape['label']] = []
            if shape['shape_type'] == 'rectangle':
                (x1, y1), (x2, y2) = shape['points']
                x1, y1, x2, y2 = x1 / width, y1 / height, x2 / width, y2 / height
                ocr_coordinates[shape['label']].append([x1, y1, x2, y2])
    for field in ocr_coordinates.keys():
        if not ocr_parameters.__contains__(field): ocr_parameters[field] = dict()
        ocr_parameters[field]['cords'] = np.average(ocr_coordinates[field], axis=0).tolist()
    utils.dump_json(ocr_parameters, os.path.join(annotation_folder, ocr_parameters_url))
    return ocr_coordinates


if __name__ == '__main__':
    pass
