from django.db import models


def users():
    user_name = models.CharField(max_length=100)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=50)
    dob = models.DateField()
    id_numbers = models.CharField(max_length=12)
    is_admin = models.BooleanField()
    is_investor = models.BooleanField()
    is_content_writer = models.BooleanField()
    is_affilate = models.BooleanField()


def price_table():
    date = models.DateField(auto_now=True)


def content():
    title = models.CharField(max_length=255)
    writer = models.CharField(max_length=100)
    content = models.CharField(max_length=10000)
    date = models.DateField(auto_now=True)
