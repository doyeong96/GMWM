<template>
  <div class="home">
    
    <!-- <div class="input-group mb-3">
      <span class="input-group-text">돋보기</span>
      <div class="form-floating">
        <input @input="searchMovieHome" type="text" class="form-control" id="floatingInputGroup1" placeholder="search movie">
        <label for="floatingInputGroup1">search movie</label>
      </div>
    </div> -->
    <div class="input-group mx-auto w-25 mb-3">
      <span class="input-group-text"><img src="@/assets/search.png" style="width:30px; height:30px;" alt=""></span>
      <input @input="searchMovieHome" type="text" class="form-control" id="search" placeholder="search movie">
    </div>

    <!-- <label for="moviename">돋보기 아이콘 달기</label> -->
    <!-- <input id="moviename" @input="searchMovieHome" type="search"> -->
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
