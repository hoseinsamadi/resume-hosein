from django.shortcuts import render
from blog.models import Post
# Create your views here.
def http_blog(request):
    posts = Post.objects.filter(status = 1)
    context = {'posts': posts}
    return render(request,'blog/blog.html', context)

def http_blogDetails(request):
    return render(request,'blog/blog-details.html')