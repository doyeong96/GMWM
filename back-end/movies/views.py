from rest_framework.response import Response
from rest_framework.decorators import api_view

# permission Decorators
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework import status
from django.shortcuts import get_object_or_404, get_list_or_404
from .serializers import MovieSerializer, ActorSerializer, GenreSerializer
from .models import Movie, Genre, Actor

# 영화 리스트
@api_view(['GET'])
def movie_list(request):
    if request.method == 'GET':
        movies = Movie.objects.all()
        # movies = get_list_or_404(Movie.objects.order_by('-pk'))
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)

# 영화 상세
@api_view(['GET'])
def movie_detail(request, movie_pk):
    if request.method == 'GET':
        movie = Movie.objects.get(pk=movie_pk)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)

# 영화 추천 알고리즘
@api_view(['POST'])
def movie_recommend(request):
    print('영화 추천 알고리즘')
    selectedgenres = request.data
    movies = Movie.objects.all()

    # 쉬운 알고리즘 부분 =======================
    recommends = set()
    for movie in movies:
        for genre in movie.genres.all():
            for selectedgenre in selectedgenres:
                if genre.id == selectedgenre:
                    recommends.add(movie)
    recommends = list(recommends)
    #===============================================


    # 최고 추천 영화 부분 =========================
    reco = []
    plus_rate = [30,25,20,15,10]
    for movie in movies:
        cnt = 0
        for genre in movie.genres.all():
            for i, selectedgenre in enumerate(selectedgenres):
                if genre.id == selectedgenre:
                    cnt += plus_rate[i]
        if cnt > 0:
            reco.append([movie,cnt,movie.vote_average])
    reco.sort(key=lambda x: (-x[1], -x[2]))
    # print(reco)
    best_reco = []
    for obj,count,vote in reco:
        best_reco.append(obj)
    best_reco = list(set(best_reco[:5]))
    #===============================================
    serializer = MovieSerializer(recommends, many=True)
    serializer_best =  MovieSerializer(best_reco, many=True)

    return Response([serializer_best.data, serializer.data])


# 영화 검색
@api_view(['POST'])
def movie_search(request):
    movie_title = request.data.get('movie_name')

    movies = Movie.objects.filter(title__contains = movie_title)

    serializer =  MovieSerializer(movies, many=True)
    return Response(serializer.data)



# 배우
@api_view(['GET'])
def actor_list(request):
    if request.method == 'GET':
        actors = Actor.objects.all()
        # movies = get_list_or_404(Actor.objects.order_by('-pk'))
        serializer = ActorSerializer(actors, many=True)
        return Response(serializer.data)

# 영화별 배우
@api_view(['POST'])
def movie_recommend_actor(request):
    movie_id = request.data.get('movieId')
    movies = Movie.objects.all()
    for movie in movies:
        if int(movie_id) == movie.id:
            select_movie = movie
            break
    actor = []
    all_actors = select_movie.actors.all()
    for all_actor in all_actors:
        actor.append(all_actor)
    serializer = ActorSerializer(actor, many=True)
    return Response(serializer.data)

# 장르
@api_view(['GET'])
def genre_list(request):
    if request.method == 'GET':
        genre = Genre.objects.all()
        # genre = get_list_or_404(Genre.objects.order_by('-pk'))
        serializer = GenreSerializer(genre, many=True)
        return Response(serializer.data)
