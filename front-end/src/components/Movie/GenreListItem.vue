<template>
  <div>
    <!-- <span @click="test" :value="select">{{genre.name}}</span> -->
    <input type="checkbox" @click="genreSelect">{{genre.name}}
    <!-- <button @click="test2">+</button> -->
    <!-- <input type="checkbox" v-model="select" @click="test">{{genre.name}} -->
    <!-- {{genre.name}} -->
    <!-- <button @click="test2">확정</button> -->
    <!-- <span @click="genreSelect">
      {{genre.name}}
    </span> -->
    <!-- <button @click="test2">{{genre.name}}</button> -->
    
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
        // getters의 선택장르에 장르 id를 push 함
        return this.$store.getters.selectedGenres.push(this.genre.id)
        // 장르를 클릭하면 
        // this.select.push(this.genre.id)
        // console.log(this.select);
        // this.$store.getters.genre.select = !this.$store.getters.genre.select
        // this.genre.select = !this.genre.select
      },
    }
}
</script>

<style>

</style>