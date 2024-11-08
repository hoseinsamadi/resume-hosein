from django.shortcuts import render,get_object_or_404
from blog.models import Post
# Create your views here.
def http_blog(request):
    posts = Post.objects.filter(status = 1)
    # post = get_object_or_404(Post, id=pid)
    context = {'posts':posts}
    
    return render(request,'blog/blog.html', context)

def http_blogDetails(request,pid):
    posts = get_object_or_404(Post, id=pid)
    context = {'posts':posts}
    return render(request,'blog/blog-details.html')