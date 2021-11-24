from django.contrib import admin

from .models import Post,Photo,Comment

class PhotoInline(admin.TabularInline):
    model = Photo

@admin.register(Post)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', )
    inlines = [PhotoInline]

admin.site.register(Comment)