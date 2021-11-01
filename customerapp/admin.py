from django.contrib import admin
from .models import *

class CateringFormAdmin(admin.ModelAdmin):
    list_display = ('catering_form_id','first_name', 'last_name', 'phone_number', 'email', 'package_type', 'people_attending', 'budget', 'event_date', 'additional_hours', 'location', 'message', 'payment_type')

class ContactFormAdmin(admin.ModelAdmin):
    list_display = ('contact_form_id','first_name', 'last_name', 'phone_number', 'email', 'contact_type', 'message')

class ReviewFormAdmin(admin.ModelAdmin):
    list_display = ('review_form_id','first_name', 'last_initial', 'date_visited', 'food_rating', 'service_rating', 'review_message')

# Register your models here.
admin.site.register(CateringForm, CateringFormAdmin)
admin.site.register(ContactForm, ContactFormAdmin)
admin.site.register(ReviewForm, ReviewFormAdmin)