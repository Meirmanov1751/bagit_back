from rest_framework.routers import DefaultRouter
from django.urls import path, include


from .views import FeadViewSet

router = DefaultRouter()

router.register(r'^fead', FeadViewSet)



urlpatterns = [

]
