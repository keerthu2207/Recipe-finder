from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Recipe
from .serializers import RecipeSerializer
from django.http import HttpResponse

def home(request):
    return HttpResponse("Recipe API is running")
@api_view(['GET'])
def get_recipes(request):

    recipes = Recipe.objects.all()

    serializer = RecipeSerializer(recipes, many=True)

    return Response(serializer.data)