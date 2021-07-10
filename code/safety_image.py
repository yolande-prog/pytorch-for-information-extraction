import io
import os
import numpy as np

from PIL import Image


class SafetyImage:
    @staticmethod
    def ImageFromURL(image_path):
        if not os.path.exists(image_path): return 'Invalid Image: URL Does Not Exist !'
        return Image.open(image_path)

    @staticmethod
    def ImageFromBytes(image_bytes):
        return Image.open(io.BytesIO(image_bytes))

    @staticmethod
    def ImageFromArray(image_array):
        return Image.fromarray(image_array)

    @staticmethod
    def ImageFromImage(image):
        return image

    ImageTypes = {
        str: ImageFromURL,
        bytes: ImageFromBytes,
        Image: ImageFromImage,
        np.ndarray: ImageFromArray
    }

    def __init__(self, image_data):
        self.image = SafetyImage.ImageTypes[type(image_data)](image_data)
