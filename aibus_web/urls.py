from django.contrib import admin
from django.urls import path, include
from home.views import *


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", Home, name="home"),
    path("login/", Login, name="login"),
    path("createprofile/", Createprofile, name="createprofile"),
    path("success/", Success, name="success"),
    path("error/", Error, name="error"),
    path("recruitment/", Recruitment, name="recruitment"),
    # path("convert/", convert_doc, name="convert"),
    path("process_image/", process_image, name="process_image"),
    path("handle_fill_data_request/", handle_fill_data_request, name="handle_fill_data_request"),
    # path("fill_data/", fill_data, name="fill_data"),
]
