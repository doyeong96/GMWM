<template>
  <div>
    <h2>ReviewForm</h2>
    <label for="moviename">영화검색</label>
    <input id="moviename" @keyup.enter="searchMovie" type="text" v-model="movie_name">
    <!-- <input id="moviename" @input="searchMovie" type="text" v-model="movie_name"> -->

    <form @submit.prevent="createReview">
      <label for="title">title</label>
      <input id="title" type="text" v-model="title">

      <label for="review">review</label>
      <input id="review" type="text" v-model="review">
      
      <label for="movie_title">movie_title</label>
      <input id="movie_title" type="text" v-model="movie_title">
      
      <label for="poster_path">poster_path</label>
      <input id="poster_path" type="text" v-model="poster_path">
      
      <label for="score">score</label>
      <input id="score" type="number" v-model="score">

      <input type="submit">
    </form>
    <div v-if="findMovie">
      <p>{{findMovie.title}}</p>
      <img :src="findMovieImg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name : 'ReviewForm',
  data(){
    return {
      movie_name : null,
      title : null,
      review : null,
      movie_title : null,
      poster_path : null,
      score : null,
    }
  },
  methods : {
    createReview(){
      const title = this.title
      const review = this.review
      const movie_title = this.movie_title
      const poster_path = this.poster_path
      const score = this.score

      const payload = {
        title, review, movie_title, poster_path, score
      }

      this.$store.dispatch('createReview', payload)
    },
    searchMovie(){
      const movie_name = this.movie_name
      this.$store.dispatch('searchMovie', movie_name)
    }
  },
  computed : {
    findMovie(){
      return this.$store.getters.searchMovie
    },
    findMovieImg(){
      return `https://image.tmdb.org/t/p/w500${this.$store.getters.searchMovie.poster_path}`
    }

  },
}
</script>

<style>

</style>