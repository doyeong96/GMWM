<template>
  <div>
    <!-- <router-link :to="{name : 'MovieDetailView', params : {id : movie.id} }">{{movie.title}}</router-link> -->
    <a :href="movieId">{{movie.title}}</a>
    <p><img :src="movieImg" alt=""></p>
  </div>
</template>

<script>
export default {
    name : 'MoviesListItem',
    props : {
      movie : Object
    },
    computed : {
      movieImg(){
        return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
      },
      movieId(){
        return `http://localhost:8080/showmovie/${this.movie.id}/`
      }
    }
}
</script>

<style>

</style>