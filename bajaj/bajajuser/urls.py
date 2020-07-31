from django.urls import path
from . import views
from django.contrib import admin

urlpatterns = [
    path('',views.bajajuser,name='bajajuser'),
    path('h',views.hindi,name='hindi'),
    path('t',views.telugu,name='telugu'),
    path('save2db',views.save2db,name='save2db'),
    path('vubajaj@340',views.viewusers,name='viewusers')
]