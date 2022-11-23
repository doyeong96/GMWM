<template>
  
  <div >
      <h4 id="scrollspyHeading1">{{movie.title}}</h4>
      <p>장르 : <span v-for="genre in movieGenres" :key="genre.id">{{ genre.name }},</span></p>
      <h4 id="scrollspyHeading2">출연진</h4>
      <span v-for="actor in movieActors" :key="actor.id">{{ actor.name }},</span>
      <h4 id="scrollspyHeading3">영화소개</h4>
      <img :src="movieImg" alt="">
      <iframe width="560" height="315" :src="movieYoutube"></iframe>
      <p  id="over" >{{movie.overview}}</p>
      <h4 id="scrollspyHeading4">리뷰작성</h4>
      <p> <router-link :to="{ name: 'ReviewCreateView', params : { action : 'direct'} }">리뷰 작성</router-link></p>
      <h4 id="scrollspyHeading5">좋아요</h4>
      <p>좋아요 누른 사람 : {{likeUsers}} </p>
    <div v-if="movie.like_users.includes(user.pk)">
      <button @click="likesMovie">좋아요 취소</button>
    </div>
    <div v-else>
      <button @click="likesMovie">좋아요</button>
    </div>
    <!-- </div> -->
    <!-- <h2> MovieDetailView</h2>
    {{movie.title}}
    <p>좋아요 누른 사람 : {{likeUsers}} </p>
    <div v-if="movie.like_users.includes(user.pk)">
      <button @click="likesMovie">좋아요 취소</button>
    </div>
    <div v-else>
      <button @click="likesMovie">좋아요</button>
    </div>
    <p v-for="actor in movieActors" :key="actor.id">{{ actor.name }}</p>
    <p>{{movie.overview}}</p>
    
    <router-link :to="{ name: 'ReviewCreateView', params : { action : 'direct'} }">리뷰 작성</router-link>

    <iframe width="560" height="315" :src="movieYoutube"></iframe>
    <img :src="movieImg" alt=""> -->
  </div>
</template>

<script>
export default {
  name : 'MovieDetailView',
  computed : {
  movie() {
    return this.$store.getters.movie 
  },
  movieImg(){
    return `https://image.tmdb.org/t/p/w400${this.$store.getters.movie.poster_path}`
  },
  movieYoutube(){
    return `https://www.youtube.com/embed/${this.$store.getters.movie.youtube_key}`
  },
  movieActors(){
    return this.$store.getters.actors 
  },
  movieGenres(){
    return this.$store.getters.detailGenres
  },
  user() {
      return this.$store.getters.user
    },
  likeUsers() {
      return (this.movie.like_users.length)
    },
  userProfile() {
    return this.$store.getters.userProfile
  },
  },
  methods : {
    likesMovie() {
      this.$store.dispatch('likesMovie', this.movie.id)
    }
  },
  created(){
    this.$store.dispatch('getMovieDetail', this.$route.params.movieId)
    this.$store.dispatch('getMovieActors', this.$route.params.movieId)
    this.$store.dispatch('getMovieGenres', this.$route.params.movieId)
  },
}
</script>

<style scoped>
#over {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: break-word;
  width: 550px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

</style>