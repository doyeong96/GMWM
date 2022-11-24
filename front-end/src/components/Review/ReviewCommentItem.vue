<template>
  <li>
    {{reviewComment.content}}
    <button @click="deleteReviewComment">삭제</button>
  </li>
</template>

<script>
export default {
  name:'ReviewCommentItem',
  props : {
    reviewComment : Object,
  },
  methods : {
    deleteReviewComment() {
      this.$store.dispatch('deleteReviewComment', this.reviewComment.id)
    }
  }
}
</script>

<style>

</style>