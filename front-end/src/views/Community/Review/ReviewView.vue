<template>
  <div>
    <h2>ReviewView</h2>
    <router-link :to="{ name : 'ReviewCreateView'}">CREATE</router-link> <br>
    <!-- <a :href="createUrl">CREATE</a> <br> -->
    <router-link :to="{ name : 'ReviewUpdateView'}">UPDATE</router-link> <br>
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
      // return `http://localhost:8080/showmovie/review/create`
      // // /review/create
    }
  },
}
</script>

<style>

</style>