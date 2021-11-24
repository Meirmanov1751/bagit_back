from rest_framework import serializers

from .models import Post,Photo,Comment

class PhotoSerializers(serializers.ModelSerializer):
    class Meta:
        model=Photo
        fields='__all__'


class CommentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


class PostSerializers(serializers.ModelSerializer):
    photo = PhotoSerializers(many=True,read_only=True)
    comment = CommentSerializers(many=True,read_only=True)

    class Meta:
        model=Post
        fields=['id','title','text','photo','comment']




