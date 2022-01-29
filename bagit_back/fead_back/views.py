from django.views.generic import ListView
from xhtml2pdf import pisa
from django.shortcuts import get_object_or_404
from django.template.loader import get_template
from rest_framework.viewsets import GenericViewSet,ReadOnlyModelViewSet
import io
from django.http import FileResponse, HttpResponse
from reportlab.pdfgen import canvas


from .serializers import  FeadSerializers
from .models import Fead

from rest_framework import mixins, viewsets,permissions


class FeadViewSet(mixins.UpdateModelMixin,mixins.RetrieveModelMixin,mixins.ListModelMixin,mixins.CreateModelMixin,mixins.DestroyModelMixin,GenericViewSet):
    serializer_class = FeadSerializers
    queryset = Fead.objects.all()

    def perform_create(self, serializer):
        serializer.save()

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
