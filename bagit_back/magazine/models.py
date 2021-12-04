from tkinter import Image

from django.db import models
from django.conf import settings


class Posts(models.Model):
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='posts',null=True,blank=True
    )
    image = models.ImageField(blank=True)
    title = models.CharField(max_length=300)
    text = models.TextField()
    created_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        # Post by {self.user} -
        return f'id {self.id}'

    def comments_count(self):
        return self.comments.count()


    def __str__(self):
        return self.title




class Comment(models.Model):
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='comment',null=True,blank=True
    )
    text = models.TextField()
    created_date = models.DateTimeField(auto_now=True)
    post_id = models.ForeignKey(Posts,on_delete=models.CASCADE,related_name='comment')

