from django.contrib import admin
from resume.models import Contact
# Register your models here.
class PostAdmin(admin.ModelAdmin):
    date_hierarchy = 'created_date'
    #fields = ('title','published_date',)
    empty_value_display = '-empty-'
    # list_display =["title","counted_view"]
    list_display = ('name' ,'email','subject','created_date',)
    list_filter = ('subject','email',)
    search_fields = ['subject','message']
admin.site.register(Contact, PostAdmin)
