# serializers.py

import random

from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone

User = get_user_model()


# =========================
# Register Serializer
# =========================
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        min_length=6,
        max_length=128
    )

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'password',
            'role',
            'phone',
            'avatar',
            'banner',
            'subscription',
        ]

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError(
                "User with this email already exists."
            )
        return value

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError(
                "User with this username already exists."
            )
        return value

    def create(self, validated_data):
        password = validated_data.pop('password')

        # Create inactive user
        user = User(**validated_data)
        user.is_active = False
        user.set_password(password)

        # Generate OTP
        otp = str(random.randint(100000, 999999))
        user.otp = otp
        user.otp_created_at = timezone.now()

        user.save()

        # Send OTP email
        send_mail(
            subject="OTP for Account Verification",
            message=f"Your OTP is {otp}",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[user.email],
            fail_silently=False,
        )

        return user


# =========================
# Verify OTP Serializer
# =========================
class VerifyOTPSerializer(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.CharField(max_length=6)

    def validate(self, attrs):
        email = attrs.get('email')
        otp = attrs.get('otp')

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("User not found.")

        if user.otp != otp:
            raise serializers.ValidationError("Invalid OTP.")

        if user.is_otp_expired():
            raise serializers.ValidationError("OTP has expired.")

        attrs['user'] = user
        return attrs

    def save(self):
        user = self.validated_data['user']

        user.is_active = True
        user.otp = None
        user.otp_created_at = None
        user.save()

        return user


# =========================
# Login Serializer
# =========================
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=100)
    password = serializers.CharField(
        max_length=100,
        write_only=True
    )

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        # Check if user exists
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("User not found.")

        # Check if account is verified
        if not user.is_active:
            raise serializers.ValidationError(
                "Account is not verified. Please verify OTP first."
            )

        # Check password
        if not user.check_password(password):
            raise serializers.ValidationError("Invalid password.")

        # Generate JWT tokens
        refresh_token = RefreshToken.for_user(user)
        access_token = refresh_token.access_token

        # Return user data + tokens
        return {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'role': user.role,
            'phone': user.phone,
            'avatar': user.avatar.url if user.avatar else None,
            'banner': user.banner.url if user.banner else None,
            'subscription': user.subscription,
            'subscription_ends_at': user.subscription_ends_at,
            'created_at': user.created_at,
            'updated_at': user.updated_at,

            # JWT Tokens
            'refresh': str(refresh_token),
            'access': str(access_token),
        }


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'role',
            'phone',
            'avatar',
            'banner',
            'subscription',
            'subscription_ends_at',
            'created_at',
            'updated_at',
        ]

        