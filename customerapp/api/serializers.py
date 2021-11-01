from rest_framework import serializers
from ..models import *

class CateringFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = CateringForm
        fields = ('catering_form_id','first_name', 'last_name', 'phone_number', 'email', 'package_type', 'people_attending', 'budget', 'event_date', 'additional_hours', 'location', 'message', 'payment_type')

class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = ('contact_form_id','first_name', 'last_name', 'phone_number', 'email', 'contact_type', 'message')

class ReviewFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewForm
        fields = ('review_form_id','first_name', 'last_initial', 'date_visited', 'food_rating', 'service_rating', 'review_message')