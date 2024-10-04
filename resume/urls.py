from django.contrib import admin
from django.urls import path
from resume.views import *

app_name = 'resume'

urlpatterns = [
    path('',http_index, name='index'),
    path('about',http_about, name='about'),
    path('contact',http_contact, name='contact'),
    path('education',http_education, name='eduction'),
    path('portfolio-details',http_portfolioDetails, name='portfolioDetails'),
    path('portfolio',http_portfolio, name='portfolio'),
    path('pricing',http_pricing, name='pricing'),
    path('service',http_service, name='service'),
]
