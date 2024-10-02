from django.urls import path
from .views import get_books, create_book

urlpatterns = [
    path('books/', get_books, name='get_books'),
    path('books/create', get_books, name='create_book'),
]