from django.db import models

# Create your models here.
# class User(models.Model):
#     title = models.CharField(max_length=255)
#     content = models.TextField()
class Post(models.Model):
    # images
    # author
    title = models.CharField(max_length=255)
    content = models.TextField(null=True)
    # tag
    # category
    counted_view = models.IntegerField(default=0) #defult=0
    status = models.BooleanField(default=False)
    published_date = models.DateTimeField(null=True)
    created_date = models.DateTimeField(auto_now_add=True, null=True)
    updates_date = models.DateTimeField(auto_now_add=True, null=True)
    # Comment