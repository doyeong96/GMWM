<template>
  <li>
    {{reviewComment.nickname}} : {{reviewComment.content}}
    <span v-if="reviewComment.user === user.pk">
    <button  class="createBtn" v-if="!isUpdate" @click="updateReviewComment">수정</button>
    <div v-if="isUpdate">
      <ReviewCommentUpdateForm
      :comment-all="reviewComment"
      />
    </div>
    <button class="deleteBtn mx-2 " v-if="!isUpdate" @click="deleteReviewComment">삭제</button>
  </span>
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
  },
  computed : {
    user() {
      return this.$store.getters.user
    }
  },
}
</script>

<style>

</style>