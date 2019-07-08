from rest_framework import serializers
from .models import Stones

class OmokSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stones
        fields = ('room_id', 'client','x', 'y')
