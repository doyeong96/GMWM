<template>
  <div class="genre">
    <input type="checkbox" @change="check" @click="genreSelect" v-model="want">{{genre.name}}
    <!-- <button @click="genreSelect">{{genre.name}}</button> -->
  </div>
</template>

<script>
export default {
    name : 'GenreListItem',
    props : {
      genre : Object,
      all : Number,
    },
    data(){
      return {
        selected : 0,
        want : false,
      }
    },
    methods : {
      genreSelect(){
        if (this.want === false) {
          this.$store.commit('INCREASE_GENRE')
          return this.$store.getters.selectedGenres.push(this.genre.id)
        }
        else if (this.want === true){
          this.$store.commit('DECREASE_GENRE')
          this.$store.dispatch('deleteGenre', this.genre.id)

          // return this.$store.getters.selectedGenres = this.$store.getters.selectedGenres.filter((genreId) => genreId === this.genre.id)
          // return this.$store.getters.selectedGenres
        }
      },
      check(){
        console.log(this.$store.getters.selectGenreNum);
        if(this.$store.getters.selectGenreNum>=6){
          alert('5개 넘기지 마셈')
          this.$store.commit('DECREASE_GENRE')
          this.$store.dispatch('deleteGenre', this.genre.id)
        }
      }
    },
}
</script>

<style>

</style>