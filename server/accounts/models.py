from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

class User(AbstractUser):
    ROLE_CHOICES = [
        ('user', 'User'),
        ('admin', 'Admin'),
    ]
    # enums

    SUBSCRIPTION_CHOICES = [
        ('free', 'Free'),
        ('standard', 'Standard'),
        ('premium', 'Premium'),
    ]
    

    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='user')
    phone = models.CharField(max_length=15) 
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    banner = models.ImageField(upload_to='banners/', blank=True, null=True)
    subscription = models.CharField(max_length=10, choices=SUBSCRIPTION_CHOICES, default='free')
    subscription_ends_at = models.DateTimeField(blank=True, null=True) 
    is_active = models.BooleanField(default=False)

    # OTP details
    otp = models.CharField(max_length=6, blank=True, null=True)
    otp_created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def is_otp_expired(self):
        return self.otp_created_at + timezone.timedelta(minutes=3) < timezone.now()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    

    
