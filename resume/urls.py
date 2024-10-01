from django.contrib import admin
from django.urls import path
from resume.views import *

urlpatterns = [
    path('',http_index),
    path('about',http_about),
    path('contact',http_contact),
    path('education',http_education),
    path('portfolio-details',http_portfolioDetails),
    path('portfolio',http_portfolio),
    path('pricing',http_pricing),
    path('service',http_service),
]
