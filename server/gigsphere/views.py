from django.shortcuts import render
from django.contrib.auth.decorators import login_required


# @login_required(login_url='signin')
def Home(request):
    return render(request, 'home.html')

def About(request):
    return HttpResponse("This is the about page.")

def Contact(request):
    return HttpResponse("This is the contact page.")