<template>
  <div>
    <span @click="test" :value="select">{{genre.name}}</span>
    <!-- <input type="checkbox" v-bind="genre.name" v-model="select" @click="test"> -->
    <!-- <span @click="genreSelect">
      {{genre.name}}
    </span> -->
  </div>
</template>

<script>
export default {
    name : 'GenreListItem',
    data(){
      return {
        select : false,
      }
    },
    props : {
      genre : Object
    },
    methods : {
      test(){
        console.log(this.select);
        this.$store.getters.genre.select = !this.$store.getters.genre.select
        // this.genre.select = !this.genre.select
      }
    }
}
</script>

<style>

</style>