<template>
  <div>
    <MoviesListSwiper/>
    <span v-for="(genremovies, idx) in selgenremovies" :key="idx">
      <MoviesList
      :genre-movies="genremovies"
      :genre="showGenres[idx]"
      />
    </span>
    
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
  computed : {
      selgenremovies(){
        return this.$store.getters.recommendMovies
      },
      showGenres(){
        return this.$store.getters.showGenres
      },
    },
  created(){
    //검색기능
    this.$store.dispatch('getMovies')
  },
}
</script>

<style>

</style>