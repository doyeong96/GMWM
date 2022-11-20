<template>
  <div>
    <h2> MovieDetailView</h2>
    {{movie.title}}
    <p v-for="actor in movieActors" :key="actor.id">{{ actor.name }}</p>
    <p>{{movie.overview}}</p>
    <iframe width="560" height="315" :src="movieYoutube"></iframe>
    <img :src="movieImg" alt="">
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
  },
  movieActors(){
    return this.$store.getters.actors 
  }
  },
  created(){
    this.$store.dispatch('getMovieDetail', this.$route.params.id)
    this.$store.dispatch('getMovieActors', this.$route.params.id)
  },
}
</script>

<style>

</style>