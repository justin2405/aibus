from django.db import models


def users():
    user_name = models.CharField(max_length=100)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=50)
    dob = models.DateField()
    id_numbers = models.CharField(max_length=12)
