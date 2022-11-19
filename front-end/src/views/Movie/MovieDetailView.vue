<template>
  <div>
    <h2> MovieDetailView</h2>
    {{movie.title}}
    <p>{{movie.overview}}</p>
    <!-- <p v-if=""></p> -->
    <iframe width="560" height="315" :src="movieYoutube"></iframe>
    <img :src="movieImg" alt="">
    <!-- <img :src="movieImg" alt=""> -->
    <!-- <img :src="movie.poster_path" alt=""> -->
    <!-- <iframe width="560" height="315" :src=`https://www.youtube.com/embed/${youtube_key}`></iframe> -->
    <!-- {{movie.youtube_key}} -->
    <!-- {{this.movie2.title}} -->
  </div>
</template>

<script>
export default {
  name : 'MovieDetailView',
  computed : {
  movie() {
    return this.$store.getters.movie 
  },
  movieImg(){
    return `https://image.tmdb.org/t/p/w500${this.$store.getters.movie.poster_path}`
  },
  movieYoutube(){
    return `https://www.youtube.com/embed/${this.$store.getters.movie.youtube_key}`
  }
  },
  created(){
    this.$store.dispatch('getMovieDetail', this.$route.params.id)
  }
}
</script>

<style>

</style>