from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from .models import Stone, ClientColor, ResultOmok
from .serializers import OmokSerializer

from django.http import Http404, HttpResponseRedirect, JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets

from django.urls import reverse
from rest_framework.decorators import api_view
import random, requests, time
from django.views.decorators.csrf import csrf_exempt
import json, io

from string import ascii_uppercase 

from .forms import HomeForm

class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)
 
class OmokList(APIView):
    def get(self, request, format=None):
        stone = Stone.objects.all()
        serializer = OmokSerializer(stone, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        
        serializer = OmokSerializer(data=request.data)
        if serializer.is_valid():
 
            serializer.save()
            Response(serializer.data, status=status.HTTP_201_CREATED)

            resultColor = str(Stone.objects.last().color)
            resultX1 = str(Stone.objects.last().x1)
            resultY1 = Stone.objects.last().y1
            resultX2 = str(Stone.objects.last().x2)
            resultY2 = Stone.objects.last().y2

            resultOmok = ResultOmok(color = resultColor, x = resultX1 , y = resultY1)
            resultOmok.save()

            resultOmok = ResultOmok(color = resultColor, x = resultX2 , y = resultY2)
            resultOmok.save()

            clientColor = str(ClientColor.objects.last().clientColor)
           
            if(str(Stone.objects.last().color) == clientColor):
              if(clientColor == "white"):
                  mColor = "black"
              else:
                  mColor = "white" 
              
              time.sleep(1)
              x1 = random.choice('ABCDEFGHIJKLMNOPQRS')
              x2 = random.choice('ABCDEFGHIJKLMNOPQRS')
            
              y1 = random.randrange(1,20)
              y2 = random.randrange(1,20)

              data = {'color': mColor , 'x1': x1, 'y1': y1, 'x2': x2, 'y2' : y2}
              res = requests.post('http://turnincode.cafe24.com:8002/stone/',data=data)
             
              return Response()
            return Response()              

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OmokDetail(APIView):
    def get_object(self, pk):
        try : 
            return Stone.objects.get(pk=pk)
        except Stone.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        stone = self.get_object(pk)
        serializer = OmokSerializer(stone)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        stone = self.get_object(pk)
        serializer = OmokSerializer(stone, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        stone = self.get_object(pk)
        stone.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
def Home(request):
    if request.method == 'POST':
        team_name = request.POST['team_name'] 
        form = HomeForm(request.POST)
        request.session['team_name']=team_name
        return HttpResponseRedirect('/omok/')
    else:
        form = HomeForm()
    return render(request, 'home.html', {'form':form})

@csrf_exempt
def Omok(request):
    colorNum = random.randrange(1,3)
   

    if colorNum == 1:
        color = "white"
    else :
        color = "black"
    
    clientColor = ClientColor(clientColor = color) 
    clientColor.save()
             
    if color == "white":
        x = random.choice('ABCDEFGHIJKLMNOPQRS')
        y = random.randrange(1,20)
          
        data = {'color': "black" , 'x1': x, 'y1': y, 'x2': '', 'y2': 0}
        res = requests.post('http://turnincode.cafe24.com:8002/stone/',data=data)
    return render(request, 'index.html', {'color' : color})

def ResultData(request):

    black = ResultOmok.objects.filter(color="black")
    white = ResultOmok.objects.filter(color="white")

    bCount = black.count()
    wCount = white.count()

 
    row = list(ascii_uppercase)

    for i in row:
        for j in range(1,20):
            if black.filter(x=i, y=j).count() == 1:
                cnt=1
                for jj in range(1, 6):
                    if ResultOmok.objects.filter(color="black",x=i, y=j+jj).count() == 1:
                        cnt+=1
                if cnt == 6:
                    result = str('Black WIN !!! ')
                    return JsonResponse(result , safe = False)
                else:
                    cnt =0
            elif ResultOmok.objects.filter(color="white",x=i, y=j).count() == 1:
                cnt=1
                for jj in range(1, 6):
                    if ResultOmok.objects.filter(color="white",x=i, y=j+jj).count() == 1:
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
                    if ResultOmok.objects.filter(color="black", x=chr(ord(j)+jj) , y = i+jj).count()==1:
                        cnt+=1
                if cnt == 6:
                    result = str('Black WIN !!! ')
                    return JsonResponse(result, safe=False)
                else:
                    cnt = 0    
            if white.filter(x=j, y=i).count() == 1:
                cnt = 1
                for jj in range(1,6):
                    if ResultOmok.objects.filter(color="white", x=chr(ord(j)+jj) , y = i+jj).count()==1:
                        cnt+=1
                if cnt == 6:
                    result = str('White WIN !!! ')
                    return JsonResponse(result, safe=False)
                else:
                    cnt = 0    

    return HttpResponse()        
