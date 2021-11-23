from django.db import models

# Create your models here.



class Post(models.Model):
    title = models.CharField(max_length=300)
    text = models.TextField()

    def __str__(self):
        return self.title

class Photo(models.Model):
    photo = models.ImageField(null=True,blank=True)
    post_id = models.ForeignKey(Post,on_delete=models.CASCADE,related_name='photo')
    is_cover_photo = models.BooleanField()

    def save(self):
        if self.is_cover_photo:
            other_cover_photo = Photo.objects.filter(post_id=self.post_id).filter(is_cover_photo=True)