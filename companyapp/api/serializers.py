from rest_framework import serializers
from ..models import *

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('customer_id' ,'first_name' ,'last_name ','address','city','state','country','phone','email','birthdate')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('product_id' ,'product_name' ,'product_type' ,'product_cost' ,'product_price' ,'digital_product' ,'product_tag','product_image')

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('order_id' ,'customer_id' ,'date' ,'price' ,'cost','complete' )

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('employee_id','first_name','last_name','phone','email' ,'address','city','state','country','role','schedule','image','pay_rate')

class InspectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inspection
        fields = ('inspection_id','inspection_date','inspection_reason','inspection_person','inspection_message')

class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ('expense_id','expense_type','expense_cost','expense_date','expense_person','expense_message','expense_added')

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('task_id','task_message','task_date','task_person','task_added','task_status')

class BadgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Badge
        fields = ('badge_id','badge_name','badge_image','badge_description')

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ('document_id','document_name','document_type','document_file','document_added')

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('recipe_id','recipe_name','recipe_type','recipe_description')