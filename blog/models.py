from django.db import models

# Create your models here.
class User(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
