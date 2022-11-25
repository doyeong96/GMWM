<template>
<div id="whole">
  <div class="home" >
    <!-- <div class="input-group mb-3">
      <span class="input-group-text">돋보기</span>
      <div class="form-floating">
        <input @input="searchMovieHome" type="text" class="form-control" id="floatingInputGroup1" placeholder="search movie">
        <label for="floatingInputGroup1">search movie</label>
      </div>
    </div> -->
    <div class="input-group mx-auto w-25 mb-3">
      <span class="input-group-text"><img src="@/assets/search.png" style="width:30px; height:30px;" alt=""></span>
      <input @input="searchMovieHome" type="text" class="form-control" id="search" placeholder="search movie" :value="keyword">
    </div>
    <h1><span>G</span><span>E</span><span>T</span><span>&nbsp;</span><span>M</span><span>O</span><span>V</span><span>I</span><span>E</span><span>&nbsp;</span><span>W</span><span>I</span><span>T</span><span>H</span>
    <span>M</span><span>E</span><span>!</span>
    </h1>

    <div>
      <div v-for="findMovie in findMovies" :key="findMovie.id" style="width: 330px; display:inline-block;">
        <div class="card mx-2 my-2">
          
          <div class="card-body">
            <img :src="`https://image.tmdb.org/t/p/w500${findMovie.poster_path}`" style="width: 210px; height:300px;" alt="">
          </div>

          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <a :href="`http://localhost:8080/movieDetail/${findMovie.id}`" style="color : #02020B;"> {{findMovie.title}}</a>
            </li>
          </ul>
          
        </div>
      </div>

    </div>

  </div>
</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  data() {
    return {
      keyword : ''
    }
  },
  methods : {
    searchMovieHome(event){
      if (event.target.value) {
        this.keyword = event.target.value
      this.$store.dispatch('searchMovieHome', this.keyword)
      } else {
        this.keyword = ''
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
    //검색기능
    this.$store.dispatch('getMovies')

  }
  
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Signika:700,300,600);

/* html, body { height: 100%; }
body { display: flex; justify-content: center; align-items: center; margin:20px 0; text-align:center; background:beige; overflow:hidden; } */

h1 {
 font-size:5em;
 font:bold 7.5vw/1.6 'Signika', sans-serif;
 user-select:none;
}

h1 span { display:inline-block; animation:float .2s ease-in-out infinite; }
 @keyframes float {
  0%,100%{ transform:none; }
  33%{ transform:translateY(-1px) rotate(-2deg); }
  66%{ transform:translateY(1px) rotate(2deg); }
}
body:hover span { animation:bounce .6s; }
@keyframes bounce {
  0%,100%{ transform:translate(0); }
  25%{ transform:rotateX(20deg) translateY(2px) rotate(3deg); }
  50%{ transform:translateY(-20px) rotate(3deg) scale(1.1);  }
}

span:nth-child(4n) { color:hsl(50, 75%, 55%); text-shadow:1px 1px hsl(50, 75%, 45%), 2px 2px hsl(50, 45%, 45%), 3px 3px hsl(50, 45%, 45%), 4px 4px hsl(50, 75%, 45%); }
span:nth-child(4n-1) { color:hsl(135, 35%, 55%); text-shadow:1px 1px hsl(135, 35%, 45%), 2px 2px hsl(135, 35%, 45%), 3px 3px hsl(135, 35%, 45%), 4px 4px hsl(135, 35%, 45%); }
span:nth-child(4n-2) { color:hsl(155, 35%, 60%); text-shadow:1px 1px hsl(155, 25%, 50%), 2px 2px hsl(155, 25%, 50%), 3px 3px hsl(155, 25%, 50%), 4px 4px hsl(140, 25%, 50%); }
span:nth-child(4n-3) { color:hsl(30, 65%, 60%); text-shadow:1px 1px hsl(30, 45%, 50%), 2px 2px hsl(30, 45%, 50%), 3px 3px hsl(30, 45%, 50%), 4px 4px hsl(30, 45%, 50%); }

h1 span:nth-child(2){ animation-delay:.05s; }
h1 span:nth-child(3){ animation-delay:.1s; }
h1 span:nth-child(4){ animation-delay:.15s; }
h1 span:nth-child(5){ animation-delay:.2s; }
h1 span:nth-child(6){ animation-delay:.25s; }
h1 span:nth-child(7){ animation-delay:.3s; }
h1 span:nth-child(8){ animation-delay:.35s; }
h1 span:nth-child(9){ animation-delay:.4s; }
h1 span:nth-child(10){ animation-delay:.45s; }
h1 span:nth-child(11){ animation-delay:.5s; }
h1 span:nth-child(12){ animation-delay:.55s; }
h1 span:nth-child(13){ animation-delay:.6s; }
h1 span:nth-child(14){ animation-delay:.65s; }
h1 span:nth-child(15){ animation-delay:.7s; }
h1 span:nth-child(16){ animation-delay:.75s; }
h1 span:nth-child(17){ animation-delay:.8s; }
.home{
  height: 500px;
  width: 1500px;
  margin-left: auto;
  margin-right: auto ;
  margin-bottom: 400px ;
  
}
#whole {
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/test3.jpg');

  background-size: 100%;
}
</style>
