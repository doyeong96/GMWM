<template>
  <div>
    <form @submit.prevent="reviewCommentUpdate">
      <div class="form-floating col-sm-11 mb-3">
    <input class="form-control" placeholder="제목을 작성하세요" type="text" id="ReviewComment" v-model="content">
    <label for="ReviewComment">댓글 수정</label>
    </div>
    <input class="createBtn" type="submit" value="작성">
    </form>
  </div>
</template>

<script>
export default {
  name : 'ReivewCommentUpdateForm',
  props : {
    commentAll : Object,
  },
  data() {
    return {
      content : this.commentAll.content,
    }
  },
  methods  : {
    reviewCommentUpdate() {
      const content = this.content
      const commentId = this.commentAll.id
      const payload = {
        content, commentId
      }
      this.$store.dispatch('reviewCommentUpdate',payload)
    }
  }
}
</script>

<style>

</style>