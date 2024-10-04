from django.contrib import admin
from django.urls import path
from blog.views import *

app_name = 'blog'

urlpatterns = [
    path('',http_blog, name='blog'),
    path('details',http_blogDetails, name='blogDetails'),

]