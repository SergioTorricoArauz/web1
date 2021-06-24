# Generated by Django 3.2.4 on 2021-06-24 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('descripcion', models.CharField(max_length=250)),
                ('img', models.ImageField(null=True, upload_to='productos')),
                ('habilitado', models.BooleanField(default=True)),
                ('genero', models.CharField(max_length=5)),
                ('precio', models.IntegerField(default=0.0)),
            ],
        ),
    ]