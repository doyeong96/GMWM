<template>
  <div>
    <h3>genre list</h3>
    <GenreListItem
      v-for="genre in genres"
      :key="genre.id"
      :genre="genre"
    />
    <button @click="pick">선택완료</button>
  </div>
</template>

<script>
import GenreListItem from '@/components/Movie/GenreListItem'
export default {
    name : 'GenreList',
    components : {
      GenreListItem,
    },
    computed : {
      genres(){
        return this.$store.getters.genres
      }
    },
    methods : {
      pick(){
        this.$store.dispatch('selectGenres')
        // 빼고싶은데 안되네
        // while (this.$store.getters.selectedGenres.lenght === 0) {
        //   this.$store.getters.selectedGenres.pop()
        // }
      }
    },
}
</script>

<style>

</style>