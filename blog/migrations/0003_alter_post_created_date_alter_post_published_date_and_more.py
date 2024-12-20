# Generated by Django 5.1.1 on 2024-11-01 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_post_delete_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='created_date',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='published_date',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='status',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='post',
            name='updates_date',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
