from rest_framework import serializers

from .models import Post,Photo

class PhotoSerializers(serializers.ModelSerializer):
    class Meta:
        model=Photo
        fields='__all__'

class PostSerializers(serializers.ModelSerializer):
    photo = PhotoSerializers(many=True,read_only=True)
    pdf = serializers.ModelSerializer()

    class Meta:
        model=Post
        fields=['id','title','text','photo','pdf']





