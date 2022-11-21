<template>
  <div>
    <h2>스위퍼</h2>
    <MoviesListItemSwiper
      v-for="bestMovie in bestMovies"
      :key="bestMovie.id"
      :bestMovie="bestMovie"
    />
  </div>
</template>

<script>
import MoviesListItemSwiper from '@/components/Movie/MoviesListItemSwiper'
export default {
    name : 'MoviesListSwiper',
    components : {
      MoviesListItemSwiper,
    },
    computed : {
      bestMovies(){
        return this.$store.getters.bestMovie
      }
    }
}
</script>

<style>

</style>