from django.shortcuts import render
from django.template import *
from .templates import *


def Home(request):
    context = {}
    return render(request, "index.html", context)
