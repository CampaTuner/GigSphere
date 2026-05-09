from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('send-otp/', views.Send_Otp, name='send_otp'),
    path('verify-otp/', views.Verify_Otp, name='verify_otp'),
    path('signup/', views.Sign_Up, name='signup'),
    path('signin/', views.Sign_In, name='signin'),
    path('forget-password/', views.Forget_Password, name='forget_password'),
    path('logout/', views.Logout, name='logout'),
]
