from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.shortcuts import render
from django.views.generic import TemplateView
from django.utils.safestring import mark_safe
import json
from django.urls import reverse

from django.conf import settings
from django.core.files.storage import FileSystemStorage

# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json
from rest_framework import serializers
from rest_framework import viewsets

from data.models import Game
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

    def post(self, request, **kwargs):
        return redirect(reverse('session2'))


def index(request):
    return render(request, 'links.html', {})

def room(request, room_name):
    if Game.objects.filter(room_name=room_name).exists():
        return HttpResponseRedirect(reverse(game, kwargs={'room_name': room_name}))

    Game.objects.create(room_name= room_name)
    return HttpResponseRedirect(reverse(game, kwargs={'room_name': room_name}))

def game(request, room_name):
    if request.method == 'POST' and request.FILES.get('myfile',''):
        myfile = request.FILES['myfile']
        fs = FileSystemStorage()
        filename = fs.save(myfile.name, myfile)
        uploaded_file_url = fs.url(filename)
        return render(request, 'index.html', {
            'room_name_json': mark_safe(json.dumps(room_name)),
            'uploaded_file_url': uploaded_file_url
        })
    
    elif request.method == 'POST' and request.FILES.get('myfile2',''):
        myfile2 = request.FILES['myfile2']
        fs = FileSystemStorage()
        filename = fs.save(myfile2.name, myfile2)
        uploaded_file_url = fs.url(filename)
        return render(request, 'index.html', {
            'room_name_json': mark_safe(json.dumps(room_name)),
            'uploaded_file_url': uploaded_file_url
        })
        
    return render(request, 'index.html', {
        'room_name_json': mark_safe(json.dumps(room_name))
    })

def check(request, room_name):
    if Game.objects.filter(room_name=room_name).exists():
        return HttpResponseRedirect(reverse(game, kwargs={'room_name': room_name}))    
    return HttpResponseRedirect(reverse(index))



class Session2View(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'links.html', context=None)
    
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
    requests.post('http://turnincode.cafe24.com:8880/home/omok/', data=data)

    return HttpResponse()


def ResultData(request):
 
    black = Stones.objects.filter(client="black")
    white = Stones.objects.filter(client="white")

    bCount = black.count()
    wCount = white.count()

    row = list(ascii_uppercase)

    for j in range(1,20):
        for i in row:
            if black.filter(x=i, y=j).count == 1:
                cnt = 1
                for jj in range(1, 6):
                    if black.filter(x=j+jj, y=i).count == 1:
                        cnt +=1
                if cnt == 6:
                        result = str('Black WIN !!!! ')
                        return JsonResponse(result, safe = False)
                else:
                    cnt =0
            elif white.filter(x=i, y=j).count == 1:
                cnt = 1
                for jj in range(1,6):
                    if white.filter(x=j+jj, y=i).count == 1:
                        cnt +=1;
                if cnt == 6:
                        result = str('White WIN !!!! ')
                        return JsonResponse(result, safe = False)
                else:
                    cnt =0
 

    for i in row:
        for j in range(1,20):
            if black.filter(x=i, y=j).count() == 1:
                cnt=1
                for jj in range(1, 6):
                    if black.filter(x=i, y=j+jj).count() == 1:
                        cnt+=1
                if cnt == 6:
                    result = str('Black WIN !!! ')
                    return JsonResponse(result , safe = False)
                else:
                    cnt =0
            elif white.filter(x=i, y=j).count() == 1:
                cnt=1
                for jj in range(1, 6):
                    if white.filter(x=i, y=j+jj).count() == 1:
                        cnt+=1
                if cnt == 6:
                    result = str('White WIN !!! ')
                    return JsonResponse(result , safe = False)
                else:
                    cnt=0
    return HttpResponse()


class OmokViewSet(viewsets.ModelViewSet):
        queryset = Stones.objects.all()
        serializer_class = OmokSerializer



