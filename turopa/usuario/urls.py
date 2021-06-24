from django.conf.urls import url
from django.urls import include
from rest_framework import routers

from usuario.api import UsuarioViewSet

"""
llamo  los viwsets
"""

router = routers.DefaultRouter()
router.register(r'usuario', UsuarioViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]