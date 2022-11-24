<template>
  <div>
    <form @submit.prevent="forumCommentUpdate">
        <div class="form-floating col-sm-11 mb-3">
          <input class="form-control" placeholder="제목을 작성하세요" id="ForumComment" type="text" v-model="content">
          <label style="color : #02020B;" for="ForumComment">댓글 수정</label>
        </div>

    <!-- <input type="text" id="ForumComment" v-model="content"> -->
    <input class="createBtn " type="submit" value="작성">
    </form>
  </div>
</template>

<script>
export default {
  name : 'ForumCommentUpdateForm',
  props : {
    commentAll : Object,
  },
  data() {
    return {
      content : this.commentAll.content,
    }
  },
  methods  : {
    forumCommentUpdate() {
      const content = this.content
      const commentId = this.commentAll.id
      const payload = {
        content, commentId
      }
      this.$store.dispatch('forumCommentUpdate',payload)
    }
  }
}
</script>

<style>

</style>