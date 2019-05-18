from django.conf.urls import url
from django.urls import path, include

from data import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'omok', views.OmokViewSet)

urlpatterns = [
    url(r'^$', views.HomePageView.as_view()),
    url(r'^apitest/$',views.CalcTest),
    url(r'^home/',include(router.urls)),
]
