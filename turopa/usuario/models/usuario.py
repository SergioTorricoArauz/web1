from django.contrib.auth.models import AbstractUser
from django.db import models


class Usuario(AbstractUser):

    date_of_birth = models.DateField(null=True)
    img = models.ImageField(upload_to="usuarios", null=True)