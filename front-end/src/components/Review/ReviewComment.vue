<template>
  <div>
    <h2>ReviewComment</h2>
    <ReviewCommentItem
    v-for="reviewcomment in reviewComments" :key="reviewcomment.id"
    :review-comment="reviewcomment"
    />
  </div>
</template>

<script>
import ReviewCommentItem from '@/components/Review/ReviewCommentItem'

export default {
  name : 'ReviewComment',
  components : {
    ReviewCommentItem,
  },
  props : {
    reviewComments : Array,
  }
}
</script>

<style>

</style>