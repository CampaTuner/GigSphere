from django.urls import path
from .views import WatchlistAPI

urlpatterns = [
   path('', WatchlistAPI.as_view(), name='watchlist'), 
]
