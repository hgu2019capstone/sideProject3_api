from django.db import models


class Stones(models.Model):
	x = models.CharField(max_length = 10)
	y = models.IntegerField()

