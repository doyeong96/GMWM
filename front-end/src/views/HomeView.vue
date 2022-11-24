<template>
  <div class="home">

    <label for="moviename">돋보기 아이콘 달기</label>
    <input id="moviename" @input="searchMovieHome" type="text">
    <div>
      <div v-for="findMovie in findMovies" :key="findMovie.id" style="width: 330px; display:inline-block;">
        <div class="card mx-2 my-2">
          
          <div class="card-body">
            <img :src="`https://image.tmdb.org/t/p/w500${findMovie.poster_path}`" style="width: 280px; height:400px;" alt="">
          </div>

          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <a :href="`http://localhost:8080/showmovie/${findMovie.id}`"> {{findMovie.title}}</a>
            </li>
          </ul>
          
        </div>
      </div>

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
      if (event.target.value) {
        const movie_name = event.target.value
      this.$store.dispatch('searchMovieHome', movie_name)
      } else {
        this.$store.dispatch('searchMovieHome', 'dsofkasozvoxckvoxckvo')
      }
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
  created() {
    this.$store.dispatch('resetSearchMovieHome')
  }
  
}
</script>

<style scoped>
.home{
  height: 500px;
  width: 1500px;
  margin-left: auto;
  margin-right: auto ;
  margin-top: 100px ;
}
</style>
