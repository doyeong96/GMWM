from django.shortcuts import render
from django.shortcuts import get_object_or_404, get_list_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import update_session_auth_hash, get_user_model
from .models import User
from .serializers import CustomRegisterSerializer
# Create your views here.
@api_view(['DELETE'])
def withdrawal(request):
    if request.method == 'DELETE':
        user = get_object_or_404(get_user_model(),pk=request.user.pk)
        user.delete()
    return Response('check')

@api_view(['GET'])
def getuserinfo(request, username):
    if request.method == 'GET':
        user = get_object_or_404(get_user_model(),username=username)
        serializer = CustomRegisterSerializer(user)
        return Response(serializer.data)