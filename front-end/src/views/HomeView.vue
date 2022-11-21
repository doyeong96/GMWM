<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <label for="moviename">홈에서 영화검색</label>
    <input id="moviename" @input="searchMovieHome" type="text">

    <div v-for="findMovie in findMovies" :key="findMovie.id">
      <p><a :href="`http://localhost:8080/showmovie/${findMovie.id}`"> {{findMovie.title}}</a></p>
      <img :src="`https://image.tmdb.org/t/p/w500${findMovie.poster_path}`" alt="">
      <!-- <button @click="select(findMovie)">확정</button> -->
      <!-- <a :href="findMovieId">{{}}</a> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
  },
  methods : {
    searchMovieHome(event){
      const movie_name = event.target.value
      this.$store.dispatch('searchMovieHome', movie_name)
    },
  },
  computed : {
    findMovies(){
      return this.$store.getters.searchMovieHome
    },
    findMovieImg(){ 
      return `https://image.tmdb.org/t/p/w500${this.$store.getters.searchMovieHome.poster_path}`
    },
    findMovieId(){
      return `http://localhost:8080/showmovie/`
    }
  },
}
</script>
