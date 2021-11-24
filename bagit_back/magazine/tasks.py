# Create your tasks here

from .models import Post

from celery import shared_task


@shared_task
def add(x, y):
    return x + y


@shared_task
def mul(x, y):
    return x * y


@shared_task
def xsum(numbers):
    return sum(numbers)


@shared_task
def count_widgets():
    return Post.objects.count()


@shared_task
def rename_widget(post_id, title):
    w = Post.objects.get(id=post_id)
    w.title = title
    w.save()