from django.db import models

class Game(models.Model):
	room_name = models.CharField(max_length=200)

class Stones(models.Model):
	room_id = models.ForeignKey(Game, on_delete=models.CASCADE)
	client = models.CharField(max_length = 10)
	x = models.CharField(max_length = 10)
	y = models.IntegerField()

