from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json
from rest_framework import serializers
from rest_framework import viewsets

from data.models import Stones
from .serializers import OmokSerializer
from django.shortcuts import redirect, render

import subprocess
import os
import requests 

from string import ascii_uppercase

class Session1View(TemplateView):
    def get(self, request, **kwargs):
         if request.method == 'GET':
            return render(request, 'index.html', context=None)

#    def post(self, request, **kwargs):
#        return redirect(reverse('session2'))

class Session2View(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index1.html', context=None)
    
    def post(self, request, **kwargs):
        return redirect(reverse('session1'))


@api_view(["POST"])
def CalcTest(x1):
    try:
        x=json.loads(x1.body.decode('utf-8'))
        y=str(x*100)
        return JsonResponse("result:"+y,safe=False)
    except ValueError as e:
        return Response(e.args[0],status.HTTP_400_BAD_REQUEST)

def ResetData(request):
    os.chdir(os.path.abspath(''))
    command = 'rm db.sqlite3'
    command = command.split()
 
    p = subprocess.Popen(command, stdin=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True)
    p.communicate()

    command = 'python manage.py migrate'
    command = command.split()

    p = subprocess.Popen(command, stdin=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True)
    p.communicate()

    data = {'client': 'black', 'x': 'J', 'y':10 }
    requests.post('http://turnincode.cafe24.com:8000/home/omok/', data=data)

    return HttpResponse()

def ResultData(request):

    black = Stones.objects.filter(client="black")
    white = Stones.objects.filter(client="white")

    bCount = black.count()
    wCount = white.count()

    row = list(ascii_uppercase)

    for i in row:
        for j in range(1,20):
            if black.filter(x=i, y=j).count() == 1:
                cnt=1
                for jj in range(1, 6):
                    if Stones.objects.filter(client="black",x=i, y=j+jj).count() == 1:
                        cnt+=1
                if cnt == 6:
                    result = str('Black WIN !!! ')
                    return JsonResponse(result , safe = False)
                else:
                    cnt =0
            elif Stones.objects.filter(client="white",x=i, y=j).count() == 1:
                cnt=1
                for jj in range(1, 6):
                    if Stones.objects.filter(client="white",x=i, y=j+jj).count() == 1:
                        cnt+=1
                if cnt == 6:
                    result = str('White WIN !!! ')
                    return JsonResponse(result , safe = False)
                else:
                   cnt=0

    for j in range(1,20):
        for i in row:
            if black.filter(x=i, y=j).count() == 1:
                cnt = 1
                for jj in range(1, 6):
                    if black.filter(x=chr(ord(i)+jj), y=j).count() == 1:
                        cnt +=1
                if cnt == 6:
                    result = str('Black WIN !!!! ')
                    return JsonResponse(result, safe = False)
                else:
                    cnt =0
            elif white.filter(x=i, y=j).count() == 1:
                cnt = 1
                for jj in range(1,6):
                    if white.filter(x=chr(ord(i)+jj), y=j).count() == 1:
                        cnt +=1
                if cnt == 6:
                    result = str('White WIN !!!! ')
                    return JsonResponse(result, safe = False)
                else:
                    cnt =0


    for i in range(1,20):
        for j in row:
            if black.filter(x=j, y=i).count() == 1:
                cnt = 1
                for jj in range(1,6):
                    if Stones.objects.filter(client="black", x=chr(ord(j)+jj) , y = i+jj).count()==1:
                        cnt+=1
                if cnt == 6:
                    result = str('Black WIN !!! ')
                    return JsonResponse(result, safe=False)
                else:
                    cnt = 0    
            if white.filter(x=j, y=i).count() == 1:
                cnt = 1
                for jj in range(1,6):
                    if Stones.objects.filter(client="white", x=chr(ord(j)+jj) , y = i+jj).count()==1:
                        cnt+=1
                if cnt == 6:
                    result = str('White WIN !!! ')
                    return JsonResponse(result, safe=False)
                else:
                    cnt = 0    

    return HttpResponse()


class OmokViewSet(viewsets.ModelViewSet):
        queryset = Stones.objects.all()
        serializer_class = OmokSerializer



