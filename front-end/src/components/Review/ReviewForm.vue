<template>
  <div>
    <h2>ReviewForm</h2>
    <label for="moviename">영화검색</label>
    <!-- <input id="moviename" @keyup.enter="searchMovie" type="text" v-model="movie_name"> -->
    <input id="moviename" @input="searchMovie" type="text" v-model="movie_title">

    <form @submit.prevent="onSubmit">
      <label for="title">title</label>
      <input id="title" type="text" v-model="title">

      <label for="review">review</label>
      <input id="review" type="text" v-model="review">
      
      <!-- <label for="movie_title">movie_title</label>
      <input id="movie_title" type="text" v-model="movie_title">
      
      <label for="poster_path">poster_path</label>
      <input id="poster_path" type="text" v-model="poster_path"> -->
      
      <label for="score">score</label>
      <input id="score" type="number" v-model="score">

      <input type="submit">
    </form>
    <div v-for="findMovie in findMovies" :key="findMovie.id">
      <p>{{findMovie.title}}</p>
      <!-- <img :src="`https://image.tmdb.org/t/p/w500${findMovie.poster_path}`" alt=""> -->
      <button @click="select(findMovie)">확정</button>
    </div>
  </div>
</template>

<script>
export default {
  name : 'ReviewForm',
  data(){
    return {
      title : this.Review.title,	
      review : this.Review.review,	
      movie_title : this.Review.movie_title,	
      poster_path : this.Review.poster_path,	
      score : this.Review.score,
    }
  },
  props : {	
    action : String,	
    Review : Object,	
  },
  methods : {
    createReview(){
      const title = this.title
      const review = this.review
      // const movie_title = this.movie_title
      const movie_title = this.$store.getters.selectedMovie[0][0]
      // const poster_path = this.poster_path
      const poster_path = this.$store.getters.selectedMovie[0][1]
      const score = this.score

      const payload = {
        title, review, movie_title, poster_path, score
      }

      this.$store.dispatch('createReview', payload)
    },
    updateReview(){	
      const title = this.title	
      const review = this.review	
      const movie_title = this.$store.getters.selectedMovie[0][0]	
      const poster_path = this.$store.getters.selectedMovie[0][1]
      const score = this.score	
      const id = this.Review.id	
      const payload = {	
        title, review, movie_title, poster_path, score, id	
      }	
      this.$store.dispatch('updateReview', payload)	
    },
    onSubmit() {	
      if (this.action === 'create') {	
        this.createReview()	
      } else {	
        this.updateReview()	
      }	
    },
    searchMovie(event){
      const movie_name = event.target.value
      this.$store.dispatch('searchMovie', movie_name)
    },
    select(findMovie){
      this.movie_title = findMovie.title
      this.$store.getters.selectedMovie.push([findMovie.title, findMovie.poster_path])
      console.log(this.$store.getters.selectedMovie);
    }
  },
  computed : {
    findMovies(){
      return this.$store.getters.searchMovie
    },
    findMovieImg(){ 
      return `https://image.tmdb.org/t/p/w500${this.$store.getters.searchMovie.poster_path}`
    }

  },
  created() {
    this.$store.dispatch('setSelectedMovie')
    this.$store.dispatch('setSearchMovies')
  }
}
</script>

<style>

</style>