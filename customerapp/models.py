from django.db import models
from customerapp.choices import *

# Create your models here.
class CateringForm(models.Model):
    catering_form_id = models.AutoField(primary_key=True, serialize=True)
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    phone_number = models.CharField(max_length=25)
    email = models.EmailField()
    package_type = models.CharField(max_length=25, choices=CATERINGFORM_PACKAGE_CHOICES, null=False, blank=True)
    people_attending = models.CharField(max_length=25, null=False, blank=False)
    budget = models.DecimalField(max_digits=8, decimal_places=2, null=False, blank=False)
    additional_hours = models.CharField(max_length=25, choices=CATERINGFORM_HOURS_CHOICES, default=0,null=False, blank=True)
    event_date = models.DateField()
    location = models.CharField(max_length=25)
    message = models.TextField(max_length=1500, null=True, blank=True)
    payment_type = models.CharField(max_length=25, choices=CATERINGFORM_PAYMENT_CHOICES, null=False, blank=True)

    def __str__(self):
        return self.email

class ContactForm(models.Model):
    contact_form_id = models.AutoField(primary_key=True, serialize=True)
    first_name = models.CharField(max_length=25, null=False, blank=False)
    last_name = models.CharField(max_length=25, null=False, blank=False)
    phone_number = models.CharField(max_length=25, null=False, blank=False)
    email = models.EmailField()
    contact_type = models.CharField(max_length=25, choices=CONTACTFORM_CHOICES, null=False, blank=True)
    # image = models.ImageField(upload_to='uploads/images', null=True, blank=True)
    message = models.TextField(max_length=1500, null=False, blank=False)

    def __str__(self):
        return self.email

class ReviewForm(models.Model):
    review_form_id = models.AutoField(primary_key=True, serialize=True)
    first_name = models.CharField(max_length=25)
    last_initial = models.CharField(max_length=25)
    date_visited = models.DateField()
    food_rating = models.CharField(max_length=25, choices=REVIEWFORM_FOOD_CHOICES, null=False, blank=True)
    service_rating = models.CharField(max_length=25, choices=REVIEWFORM_SERVICE_CHOICES, null=False, blank=True)
    review_message = models.TextField(max_length=1500, null=True, blank=True)
    image = models.ImageField(upload_to='uploads/images', null=True, blank=True)

    def __str__(self):
        return self.first_name