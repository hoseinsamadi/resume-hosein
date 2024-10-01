from django.shortcuts import render
from django.http import HttpRequest, HttpResponse, JsonResponse

def http_index(request):
    return render(request,'website/index.html')

def http_about(request):
    return render(request,'website/about.html')

def http_contact(request):
    return render(request,'website/contact.html')

def http_education(request):
    return render(request,'website/education.html')

def http_portfolioDetails(request):
    return render(request,'website/portfolio-details.html')

def http_portfolio(request):
    return render(request,'website/portfolio.html')

def http_pricing(request):
    return render(request,'website/pricing.html')

def http_service(request):
    return render(request,'website/service.html')