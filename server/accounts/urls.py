from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.Sign_Up, name='signup'),
    path('signin/', views.Sign_In, name='signin'),
]
