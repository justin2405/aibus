from django.shortcuts import render, HttpResponse
from django.template import *
from .templates import *
import pytesseract  # type: ignore
from PIL import Image


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
