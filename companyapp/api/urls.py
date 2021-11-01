from django.urls import path
from .views import *

urlpatterns = [
    path('customer/', customerview_list),
    path('product/', productview_list),
    path('order/', orderview_list),
    path('employee/', employeeview_list),
    path('inspection/', inspectionview_list),
    path('expense/', expenseview_list),
    path('task/', taskview_list),
    path('badge/', badgeview_list),
    path('document/', documentview_list),
    path('recipe/', recipeview_list)
]