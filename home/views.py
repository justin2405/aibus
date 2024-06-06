from atexit import register
import json
from xml.dom.minidom import Document
from django.shortcuts import render, HttpResponse
from django.template import *
from .templates import *
from itertools import zip_longest
import sys


# from flask import Flask, request

sys.path.append("/Users/mac/aibus/lib/python3.10/site-packages")
from docx import Document
import cv2
import easyocr
import PyPDF2
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

var_array = [
    "{{day}}",
    "{{date}}",
    "{{month}}",
    "{{year}}",
    "{{province}}",
    "{{name}}",
    "{{company_name}}",
    "{{company_name_en}}",
    "{{company_name_short}}",
    "{{company_address}}",
    "{{company_ward}}",
    "{{company_district}}",
    "{{company_province}}",
    "{{company_phone}}",
    "{{conpany_fax}}",
    "{{company_email}}",
    "{{conpany_web}}",
    "{{own_name}}",
    "{{own_sex}}",
    "{{dob_day}}",
    "{{dob_month}}",
    "{{dob_year}}",
    "{{kind}}",
    "{{national}}",
    "{{id_no}}",
    "{{id_created_day}}",
    "{{id_created_month}}",
    "{{id_created_year}}",
    "{{id_created_place}}",
    "{{id_expired_day}}",
    "{{id_expired_month}}",
    "{{id_expired_year}}",
    "{{live_address}}",
    "{{live_ward}}",
    "{{live_province}}",
    "{{live_city}}",
    "{{live_nation}}",
    "{{contact_address}}",
    "{{contact_ward}}",
    "{{contact_district}}",
    "{{contact_city}}",
    "{{contact_nation}}",
    "{{contact_phone}}",
    "{{contact_email}}",
    "{{amount}}",
    "{{amount_word}}",
    "{{amount_foreign}}",
    "{{ceo_name}}",
    "{{ceo_phone}}",
    "{{account_name}}",
    "{{account_phone}}",
    "{{tax_address}}",
    "{{tax_ward}}",
    "{{tax_district}}",
    "{{tax_city}}",
    "{{tax_phone}}",
    "{{tax_fax}}",
    "{{tax_email}}",
    "{{start_date}}",
    "{{start_month}}",
    "{{start_year}}",
    "",
]


def Home(request):
    context = {}
    return render(request, "index.html", context)


def process_image(request):
    if request.method == "POST":
        file_content = request.FILES["image_1"].file.name
        reader = easyocr.Reader(["vi"])
        result = reader.readtext(file_content)
        mat = cv2.imread(file_content)
        boxes = [line[0] for line in result]
        texts = [line[1] for line in result]
        scores = [line[2] for line in result]

        for box in boxes:
            top_left = (int(box[0][0]), int(box[0][1]))
            bottom_right = (int(box[2][0]), int(box[2][1]))

        cv2.rectangle(mat, top_left, bottom_right, (0, 255, 0), 2)
        print(texts)
        # cv2.waitKey(0)
        return texts
    else:
        return HttpResponse("Method not allowed")


def Login(request):
    context = {}
    return render(request, "login.html", context)


def Createprofile(request):
    context = {}
    return render(request, "createprofile.html", context)


def Success(request):
    context = {}
    return render(request, "success.html", context)


def Error(request):
    context = {}
    return render(request, "error.html", context)


def Recruitment(request):
    context = {}
    return render(request, "recruitment.html", context)


# @register
# def convert_doc(request):
#     document = docx.Document("home/test.docx")
#     for para in document.paragraphs:
#         print(para.text)
#     # document.save("test.docx")
#     return document


def fill_data(doc_path, data, output_path):
    # Open the original DOCX file
    original_doc = Document(doc_path)

    # Save it as a new file (cloning)
    original_doc.save("cloned.docx")
    # Open the DOCX file
    doc = Document(doc_path)

    # Replace placeholders with data
    for paragraph in doc.paragraphs:
        for key, value in data.items():
            if key in paragraph.text:
                paragraph.text = paragraph.text.replace(key, value)

    # Save the modified document
    doc.save(output_path)


# Data to fill in the DOCX
export_data = []
for ele in var_array:
    if data.ele != null:
        export_data.append(ele, data.ele)

# data = {
#     "{{name}}": "John Doe",
#     "{{date}}": "05",
#     "{{day}}": "Wednessday",
#     "{{month}}": "06",
#     "{{year}}": "2024",
#     "{{province}}": "Ben Tre",
# }

# Fill the data into the document
fill_data("cloned.docx", data, "filled_docx.docx")
