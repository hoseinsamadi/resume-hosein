from django.contrib import admin
from django.urls import path
from portfolio.views import *

app_name = 'portfolio'

urlpatterns = [
    path('portfolio-details',http_portfolioDetails, name='portfolioDetails'),
    path('portfolio',http_portfolio, name='portfolio'),

]