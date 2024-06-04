from django.contrib import admin
from django.urls import path
from home.views import *

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", Home, name="home"),
    path("login/", Login, name="login"),
    path("createprofile/", Createprofile, name="createprofile"),
    path("success/", Success, name="success"),
    path("error/", Error, name="error"),
    path("recruitment/", Recruitment, name="recruitment"),
    path("convert/", convert_doc, name="convert"),
    path("process_image/", process_image, name="process_image"),
    
]
