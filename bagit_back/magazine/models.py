from tkinter import Image

from django.db import models



class Posts(models.Model):
    #author = models.ForeignKey(userProfile,on_delete=models.CASCADE,related_name='post')
    image = models.ImageField(blank=True)
    title = models.CharField(max_length=300)
    text = models.TextField()
    created_date = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.title




class Comment(models.Model):
   # author = models.ForeignKey(userProfile,on_delete=models.CASCADE,related_name='comment')
    text = models.TextField()
    created_date = models.DateTimeField(auto_now=True)
    post_id = models.ForeignKey(Posts,on_delete=models.CASCADE,related_name='comment')

