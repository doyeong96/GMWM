<template>
  <div>
    <h1>강력추천 영화</h1>
    <MoviesListSwiper/>
    <h2>ShowMoviesView</h2>
    <MoviesList/>
  </div>
</template>

<script>
import MoviesList from '@/components/Movie/MoviesList'
import MoviesListSwiper from '@/components/Movie/MoviesListSwiper'
export default {
  name : 'ShowMoviesView',
  components : {
    MoviesList,
    MoviesListSwiper
  },
  created(){
    //검색기능
    this.$store.dispatch('getMovies')
  },
}
</script>

<style>

</style>