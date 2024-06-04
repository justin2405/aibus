from atexit import register
import json
from xml.dom.minidom import Document
from django.shortcuts import render, HttpResponse
from django.template import *
from .templates import *
from PIL import Image
import sys
import numpy as np
from io import BytesIO
from flask import Flask, request

sys.path.append("/Users/mac/aibus/lib/python3.10/site-packages")
import docx
import pytesseract
import argparse
import cv2


def Home(request):
    context = {}
    return render(request, "index.html", context)


def process_image(request):
    content_list = {}
    if request.method == "POST":
        print(request.FILES["image_1"].name)
        img_cv = cv2.imread(request.FILES["image_1"].name)
        # d = cv2.cvtColor(img_cv, cv2.COLOR_BGR2RGB)
        gray = cv2.cvtColor(img_cv, cv2.COLOR_BGR2GRAY)
        threshold_img = cv2.threshold(
            gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU
        )[1]
        image_file = request.FILES["image_1"]
        image = Image.open(threshold_img)
        text = pytesseract.image_to_string(
            image, lang="vie"
        )  # , config=r"--oem 2 --psm 7"
        print(text)
        return HttpResponse(text)
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



@register
def convert_doc(request):
    document = docx.Document("home/test.docx")
    for para in document.paragraphs:
        print(para.text)
    # document.save("test.docx")
    return document
