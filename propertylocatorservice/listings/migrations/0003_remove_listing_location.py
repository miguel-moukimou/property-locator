# Generated by Django 3.2.16 on 2023-01-15 19:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0002_listing_seller'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listing',
            name='location',
        ),
    ]
