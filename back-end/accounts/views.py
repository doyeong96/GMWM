from django.shortcuts import render
from django.shortcuts import get_object_or_404, get_list_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
# Create your views here.
@api_view(['DELETE'])
def withdrawal(request):
    if request.method == 'DELETE':
        user = get_object_or_404(User,pk=request.user.pk)
        user.delete()
    return Response('check')

@api_view(['GET'])
def getuserinfo(request, user_pk):
    if request.method == 'GET':
        user = get_object_or_404(User,pk=request.user.pk)
        return Response(user)