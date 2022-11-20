<template>
  <div>
    <h2>ReviewDetailView</h2>
    {{review.title}}
    {{review.movie_title}}
    <!-- <img :src="review.poster_path" alt=""> -->
    <!-- <img :src=`https://image.tmdb.org/t/p/w500${}` alt=""> -->
    <img :src="`https://image.tmdb.org/t/p/w500${review.poster_path}`" alt="">
    <router-link :to="{ name : 'ReviewUpdateView'}">UPDATE</router-link> <br>	
    <button @click="deleteReview">삭제</button>
    <ReviewComment
    :review-comments="review.reviewcomment_set"
    :review-id="review.id"
    />
  </div>
</template>

<script>
import ReviewComment from '@/components/Review/ReviewComment'

export default {
  name : 'ReviewDetailView',
  components: {
    ReviewComment,
  },
  created() {
    this.$store.dispatch('getReviewDetail', this.$route.params.id)
  },
  computed : {
    review() {
      return this.$store.getters.review
    },
  },
  methods : {	
    deleteReview() {	
      this.$store.dispatch('deleteReview', this.review.id)	
    }	
  },
  
}
</script>

<style>

</style>