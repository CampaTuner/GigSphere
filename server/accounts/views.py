from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
import random 
from django.core.mail import send_mail
from django.conf import settings
from .models import OtpVerification
import re
from django.contrib.auth import authenticate, login, logout


# role based authentication

# Create your views here.

def Send_Otp(request):
    email = request.POST['email']
    user_name = request.POST['username']
    password = request.POST['password']
    if not email:
        messages.error(request, "Email is required")
        return redirect('signup')

    is_exists = User.objects.filter(email=email).exists()
    if is_exists:
        messages.error(request, "Email already exists")
        return redirect('signup')
    
    otp = random.randint(100000, 999999)
    OtpVerification.objects.create(
        email = email,
        otp = otp
    )
    
    try:
        send_mail(
            "OTP for account verification", # title of email
            f"Your OTP is {otp}", # message of email
            settings.DEFAULT_FROM_EMAIL, # sender
            [email], # receiver
            fail_silently=False, # show error if failed
        )
    except:
        messages.error(request, "Failed to send otp")
        return redirect('signup')
    else:
        messages.success(request, f"OTP {otp} is sent successfully")
        return render(request, 'submit-otp.html', {
            'email': email,
            'username': user_name,
            'password': password
        })

def Verify_Otp(request):
    email = request.POST['email']
    user_name = request.POST['username']
    password = request.POST['password']
    otp = request.POST['otp']
    if not email or not otp:
        messages.error(request, "Email and OTP are required")
        return redirect('signup')

    
    is_otp_valid =  OtpVerification.objects.filter(email=email, otp=otp).exists()
    if is_otp_valid:
        request.session['email'] = email
        request.session['username'] = user_name
        request.session['password'] = password
        return Sign_Up(request)
    else:
        messages.error(request, "Invalid OTP")
        return render(request, 'submit-otp.html', {
            'email': email,
            'username': user_name,
            'password': password
        })

def Forget_Password(request):
    if request.method == 'POST':
        email = 'sisirsen622@gmail.com'
        new_password = request.POST['new-password']
        confirm_password = request.POST['confirm-password']
        if not new_password or not confirm_password:
            messages.error(request, "All fields are required")
            return redirect('forget-password')
        if new_password != confirm_password:
            messages.error(request, "Passwords do not match")
            return redirect('forget-password')

        user = User.objects.get(email=email)
        if not user:
            messages.error(request, "Email not found")
            return redirect('forget-password')
        
        user.set_password(new_password)
        user.save()
        messages.success(request, "Password changed successfully")
        return redirect('signin')
    return render(request, 'forget-password.html')
        
        

        
        

def Sign_Up(request):
    if request.method == 'POST':
        email = request.session.get('email')
        username = request.session.get('username')
        password = request.session.get('password')
        
        if not username or not email or not password:
            messages.error(request, "All fields are required")
            return redirect('signup')
        
        username_exists = User.objects.filter(username=username).exists() # sql - SELECT 1 FROM auth_user WHERE username = username;
        email_exists = User.objects.filter(email=email).exists() # sql - SELECT 1 FROM auth_user WHERE email = email;

        if username_exists:
            messages.error(request, "Username already exists") 
            return redirect('signup')
        
        if email_exists:
            messages.error(request, "Email already exists")
            return redirect('signup')

        new_user = User.objects.create_user(
                username = username,
                email = email,
                password = password
            )
        new_user.save()
        messages.success(request, "Account created successfully")
        request.session.pop('email')
        request.session.pop('username')
        request.session.pop('password')
        return redirect('signin')
    return render(request, 'signup.html')

def Sign_In(request):
    if request.method == 'POST':
        username_or_email = request.POST['username-or-email'] # rounak | rounak12Gmail.com
        password = request.POST['password']
        if not username_or_email or not password:
            messages.error(request, "All fields are required")
            return redirect('signin')
        

        email_regex = r"^\S+@\S+\.\S+$"
        username = None
        if re.match(email_regex, username_or_email):
            email = username_or_email
            try:
                user = User.objects.get(email=email)
                username = user.username
            except:
                messages.error(request, "Email not found")
                return redirect('signin')
        else:
            username = username_or_email

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "Signed in successfully")
            return redirect('home')
        else:
            messages.error(request, "Invalid credentials")
            return redirect('signin')
    return render(request, 'signin.html')

def Logout(request):
    logout(request)
    messages.success(request, "Signed out successfully")
    return redirect('signin')