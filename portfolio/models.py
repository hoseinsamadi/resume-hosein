from django.db import models

# Create your models here.
class Portfolio(models.Model):
    # author_portfolio
    # image_portfolio
    title_portfolio = models.CharField(max_length=255)
    content_portfolio = models.TextField(null=True)
    # category_id
    # tage_id
    content_view_portfolio =  models.IntegerField(default=0)
    status_portfolio = models.BooleanField(default=False)
    published_date_portfolio = models.DateTimeField(null=True)
    created_date_portfolio = models.DateTimeField(auto_now_add=True, null=True)
    updates_date_portfolio = models.DateTimeField(auto_now_add=True, null=True)
    
    
    def __str__(self):
        return self.title_portfolio