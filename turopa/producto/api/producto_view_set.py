from rest_framework import viewsets, serializers
from rest_framework.decorators import action
from rest_framework.response import Response

from producto.models import Producto


class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'


class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

    @action(methods=['get'], detail=False, url_path='hombres', name="get productos para hombres")
    def get_productos_hombres(self, request, pk=None):
        list_productos = Producto.objects.filter(genero="H").filter(habilitado=True).order_by('id').reverse()[:8]
        serializer = ProductoSerializer(list_productos, many=True)
        return Response(serializer.data)

    @action(methods=['get'], detail=False, url_path='mujeres', name="get productos para mujeres")
    def get_productos_mujeres(self, request, pk=None):
        list_productos = Producto.objects.filter(genero="M").filter(habilitado=True).order_by('id').reverse()[:8]
        serializer = ProductoSerializer(list_productos, many=True)
        return Response(serializer.data)

    @action(methods=['get'], detail=False, url_path='search', name="buscador de productos")
    def get_productos_search(self, request, pk=None):
        list_productos_generos = Producto.objects.filter(genero__contains=request.GET['s'])
        list_productos_nombre = Producto.objects.filter(nombre__contains=request.GET['s'])
        list_productos_descripcion = Producto.objects.filter(descripcion__contains=request.GET['s'])
        list_productos = list_productos_generos | list_productos_nombre | list_productos_descripcion
        serializer = ProductoSerializer(list_productos, many=True)
        return Response(serializer.data)

    @action(methods=['get'], detail=False, url_path='propios', name="get productos de un usuario")
    def get_productos_usuario(self, request, pk=None):
        list_productos = Producto.objects.filter(usuario=request.GET['id']).order_by('id').reverse()
        serializer = ProductoSerializer(list_productos, many=True)
        return Response(serializer.data)
