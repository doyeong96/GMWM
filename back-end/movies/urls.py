from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [
    path('', views.movie_list,),
    path('<int:movie_pk>/', views.movie_detail),
    path('actors/', views.actor_list,),
    path('genres/', views.genre_list,),
    # 영화 추천, 잘못될수도 있음
    path('recommend/', views.movie_recommend),
]