import jwt
from django.conf import settings
from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from usuario.api import UsuarioSerializer
from usuario.models import Usuario


class RegisterView(GenericAPIView):
    serializer_class = UsuarioSerializer

    def post(self, request):
        data = request.data
        auth_token = jwt.encode({'email_address': data['email_address'], 'password': data['password']},
                                settings.SECRET_KEY)
        data['token'] = auth_token
        serializer = UsuarioSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


class LoginView(GenericAPIView):
    def post(self, request):
        data = request.data
        email_address = data.get('email_address', '')
        password = data.get('password', '')
        try:
            user = Usuario.objects.get(email_address=email_address, password=password)
            if user is not None:
                auth_token = jwt.encode({'email_address': user.email_address, 'password': user.password},
                                        settings.SECRET_KEY)

                serializer = UsuarioSerializer(user)

                data = {
                    "user": serializer.data, "token": auth_token
                }
                return Response(data, status=status.HTTP_200_OK)
        except:
            return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
