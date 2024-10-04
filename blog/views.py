from django.shortcuts import render

# Create your views here.
def http_blog(request):
    return render(request,'blog/blog.html')

def http_blogDetails(request):
    return render(request,'blog/blog-details.html')