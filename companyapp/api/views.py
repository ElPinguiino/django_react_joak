from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from ..models import *

# Create your views here.
@api_view(['GET', 'POST'])
def customerview_list(request):
    if request.method == 'GET':
        qs = Customer.objects.all()
        serializer = CustomerSerializer(qs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            # view logic
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def productview_list(request):
    if request.method == 'GET':
        qs = Product.objects.all()
        serializer = ProductSerializer(qs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            # view logic
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def orderview_list(request):
    if request.method == 'GET':
        qs = Order.objects.all()
        serializer = OrderSerializer(qs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            # view logic
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def employeeview_list(request):
    if request.method == 'GET':
        qs = Employee.objects.all()
        serializer = EmployeeSerializer(qs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            # view logic
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def inspectionview_list(request):
    if request.method == 'GET':
        qs = Inspection.objects.all()
        serializer = InspectionSerializer(qs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = InspectionSerializer(data=request.data)
        if serializer.is_valid():
            # view logic
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def expenseview_list(request):
    if request.method == 'GET':
        qs = Expense.objects.all()
        serializer = ExpenseSerializer(qs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ExpenseSerializer(data=request.data)
        if serializer.is_valid():
            # view logic
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def taskview_list(request):
    if request.method == 'GET':
        qs = Task.objects.all()
        serializer = TaskSerializer(qs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            # view logic
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def badgeview_list(request):
    if request.method == 'GET':
        qs = Badge.objects.all()
        serializer = BadgeSerializer(qs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BadgeSerializer(data=request.data)
        if serializer.is_valid():
            # view logic
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def documentview_list(request):
    if request.method == 'GET':
        qs = Document.objects.all()
        serializer = DocumentSerializer(qs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DocumentSerializer(data=request.data)
        if serializer.is_valid():
            # view logic
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def recipeview_list(request):
    if request.method == 'GET':
        qs = Recipe.objects.all()
        serializer = RecipeSerializer(qs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            # view logic
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)