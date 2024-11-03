from django.contrib import admin
from .models import Portfolio
# Register your models here.
class PostAdmin(admin.ModelAdmin):
    date_hierarchy = 'created_date_portfolio'
    #fields = ('title','published_date',)
    list_display = ('title_portfolio' ,'content_view_portfolio','status_portfolio','published_date_portfolio','created_date_portfolio')
    list_filter = ('status_portfolio',)
    search_fields = ['title_portfolio','content_portfolio']
admin.site.register(Portfolio, PostAdmin)