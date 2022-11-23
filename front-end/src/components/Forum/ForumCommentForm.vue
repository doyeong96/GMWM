<template>
  <div>
    <form @submit.prevent="forumCommentCreate">
      <div class="row g-3">
        <!-- <div class="form-floating col-sm-11 mb-3"> -->
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="제목을 작성하세요" id="ForumComment" type="text" v-model="content">
          <label for="ForumComment">댓글 쓰기</label>
        </div>
        <!-- <button class="col-sm-1">등록</button> -->
      </div>
        <button class="ml-auto">등록</button>
    </form>
  </div>
</template>

<script>
export default {
  name : 'ForumCommentForm',
  props : {
    forumId : Number,
  },
  data() {
    return {
      content : null,
    }
  },
  methods  : {
    forumCommentCreate() {
      const content = this.content
      const forumId = this.forumId
      const payload = {
        content, forumId
      }
      this.$store.dispatch('forumCommentCreate',payload)
    }
  }
}
</script>

<style>

</style>