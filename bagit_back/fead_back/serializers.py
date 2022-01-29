from rest_framework import serializers



from .models import Fead


class FeadSerializers(serializers.ModelSerializer):
    class Meta:
        model = Fead
        fields = '__all__'






