from django.contrib import admin
from .models import *

class CustomerAdmin(admin.ModelAdmin):
        list_display = ('customer_id' ,'first_name' ,'last_name','address','city','state','country','phone','email','birthdate')

class ProductAdmin(admin.ModelAdmin):
        list_display = ('product_id' ,'product_name' ,'product_type' ,'product_cost' ,'product_price' ,'digital_product' ,'product_tag','product_image')

class OrderAdmin(admin.ModelAdmin):
        list_display = ('order_id' ,'customer_id' ,'date', 'status' )

class OrderItemAdmin(admin.ModelAdmin):
        list_display = ('product' ,'order' ,'quantity' ,'date_added')       
class EmployeeAdmin(admin.ModelAdmin):
        list_display = ('employee_id','first_name','last_name','phone','email' ,'address','city','state','country','role','schedule','image','pay_rate')

class InspectionAdmin(admin.ModelAdmin):
        list_display = ('inspection_id','inspection_date','inspection_reason','inspection_person','inspection_message')

class ExpenseAdmin(admin.ModelAdmin):
        list_display = ('expense_id','expense_type','expense_cost','expense_date','expense_person','expense_message','expense_added')

class TaskAdmin(admin.ModelAdmin):
        list_display = ('task_id','task_message','task_date','task_person','task_added','task_status')

class BadgeAdmin(admin.ModelAdmin):
        list_display = ('badge_id','badge_name','badge_image','badge_description')

class DocumentAdmin(admin.ModelAdmin):
        list_display = ('document_id','document_name','document_type','document_file','document_added')

class RecipeAdmin(admin.ModelAdmin):
        list_display = ('recipe_id','recipe_name','recipe_type','recipe_description')

# Register your models here.
admin.site.register(Customer, CustomerAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(Employee, EmployeeAdmin)
admin.site.register(Inspection, InspectionAdmin)
admin.site.register(Expense, ExpenseAdmin)
admin.site.register(Task, TaskAdmin)
admin.site.register(Badge, BadgeAdmin)
admin.site.register(Document, DocumentAdmin)
admin.site.register(Recipe, RecipeAdmin)