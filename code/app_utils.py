import csv
import io
import json
import os
import random
import string

import cv2
import numpy as np
import torch
from PIL import Image

CPU_DEVICE = torch.device('cpu')
CUDA_DEVICE = torch.device('cuda')

ASCII_LOW_CASE_LETTERS = string.ascii_lowercase
ALLOWED_IMAGE_EXTENSIONS = set(['png', 'jpg', 'jpeg'])

MASKS_FOLDER = os.path.join('assets', 'masks')
SENGMENTED_IMAGES_FOLDER = os.path.join('assets', 'segmented_images')
ALIGNED_IMAGES_FOLDER = os.path.join('assets', 'aligned_images')


def is_cuda_device(device):
    return True if device == CUDA_DEVICE else False


def is_image_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_IMAGE_EXTENSIONS


def crop_image(image_array, crop_cords):
    start_col, start_row, end_col, end_row = crop_cords
    return image_array[start_row:end_row, start_col:end_col]


def filter_array(elements, *filters):
    filter_elements = list()
    for filter in filters:
        filter_elements.extend(filter)
    return [element for element in elements if not filter_elements.__contains__(element)]


def clear_dir(mydir, ext):
    files_list = [f for f in os.listdir(mydir) if f.endswith(ext)]
    for f in files_list:
        os.remove(os.path.join(mydir, f))


def mkdir(my_dir):
    if os.path.exists(my_dir):
        print("'{}' folder already exists. Skipping creation...".format(os.path.basename(my_dir)))
    else:
        try:
            os.mkdir(my_dir)
        except OSError:
            print("Failed to directory '{}'. An unexpected error occurred.".format(os.path.basename(my_dir)))
        else:
            print("Directory '{}' successfully created".format(os.path.basename(my_dir)))


def is_json(json_string):
    try:
        json_object = json.loads(json_string)
    except ValueError as e:
        return False
    return json_object


def load_json(json_url):
    with open(json_url) as json_file:
        my_dict = json.load(json_file)
        json_file.close()
    return my_dict


def load_csv(csv_url, encoding=None):
    with open(csv_url, encoding=encoding) as csv_file:
        my_csv = list()
        for row in csv.reader(csv_file, delimiter=';', quotechar='|'):
            my_csv.append(row)
    return my_csv[:1][0], my_csv[1:]  # retrun (keys, rows)


def write_csv(keys, rows, csv_url, encoding=None):
    with open(csv_url, "w+", newline='', encoding=encoding) as csvfile:
        csv_writer = csv.writer(csvfile, delimiter=';', quotechar='|', quoting=csv.QUOTE_MINIMAL)
        csv_writer.writerow(keys)
        for row in rows:
            csv_writer.writerow(row)


def threshold_image(image_array, threshold=0.5):
    image_array_gray = cv2.cvtColor(image_array, cv2.COLOR_RGB2GRAY)
    uniques = np.unique(image_array_gray)
    thres = uniques[int(len(uniques) * threshold)]

    _, black_on_white_image = cv2.threshold(image_array_gray, thres, 255, cv2.THRESH_BINARY)
    #black_on_white_image = cv2.adaptiveThreshold(image_array_gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, \
    #                                                 cv2.THRESH_BINARY, 11, 2)

    return black_on_white_image


def convert_list_to_dict(keys, rows, id_key=None):
    my_dict = dict()
    for id, row in enumerate(rows):
        if len(row) == len(keys):
            new_dict = dict()
            for key, entry in zip(keys, row):
                new_dict[key] = entry.replace("'", '').replace(" \" ", '')
            if id_key == None:
                my_dict[id] = new_dict
            else:
                my_dict[new_dict[id_key]] = new_dict
    return my_dict


def dump_json(object, target_file):
    json_file = open(target_file, "w+")
    json.dump(object, json_file, indent=4)
    json_file.close()


def dump_dict_to_csv(dictionary, target_file, columns=None, encoding=None):
    if columns == None:
        keys = set()
        for item_id in dictionary:
            item = dictionary[item_id]
            keys.update([key for key in item])
        columns = list(keys)

    rows = list()
    for item_id in dictionary:
        row = list()
        item = dictionary[item_id]
        for column in columns:
            if not item.__contains__(column): item[column] = None
            row.append(item[column] if not item[column] == None else row.append(str(item[column])))
        rows.append(row)

    write_csv(columns, rows, target_file, encoding=encoding)


def get_enabled_fields(ocr_hyperparameters_url):
    enabled_fields = list()
    ocr_hyperparameters = load_json(ocr_hyperparameters_url)
    for field in ocr_hyperparameters:
        if ocr_hyperparameters[field].__contains__('enable'):
            if ocr_hyperparameters[field]['enable']:
                enabled_fields.append(field)
    return enabled_fields


def is_valid_score(string):
    try:
        str_num = float(string)
        if 0.0 < str_num and str_num < 1.0:
            return str_num
        else:
            return False
    except:
        print('Not numeric')
        return False


def get_random_mask_url(length=16):
    random_str = None
    masks_urls = [mask_url for mask_url in os.listdir(MASKS_FOLDER) if os.path.isfile(mask_url)]
    while (random_str == None or masks_urls.__contains__(random_str)):
        random_str = ''.join(random.choice(ASCII_LOW_CASE_LETTERS) for i in range(length))
    del (masks_urls)
    random_str = random_str.__add__('.jpg')
    random_str = os.path.join(MASKS_FOLDER, random_str)
    return random_str


def get_random_segmented_image_url(length=16):
    random_str = None
    segmented_image_urls = [segmented_image_url for segmented_image_url in os.listdir(SENGMENTED_IMAGES_FOLDER) if
                            os.path.isfile(segmented_image_url)]
    while (random_str == None or segmented_image_urls.__contains__(random_str)):
        random_str = ''.join(random.choice(ASCII_LOW_CASE_LETTERS) for i in range(length))
    del (segmented_image_urls)
    random_str = random_str.__add__('.jpg')
    random_str = os.path.join(SENGMENTED_IMAGES_FOLDER, random_str)
    return random_str


def get_random_aligned_image_url(length=16):
    random_str = None
    segmented_image_urls = [segmented_image_url for segmented_image_url in os.listdir(ALIGNED_IMAGES_FOLDER) if
                            os.path.isfile(segmented_image_url)]
    while (random_str == None or segmented_image_urls.__contains__(random_str)):
        random_str = ''.join(random.choice(ASCII_LOW_CASE_LETTERS) for i in range(length))
    del (segmented_image_urls)
    random_str = random_str.__add__('.jpg')
    random_str = os.path.join(ALIGNED_IMAGES_FOLDER, random_str)
    return random_str


def order_points(pts):
    rect = np.zeros((4, 2), dtype="float32")

    s = pts.sum(axis=1)
    rect[0] = pts[np.argmin(s)]
    rect[2] = pts[np.argmax(s)]

    diff = np.diff(pts, axis=1)
    rect[1] = pts[np.argmin(diff)]
    rect[3] = pts[np.argmax(diff)]

    return rect


def warp_perspective_image(image_array, rect):
    (tl, tr, br, bl) = rect

    widthA = np.sqrt(((br[0] - bl[0]) ** 2) + ((br[1] - bl[1]) ** 2))
    widthB = np.sqrt(((tr[0] - tl[0]) ** 2) + ((tr[1] - tl[1]) ** 2))
    maxWidth = max(int(widthA), int(widthB))

    heightA = np.sqrt(((tr[0] - br[0]) ** 2) + ((tr[1] - br[1]) ** 2))
    heightB = np.sqrt(((tl[0] - bl[0]) ** 2) + ((tl[1] - bl[1]) ** 2))
    maxHeight = max(int(heightA), int(heightB))

    dst = np.array([
        [0, 0],
        [maxWidth - 1, 0],
        [maxWidth - 1, maxHeight - 1],
        [0, maxHeight - 1]], dtype="float32")

    M = cv2.getPerspectiveTransform(rect, dst)
    warped = cv2.warpPerspective(image_array, M, (maxWidth, maxHeight))

    return cv2.cvtColor(warped, cv2.COLOR_BGR2RGB)


def warp_perpective_image_from_mask(image_array, mask_array):
    nonzeros = np.nonzero(mask_array)
    X, Y = nonzeros[1], nonzeros[0]
    points = np.vstack((X, Y)).T
    rect = order_points(points)
    perspective_image_array = warp_perspective_image(image_array, rect)

    return perspective_image_array


