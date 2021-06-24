from django.db import models

from usuario.models import Usuario


class Producto(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=250)
    img = models.ImageField(upload_to="productos", null=True)
    habilitado = models.BooleanField(default=True)
    genero = models.CharField(max_length=5)
    precio = models.IntegerField(default=0.00)
    usuario = models.ForeignKey(
        Usuario,
        related_name="productos",
        on_delete=models.CASCADE
    )