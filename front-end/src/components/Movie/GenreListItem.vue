<template>
  <div>
    <input type="checkbox" @click="genreSelect">{{genre.name}}
    <!-- <button @click="genreSelect">{{genre.name}}</button> -->
    
  </div>
</template>

<script>
export default {
    name : 'GenreListItem',
    props : {
      genre : Object,
    },
    data(){
      return {
        selected : 0
      }
    },
    methods : {
      genreSelect(){
        return this.$store.getters.selectedGenres.push(this.genre.id)
      },
    }
}
</script>

<style>

</style>