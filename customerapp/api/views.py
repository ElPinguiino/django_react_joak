from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, viewsets, permissions
from .serializers import *
from ..models import *


class ReviewFormViewset(viewsets.ModelViewSet):
    queryset = ReviewForm.objects.all()
    serializer_class = ReviewFormSerializer
    permission_classes = [
        permissions.AllowAny
    ]

class ContactFormViewset(viewsets.ModelViewSet):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer
    permission_classes = [
        permissions.AllowAny
    ]

class CateringFormViewset(viewsets.ModelViewSet):
    queryset = CateringForm.objects.all()
    serializer_class = CateringFormSerializer
    permission_classes = [
        permissions.AllowAny
    ]


###
# @api_view(['GET', 'POST'])
# def catering_form_list(request):
#     if request.method == 'GET':
#         qs = CateringForm.objects.all()
#         serializer = CateringFormSerializer(qs, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = CateringFormSerializer(data=request.data)
#         if serializer.is_valid():
#             # view logic
#             print(request.data)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET', 'POST'])
# def contact_form_list(request):
#     if request.method == 'GET':
#         qs = ContactForm.objects.all()
#         serializer = ContactFormSerializer(qs, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = ContactFormSerializer(data=request.data)
#         if serializer.is_valid():
#             # view logic
#             print(request.data)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET', 'POST'])
# def review_form_list(request):
#     if request.method == 'GET':
#         qs = ReviewForm.objects.all()
#         serializer = ReviewFormSerializer(qs, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = ReviewFormSerializer(data=request.data)
#         if serializer.is_valid():
#             # view logic
#             print(request.data)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

###