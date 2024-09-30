from django.shortcuts import render
from django.http import HttpRequest, HttpResponse, JsonResponse

def http_index(request):
    return render(request,'website/index.html')

