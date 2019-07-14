from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from omok import views
from rest_framework import routers


urlpatterns = [
    url(r'^home', views.Home, name='home'),
    url(r'^omok',views.Omok , name='omok'),
    url(r'^stone/$', views.OmokList.as_view() ),
    url(r'^stone/(?P<pk>[0-9]+)/$', views.OmokList.as_view()),
    url(r'^resultdata/$', views.ResultData),
]

#urlpatterns = format_suffix_patterns(urlpatterns)
