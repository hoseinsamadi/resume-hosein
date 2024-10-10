from django.shortcuts import render

# Create your views here.
def http_portfolioDetails(request):
    return render(request,'portfolio/portfolio-details.html')

def http_portfolio(request):
    return render(request,'portfolio/portfolio.html')
