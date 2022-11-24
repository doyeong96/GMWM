<template>
  <div>
    <form @submit.prevent="reviewCommentCreate" >
      <div class="row g-3">
        <!-- <div class="form-floating col-sm-11 mb-3"> -->
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="제목을 작성하세요" id="ReviewComment" type="text" v-model="content">
          <label style="color : #02020B;" for="ReviewComment">댓글 쓰기</label>
        </div>
        <!-- <button class="col-sm-1">등록</button> -->
      </div>
        <button class="ml-auto createBtn ">등록</button>
    </form>
  </div>
</template>

<script>
export default {
  name : 'ReviewCommentForm',
  props : {
    reviewId : Number
  },
  data() {
    return {
      content : null,
    }
  },
  methods : {
    reviewCommentCreate() {
      const content = this.content
      const reviewId = this.reviewId

      const payload = {
        content,reviewId
      }
      this.$store.dispatch('reviewCommentCreate',payload)
    }
  }
}
</script>

<style>

</style>