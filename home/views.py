from atexit import register
from xml.dom.minidom import Document
from django.shortcuts import render, HttpResponse
from django.template import *
from .templates import *
from PIL import Image
import sys

sys.path.append("/Users/mac/aibus/lib/python3.10/site-packages")
import docx
import pytesseract


def Home(request):
    context = {}
    return render(request, "index.html", context)


def process_image(request):
    if request.method == "post":
        image_file = request.FILES["image"]
        image = Image.open(image_file)
        text = pytesseract.image_to_string(image)
        return render(request, "ocr/result.html", {"text": text})
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
