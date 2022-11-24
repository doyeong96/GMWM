<template>
  <div class="forumContainer">
    <!-- <div class="card">  
      <div class="card-body" style="float: left;">
        <h4 class="card-title">제목 : {{ forum.title }}</h4>
        <span class="card-text">내용 : {{ forum.content }}</span>
      </div>
    </div> -->

    <div class="forum">
      <div id="forum-title" >
        <h2 > 제목 : {{ forum.title }} </h2>
        <div id="forum-content">
          <p> 내용 : {{ forum.content }} </p>
        </div>
      </div>
    </div>

    <div class='forumFlex'>
      {{ this.likeUsers }} 명이 이 글을 좋아합니다.
      <div>

        <span v-if="forum.like_users.includes(user.pk)">
          <h2 type="button" @click="likesForum"><img alt="likes" src="@/assets/like.png" style="width:30px; height:30px;"></h2>

          <!-- <button @click="likesForum" class=" badge bg-primary">좋아요 취소</button>
          <img alt="likes" src="@/assets/heart (2).png" style="width:30px; height:30px;"> -->
        </span>

        <span v-else>
          <h2 type="button" @click="likesForum"><img alt="likes" src="@/assets/unlike.png" style="width:30px; height:30px;"></h2>

          <!-- <button @click="likesForum" class=" badge bg-primary">좋아요</button> -->
        </span>
        
        <span v-if="forum.user === user.pk">
        <button class="deleteBtn mx-2">
          <span data-bs-toggle="modal" data-bs-target="#reveiwDeleteModal">
            삭제  
          </span>
        </button>
      
        <router-link class="createBtn" :to="{ name : 'ForumUpdateView' }">수정</router-link>
      </span>
        </div>
    </div>
    <br>

    <hr>
    <p class="d-flex">댓글 목록</p>
    <ForumComment
    :forum-comments="forum.forumcomment_set"
    :forum-id="forum.id"
    />

    <div class="modal fade" id="reveiwDeleteModal" tabindex="-1" aria-labelledby="reveiwDeleteModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            <div class="modal-body">
              <p>게시물을 삭제하시겠습니까?</p>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
              <button class=" btn btn-danger" @click="deleteForum" data-bs-dismiss="modal">삭제</button>
              <!-- <router-link :to="{ name : 'ForumUpdateView' }">UPDATE</router-link> -->
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import ForumComment from '@/components/Forum/ForumComment'
import router from '@/router'

export default {
  name : 'ForumDetailView',
  components : {
    ForumComment,
  },
  created() {
    this.$store.dispatch('getForumDetail', this.$route.params.id)
  },
  computed : {
    forum() {
      return this.$store.getters.forum
    },
    user() {
      return this.$store.getters.user
    },
    likeUsers() {
      return (this.forum?.like_users.length)
    },
  },
  methods : {
    deleteForum() {
      this.$store.dispatch('deleteForum', this.forum.id)
    },
    likesForum() {
      this.$store.dispatch('likesForum', this.forum.id)
    }
  }
}
</script>

<style scoped>
.forumContainer{
  height: 500px;
  width: 1000px;
  margin-left: auto;
  margin-right: auto ;
  margin-top: 100px ;
}
.forumFlex{
  /* display: flex; */
  flex-direction: column;
  align-items: flex-end;
}
#forum-content{
  float: left;
  width: 800px;
}
#forum-title{
  width: 800px;
  float: left;
  border: solid black 1px;
  border-radius: 10px ;
}
h2{
  float: left;
}
#forum-content > p{
  float: left;
}

/* .forum{
  border: solid black 1px;
  border-radius: 10px ;
} */
</style>