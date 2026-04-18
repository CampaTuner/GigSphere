from django.http import HttpResponse

# Create your views here.
def Sign_Up(request):
    return HttpResponse("Sign Up Page")

def Sign_In(request):
    return HttpResponse("Sign In Page")