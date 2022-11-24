<template>
  <div>
    <ul class="commentItem">
      <ReviewCommentItem
      v-for="reviewcomment in reviewComments" :key="reviewcomment.id"
      :review-comment="reviewcomment"
      />
    </ul>
    <div class="mt-5">
      <ReviewCommentForm
      :review-id="reviewId"
      />
    </div>
  </div>
</template>

<script>
import ReviewCommentItem from '@/components/Review/ReviewCommentItem'
import ReviewCommentForm from '@/components/Review/ReviewCommentForm'

export default {
  name : 'ReviewComment',
  components : {
    ReviewCommentItem,
    ReviewCommentForm,
  },
  props : {
    reviewComments : Array,
    reviewId : Number,
  }
}
</script>

<style scoped>
.commentItem{
  display: flex!important;
  flex-direction: column;
  align-items: flex-start;
}
</style>