from django.db import models

# Create your models here.
class Fead(models.Model):
    email = models.CharField(max_length=200)
    text = models.TextField()

    def __str__(self):
        return self.email