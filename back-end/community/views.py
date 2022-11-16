from rest_framework.response import Response
from rest_framework.decorators import api_view

# permission Decorators
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework import status
from django.shortcuts import get_object_or_404, get_list_or_404
from .serializers import (
    ReviewListSerializer, ReviewSerializer, ReviewCommentSerializer, 
    ForumListSerializer, ForumSerializer, ForumCommentSerializer,
    TogetherListSerializer, TogetherSerializer, TogetherCommentSerializer, 
)
from .models import  (
    Review, ReviewComment,
    Forum, ForumComment,
    Together, TogetherComment,
)
#######################################
# 리뷰

# 리뷰 전체 페이지 (겟 포스트)
@api_view(['GET', 'POST'])
def review_list(request):
    if request.method == 'GET':
        reviews = Review.objects.order_by('-pk')
        serializer = ReviewListSerializer(reviews, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'DELETE', 'PUT'])
# 리뷰 상세 페이지 (겟 딜리트 풋)
def review_detail(request, review_pk):
    review = Review.objects.get(pk=review_pk)
    if request.method == 'GET':
        serializer = ReviewSerializer(review, many=True)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = ReviewSerializer(review, many=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

##### 22-11-16 수업시간 완료


# 리뷰 댓글 전체 (겟)
@api_view(['GET'])
def review_comment_list(request):
    if request.method == 'GET':
        comments = ReviewComment.objects.all()
        serializer = ReviewCommentSerializer(comments, many=True)
        return Response(serializer.data)

# 리뷰 댓글 상세 (겟 딜리트 풋)
@api_view(['GET', 'DELETE', 'PUT'])
def review_comment_detail(request, comment_pk):
    comment = ReviewComment.objects.get(pk=comment_pk)
    if request.method == 'GET':
        serializer = ReviewCommentSerializer(comment)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = ReviewCommentSerializer(comment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)


# 리뷰 댓글 생성 (포스트)
@api_view(['POST'])
def review_comment_create(request, review_pk):
    review = Review.objects.get(pk=review_pk)
    serializer = ReviewCommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(review=review)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


#########################################
# 자유게시판

# 자유게시판 전체 페이지 (겟 포스트)
@api_view(['GET', 'POST'])
def forum_list(request):
    if request.method == 'GET':
        reviews = Forum.objects.order_by('-pk')
        serializer = ForumListSerializer(reviews, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ForumSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


# 자유게시판 상세 페이지 (겟 딜리트 풋)
@api_view(['GET', 'DELETE', 'PUT'])
def forum_detail(request, forum_pk):
    forum = Forum.objects.get(pk=forum_pk)
    if request.method == 'GET':
        serializer = ForumSerializer(forum, many=True)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        forum.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = ForumSerializer(forum, many=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# 자유게시판 댓글 전체 (겟)
@api_view(['GET'])
def forum_comment_list(request):
    if request.method == 'GET':
        comments = ForumComment.objects.all()
        serializer = ForumCommentSerializer(comments, many=True)
        return Response(serializer.data)

# 자유게시판 댓글 상세 (겟 딜리트 풋)
@api_view(['GET', 'DELETE', 'PUT'])
def forum_comment_detail(request, comment_pk):
    comment = ForumComment.objects.get(pk=comment_pk)
    if request.method == 'GET':
        serializer = ForumCommentSerializer(comment)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = ForumCommentSerializer(comment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)


# 자유게시판 댓글 생성 (포스트)
@api_view(['POST'])
def forum_comment_create(request, forum_pk):
    forum = Forum.objects.get(pk=forum_pk)
    serializer = ForumCommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(forum=forum)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

#########################################
# 모여요

# 모여요 전체 페이지 (겟 포스트)
@api_view(['GET', 'POST'])
def together_list(request):
    if request.method == 'GET':
        together = Together.objects.order_by('-pk')
        serializer = TogetherListSerializer(together, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TogetherSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

# 모여요 상세 페이지 (겟 딜리트 풋)
@api_view(['GET', 'DELETE', 'PUT'])
def together_detail(request, together_pk):
    together = Together.objects.get(pk=together_pk)
    if request.method == 'GET':
        serializer = TogetherSerializer(together, many=True)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        together.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = TogetherSerializer(together, many=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# 모여요 댓글 전체 (겟)
@api_view(['GET'])
def together_comment_list(request):
    if request.method == 'GET':
        comments = TogetherComment.objects.all()
        serializer = TogetherCommentSerializer(comments, many=True)
        return Response(serializer.data)


# 모여요 댓글 상세 (겟 딜리트 풋)
@api_view(['GET', 'DELETE', 'PUT'])
def together_comment_detail(request, comment_pk):
    comment = TogetherComment.objects.get(pk=comment_pk)
    if request.method == 'GET':
        serializer = TogetherCommentSerializer(comment)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = TogetherCommentSerializer(comment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    
# 모여요 댓글 생성 (포스트)
@api_view(['POST'])
def together_comment_create(request, together_pk):
    together = Together.objects.get(pk=together_pk)
    serializer = TogetherCommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(together=together)
        return Response(serializer.data, status=status.HTTP_201_CREATED)