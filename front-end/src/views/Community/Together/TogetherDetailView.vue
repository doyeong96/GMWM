<template>
  <div class="togetherContainer">
    <div class="card">
      <h2 class="card-header">
        {{together.title}}
      </h2>
      <div class="card-body">
        <p class="card-title">내용 : {{together.content}}</p>
        <p class="card-text">{{endtims}} 모여요</p>
      </div>
    </div>

    <!-- 좋아요 -->
    <div class='forumFlex'>
      {{ this.likeUsers }} 명이 이 글을 좋아합니다.
    <div>

      <span  v-if="together.like_users.includes(user.pk)">
        <!-- <button @click="likesTogether" class=" badge bg-primary">좋아요 취소</button> -->
        <h2 type="button" @click="likesTogether"><img alt="likes" src="@/assets/heart (2).png" style="width:30px; height:30px;"></h2>

      </span>

      <span v-else>
        <!-- <button @click="likesTogether" class=" badge bg-primary">좋아요</button> -->
        <h2 type="button" @click="likesTogether"><img alt="likes" src="@/assets/heart (1).png" style="width:30px; height:30px;"></h2>
      </span>
      <span v-if="together.user === user.pk">
      <button class="deleteBtn mx-2">
        <span data-bs-toggle="modal" data-bs-target="#togetherDeleteModal">
          삭제  
        </span>
      </button>

        <router-link class="createBtn" :to="{ name : 'TogetherUpdateView'}">수정</router-link>
      </span>
        </div>
    </div>
    <br>
    <!-- 맵컴포넌트 -->
    <TogetherMap
    :map-lat="together.map_lat"
    :map-lng="together.map_lng"
    />
    <hr>
    <!-- 댓글 -->
    <TogetherComment
    :together-comments="together.togethercomment_set"
    :together-id="together.id"
    />

    <div class="modal fade" id="togetherDeleteModal" tabindex="-1" aria-labelledby="togetherDeleteModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

          <div class="modal-body">
            <p>게시글을 삭제하시겠습니까?</p>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button class=" btn btn-danger" @click="deleteTogether" data-bs-dismiss="modal">삭제</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import TogetherComment from '@/components/Together/TogetherComment.vue'
import TogetherMap from '@/components/Together/TogetherMap.vue'
export default {
  name : 'TogetherDetailView',
  components: {
    TogetherComment,
    TogetherMap,
  },
  created() {
    this.$store.dispatch('getTogetherDetail', this.$route.params.id)
  },
  computed : {
    together() {
      return this.$store.getters.together
    },
    endtims() {
      const togetherEndtime = this.together.endtime
      console.log(this.together.endtime)
      const date = new Date(togetherEndtime)
      const output = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분까지`
      return output
    },
    user() {
      return this.$store.getters.user
    },
    likeUsers() {
      return (this.together?.like_users.length)
     
    },
  },
  methods : {
    deleteTogether() {
      this.$store.dispatch('deleteTogether', this.together.id )
    },
    likesTogether() {
      this.$store.dispatch('likesTogether', this.together.id)
    },
  }
}
</script>

<style>

</style>