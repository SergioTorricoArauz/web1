from django.conf.urls import url
from django.urls import include
from rest_framework import routers

from producto.api import ProductoViewSet

router = routers.DefaultRouter()
router.register(r'producto', ProductoViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]