from django.conf.urls import url
from django.urls import path, include

from data import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'omok', views.OmokViewSet)

urlpatterns = [
    url(r'^$', views.Session1View.as_view(), name='session1'),
    url(r'^apitest/$',views.CalcTest),
    url(r'^home/',include(router.urls)),
    url(r'^resetdata/$', views.ResetData),
    url(r'^resultdata/$', views.ResultData),
]
