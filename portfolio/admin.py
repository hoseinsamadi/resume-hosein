from django.contrib import admin
from .models import Portfolio
# Register your models here.
class PostAdmin(admin.ModelAdmin):
    date_hierarchy = 'created_date'
    #fields = ('title','published_date',)
    list_display = ('title' ,'counted_views','status','published_date','created_date')
admin.site.register(Portfolio)