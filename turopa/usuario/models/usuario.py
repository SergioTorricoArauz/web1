from django.contrib.auth.models import AbstractUser
from django.db import models


class Usuario(AbstractUser):

    """
    hereda los campos de las clases del abstracuser del superusioario de django
    """
    date_of_birth = models.DateField(null=True)
    img = models.ImageField(upload_to="usuarios", null=True)