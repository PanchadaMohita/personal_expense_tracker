import cv2
import pytesseract
import re

def extract_text(img):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    text = pytesseract.image_to_string(gray)
    return text


def clean_text(text):
    # remove weird symbols and extra spaces
    text = re.sub(r'[^\w\s\.\,\:\-\n]', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()
