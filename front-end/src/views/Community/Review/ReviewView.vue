<template>
  <div>
    <h2>ReviewView</h2>
    <router-link :to="{ name : 'ReviewCreateView', params : { action : 'newCreate'} }">CREATE</router-link> <br>
    <!-- <a :href="createUrl">CREATE</a> <br> -->
    <ReviewList/>
  </div>
</template>

<script>
import ReviewList from '@/components/Review/ReviewList'


export default {
  name : 'ReviewView',
  components : {
    ReviewList,
  },
  created() {
      this.$store.dispatch('getReviews')
  },
  computed:{
    createUrl(){
      return 'http://localhost:8080/review/create'
    }
  },
}
</script>

<style>

</style>