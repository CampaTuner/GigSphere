from django.http import HttpResponse

def Home(request):
    return HttpResponse("Hello, World!")

def About(request):
    return HttpResponse("This is the about page.")

def Contact(request):
    return HttpResponse("This is the contact page.")