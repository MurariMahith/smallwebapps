from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import *
# Create your views here.

def bajajuser(request):
    return render(request,'index.html')

def hindi(request):
    return render(request,'hindi_index.html')

def telugu(request):
    return render(request,'telugu_index.html')

def save2db(request):
    if request.method=='POST':
        name = request.POST['name']
        phnum  = request.POST['phnum']
        email = request.POST['email']

        user=Userdetail()
        user.name=name
        user.number=phnum
        user.email=email
        user.save()

        return HttpResponse('')

def viewusers(request):
    users=Userdetail.objects.all()
    return render(request,'viewusers.html',{'users':users})