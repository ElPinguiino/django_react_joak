from django.db import models
from companyapp.choices import *

# Create your models here.

## Models that will be used to interact with the customer in some way
class Customer(models.Model):
    customer_id = models.AutoField(primary_key=True)
    first_name = models.TextField(max_length=200, null=False)
    last_name = models.TextField(max_length=200, null=False)
    address = models.CharField(max_length=200, null=True)
    city = models.TextField(max_length=200, null=True)
    state = models.TextField(max_length=200, null=True)
    country = models.TextField(max_length=200, null=True)
    phone = models.CharField(max_length=200, null=False)
    email = models.EmailField(max_length=200, null=False)
    birthdate = models.DateTimeField()

    def __str__(self):
        return self.first_name

class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=200, null=True)
    product_type = models.CharField(max_length=50, choices=PRODUCT_CHOICES, null=False, blank=True)
    product_cost = models.DecimalField(max_digits=8, decimal_places=2, null=False, blank=False)
    product_price = models.DecimalField(max_digits=8, decimal_places=2, null=False, blank=False)
    digital_product = models.BooleanField(default=False, null=True, blank=False)
    product_tag = models.CharField(max_length=50, choices=PROUDCT_TAGS, null=False, blank=True)
    product_image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.product_name

class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    customer_id = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)
    #price = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)
    #cost = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)
    status = models.CharField(max_length=50, choices=ORDER_STATUS_CHOICES, null=False, blank=True)

    def __int__(self):
        return self.order_id

class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, blank=True, null=True)
    quantity = models.IntegerField(default=0, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

## Models that will solely be used to interact with JOAK personnel
class Employee(models.Model):
    employee_id = models.AutoField(primary_key=True)
    first_name = models.TextField()
    last_name = models.TextField()
    phone = models.CharField(max_length=200, null=True)
    email = models.EmailField()
    address = models.CharField(max_length=200, null=True)
    city = models.TextField(max_length=200, null=True)
    state = models.TextField(max_length=200, null=True)
    country = models.TextField(max_length=200, null=True)
    role = models.CharField(max_length=50, choices=EMPLOYEE_CHOICES, null=False, blank=True)
    schedule = models.CharField(max_length=200, null=True)
    image = models.ImageField(null=True, blank=True)
    pay_rate = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.first_name

class Inspection(models.Model):
    inspection_id = models.AutoField(primary_key=True)
    inspection_date = models.DateTimeField(auto_now_add=True)
    inspection_reason = models.CharField(max_length=50, choices=INSPECTION_CHOICES, null=False, blank=True)
    inspection_person = models.ForeignKey(Employee, on_delete=models.SET_NULL, blank=True, null=True)
    inspection_message = models.CharField(max_length=500, null=True)

    def __str__(self):
        return self.inspection_message

class Expense(models.Model):
    expense_id = models.AutoField(primary_key=True)
    expense_type = models.CharField(max_length=50, choices=EXPENSE_CHOICES, null=False, blank=True)
    expense_cost = models.CharField(max_length=200, null=True)
    expense_date = models.DateTimeField()
    expense_person = models.OneToOneField
    expense_message = models.CharField(max_length=1000, null=True)
    expense_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.expense_message

class Task(models.Model):
    task_id = models.AutoField(primary_key=True)
    #task_type = models.CharField(max_length=50, choices=TASK_CHOICES, null=False, blank=True)
    task_message = models.CharField(max_length=500, null=True)
    task_date = models.DateTimeField()
    task_person = models.ForeignKey(Employee, on_delete=models.SET_NULL, blank=True, null=True)
    task_added = models.DateTimeField(auto_now_add=True)
    task_status = models.BooleanField(default=False)

class Badge(models.Model):
    badge_id = models.AutoField(primary_key=True)
    badge_name = models.TextField(max_length=200, null=True)
    badge_image = models.ImageField()
    badge_description = models.CharField(max_length=500, null=True)
    #badge_conditions = models.

class Document(models.Model):
    document_id = models.AutoField(primary_key=True)
    document_name = models.TextField(max_length=200, null=True)
    document_type = models.CharField(max_length=50, choices=DOCUMENT_CHOICES, null=False, blank=True)
    document_file = models.FileField(null=True)
    document_added = models.DateTimeField(auto_now_add=True)

class Recipe(models.Model):
    recipe_id= models.AutoField(primary_key=True)
    recipe_name = models.CharField(max_length=500, null=True)
    recipe_type = models.CharField(max_length=50, choices=RECIPE_CHOICES, null=False, blank=True)
    recipe_description = models.CharField(max_length=500, null=True)
