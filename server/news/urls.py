from django.urls import path, include
from .views import NewsViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'news', NewsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

# GET - news/ - retrive all news
# POST - news/ - create a new news
# GET - news/<id> - retrive a single news
# PUT - news/<id> - update a news
# DELETE - news/<id> - delete a news




