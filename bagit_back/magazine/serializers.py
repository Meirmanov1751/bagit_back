from rest_framework import serializers



from .models import Posts,Comment


class CommentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


class PostSerializers(serializers.ModelSerializer):

    comment = CommentSerializers(many=True,read_only=True)

    class Meta:
        model=Posts
        fields=['id','title','text','image','comment','created_date']




