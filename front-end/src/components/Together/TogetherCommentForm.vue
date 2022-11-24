<template>
  <div>
    <form @submit.prevent="togetherCommentCreate" >
      <!-- <label for="TogetherComment">댓글작성 : </label>
      <input type="text" id="TogetherComment" v-model="content">
      <input type="submit" value="작성"> -->
      <div class="row g-3">
      <!-- <div class="form-floating col-sm-11 mb-3"> -->
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="제목을 작성하세요" id="ForumComment" type="text" v-model="content">
          <label style="color : #02020B;" for="ForumComment">댓글 쓰기</label>
        </div>
      <!-- <button class="col-sm-1">등록</button> -->
      </div>
        <button class="ml-auto createBtn">등록</button>
    </form>
  </div>

</template>

<script>
export default {
  name : 'TogetherCommentForm',
  props : {
    togetherId : Number,
  },
  data() {
    return {
      content : null,
    }
  },
  methods : {
    togetherCommentCreate() {
      const content = this.content
      const togetherId = this.togetherId

      const payload = {
        content, togetherId
      }
      this.$store.dispatch('togetherCommentCreate',payload)
    }
  }
}
</script>

<style>

</style>