from django.db import models

# Create your models here.
class Userdetail (models.Model):
    name = models.CharField(max_length=50)
    number=models.IntegerField()
    email=models.EmailField()