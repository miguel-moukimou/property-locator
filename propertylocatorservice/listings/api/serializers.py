from rest_framework import serializers
from listings.models import Listing, Poi
from django.contrib.gis.measure import D
from django.contrib.gis.geos import Point


class ListingSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Listing
        fields = '__all__'


class PoiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poi
        fields = '__all__'