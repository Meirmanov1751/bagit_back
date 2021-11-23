from django.views.generic import ListView
from xhtml2pdf import pisa
from django.shortcuts import get_object_or_404
from django.template.loader import get_template
from rest_framework.viewsets import GenericViewSet,ReadOnlyModelViewSet
from .serializers import  PostSerializers,PhotoSerializers

import io
from django.http import FileResponse, HttpResponse
from reportlab.pdfgen import canvas



from .models import Post,Photo

from rest_framework import mixins, viewsets,permissions

class PhotoViewSet(ReadOnlyModelViewSet):
    serializer_class = PhotoSerializers
    queryset = Photo.objects.all()

    def perform_create(self, serializer):
        user=self.request.user
        serializer.save(user=user)

class PostViewSet(ReadOnlyModelViewSet):
    serializer_class = PostSerializers
    queryset = Post.objects.all()

    def perform_create(self, serializer):
        user=self.request.user
        serializer.save(user=user)




class CheckListViews(ListView):
    mosel=Post
    template_name='pdf/main.html'

    def get_queryset(self):
        """Return Schools """
        return Post.objects.all()

def custom_render_pdf_view(request, *argsm, **kwargs):
        pk = kwargs.get('pk')
        invoice = get_object_or_404(Post, pk=pk)

        template_path = 'pdf/invoice.html'
        context = {'invoice': invoice}
        # Create a Django response object, and specify content_type as pdf
        response = HttpResponse(content_type='application/pdf')
        # response['Content-Disposition'] = 'attachment; filename="report.pdf"'
        # find the template and render it.
        response['Content-Disposition:filename="EURO rates"; filename*=UTF-8''foo%c3%a4'] = ' filename="report.pdf"'

        template = get_template(template_path)
        html = template.render(context)

        # create a pdf
        pisa_status = pisa.CreatePDF(io.BytesIO(
            html.encode('utf-8')), dest=response, encoding='utf-8')
        # if error then show some funy view
        if pisa_status.err:
            return HttpResponse('We had some errors <pre>' + html + '</pre>')
        return responsek