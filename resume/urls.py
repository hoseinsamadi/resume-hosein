from django.contrib import admin
from django.urls import path
from resume.views import http_index

urlpatterns = [
    path('',http_index),
]
