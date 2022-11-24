<template>
  <li>
    {{reviewComment.nickname}} : {{reviewComment.content}}
    <button  class="createBtn" v-if="!isUpdate" @click="updateReviewComment">수정</button>
    <div v-if="isUpdate">
      <ReviewCommentUpdateForm
      :comment-all="reviewComment"
      />
    </div>
    <button class="deleteBtn " v-if="!isUpdate" @click="deleteReviewComment">삭제</button>
  </li>
</template>

<script>
import ReviewCommentUpdateForm from './ReviewCommentUpdateForm.vue'

export default {
  name:'ReviewCommentItem',
  data() {
  return {
    isUpdate : false,
  }
 },
  props : {
    reviewComment : Object,
  },
  components : {
  ReviewCommentUpdateForm,
 },
  methods : {
    deleteReviewComment() {
      this.$store.dispatch('deleteReviewComment', this.reviewComment.id)
    },
    updateReviewComment() {
    this.isUpdate = !this.isUpdate
  }
  }
}
</script>

<style>

</style>