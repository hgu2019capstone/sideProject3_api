from django.db import models

class Stone(models.Model):
    
    color = models.CharField(max_length=10)
    x1 = models.CharField(max_length = 10)
    y1 = models.IntegerField()
    x2 = models.CharField(max_length = 10, blank=True)
    y2 = models.IntegerField(blank=True, null=True)
  
    def __str__(self):
        return self.color
  

class ClientColor(models.Model):
    
    clientColor = models.CharField(max_length = 10)

    def __str__(self):
        return self.clientColor

class ResultOmok(models.Model):
    color = models.CharField(max_length=10)
    x = models.CharField(max_length = 10)
    y = models.IntegerField()
    
    def __str__(self):
        return self.color 
