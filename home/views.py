from django.shortcuts import render
from django.template import *
from .templates import *


def Home(request):
    context = {}
    return render(request, "index.html", context)

def Login(request):
    context = {}
    return render(request, "login.html", context)

def Createprofile(request):
    context = {}
    return render(request, "createprofile.html", context)

