from rest_framework.routers import DefaultRouter
from django.urls import path, include


from magazine.views import PostViewSet,PhotoViewSet

router = DefaultRouter()

router.register(r'^posts', PostViewSet)
router.register(r'^posts/photo', PhotoViewSet)

from .views import custom_render_pdf_view,CheckListViews

urlpatterns = [
    path('pdf/',CheckListViews.as_view(),name='1'),
    path('post/<pk>/',custom_render_pdf_view,name='invoice')
]