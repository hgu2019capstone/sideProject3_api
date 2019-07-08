from django.conf.urls import url
from django.urls import path, include

from data import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'omok', views.OmokViewSet)

urlpatterns = [
    path('accounts/', include('django.contrib.auth.urls')),
    url(r'^$', views.index, name='index'),
    url(r'^room/(?P<room_name>[^/]+)/$', views.room, name='room'),
    url(r'^game/(?P<room_name>[^/]+)/$', views.game, name='game'),
    url(r'^check/(?P<room_name>[^/]+)/$', views.check, name='check'),
    url(r'^session1/$', views.Session1View.as_view(), name='session1'),
    url(r'^apitest/$',views.CalcTest),
    url(r'^home/',include(router.urls)),
    url(r'^resetdata/$', views.ResetData),
    url(r'^resultdata/$', views.ResultData),
]
