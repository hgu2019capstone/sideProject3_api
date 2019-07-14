from rest_framework import serializers
from .models import Stone

class OmokSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stone
        fields = ('id','color', 'x1', 'y1', 'x2', 'y2')
       

    def create(self, validated_data):
        return Stone.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.color = validated_data.get('color', instance.color)
        instance.x1 = validated_data.get('x1', instance.x1)
        instance.y1 = validated_data.get('y1', instance.y1)
        instance.x2 = validated_data.get('x2', instance.x2)
        instance.y2 = validated_data.get('y2', instance.y2)
        instance.save()
        return instance   
