import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import createPersistedState from "vuex-persistedstate"

const API_URL = 'http://127.0.0.1:8000'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    // user
    token : null,
    // forum
    forums : [],
    forum : {},
    // review
    reviews : [],
    review : {},
    // together
    togethers : [],
    together : {},
    // movie
    movies : [],
    movie : {},
    recommendMovies : [],
    bestMovie : [],
    searchMovie : null,
<<<<<<< Updated upstream
    selectedMovie : [],
    // genre
    genres : [],
    genre : {},
    selectedGenres : [],
    // 영화배우
    actors : []
  },
  getters: {
    authHead: (state) => ({ Authorization: `Token ${state.token}`}),
    forums: (state) => state.forums,	
    forum: (state) => state.forum,
    reviews: (state) => state.reviews,
    review: (state) => state.review,
    togethers: (state) => state.togethers,
    together: (state) => state.together,
    movies: (state) => state.movies,
    movie: (state) => state.movie,
    genres: (state) => state.genres,
    genre : (state) => state.genre,
    selectedGenres : (state) => state.selectedGenres,
    recommendMovies : (state) => state.recommendMovies,
    bestMovie : (state) => state.bestMovie,
    actors : (state) => state.actors,
    searchMovie : (state) => state.searchMovie,
<<<<<<< Updated upstream
    selectedMovie : (state) => state.selectedMovie
  },
  mutations: {
    SET_TOKEN : (state,token) => state.token = token,
    // forum
    GET_FORUMS : (state, forums) => state.forums = forums,
    GET_FORUM : (state, forum) => state.forum = forum,
    // review
    GET_REVIEWS : (state, reviews) => state.reviews = reviews,
    GET_REVIEW : (state, review) => state.review = review,
    // together
    GET_TOGETHERS : (state, togethers) => state.togethers = togethers,
    GET_TOGETHER : (state, together) => state.together = together,
    // movie
    GET_MOVIES : (state, movies) => state.movies = movies,
    GET_MOVIE : (state,movie) => state.movie = movie,
    RECOMMEND_MOVIES : (state, recommendMovies) => state.recommendMovies = recommendMovies,
    BEST_MOVIES : (state, bestMovie) => state.bestMovie = bestMovie,
    SEARCH_MOVIE : (state, searchMovie) => state.searchMovie = searchMovie,
<<<<<<< Updated upstream
    SET_SELECTEDMOVIES : (state, data) => state.selectedMovie = data,
    // genre
    GET_GENRES : (state, genres) => state.genres = genres,
    SET_GENRES : (state, data) => state.selectedGenres = data,
    // 영화배우
    GET_MOVIE_ACTORS : (state, actors) => state.actors = actors,
    
  },
  actions: {
    // user /////////////////////////////////////////////////////////
    signUp({commit},payload) {
      axios({
        method : 'post',
        url : `${API_URL}/accounts/signup/`,
        data: {...payload}
      })
      .then((res) => {
        commit('SET_TOKEN', res.data.key)
        router.push({ name : 'HomeView'})
      })
      .catch((err) => console.log(err))
    },
    login({commit},payload) {
      axios({
        method : 'post',
        url : `${API_URL}/accounts/login/`,
        data: {...payload}
      })
      .then((res) => {
        commit('SET_TOKEN', res.data.key)
        router.push({name : 'ForumView'})
      })
      .catch((err) => console.log(err))
    },
    logout({commit,getters}) {
      axios({
        method : 'post',
        url: `${API_URL}/accounts/logout/`,
        headers: getters.authHead,
      })
      .then(() => {
        commit('SET_TOKEN',null)
      })
      .catch((err) => console.log(err))
    },
    // forum /////////////////////////////////////////////////////////
    forumCommentUpdate({getters}, payload) {
      const forumCommentId = payload.commentId
      const content = payload.content
      axios({
        method : 'put',
        url : `${API_URL}/community/forumcomments/${forumCommentId}/`,
        headers : getters.authHead,
        data : {content}
      })
      .then(() => {
        router.go(router.currentRoute)
      })
      .catch((err) => console.log(err))
    },
    deleteFourmComment({getters}, forumCommentId) {
      axios({
        method : 'delete',
        url : `${API_URL}/community/forumcomments/${forumCommentId}/`,
        headers : getters.authHead
      })
      .then(() => {
        router.go(router.currentRoute)
      })
    },
    deleteForum({getters}, forumId){
      axios({
        method : 'delete',
        url : `${API_URL}/community/forum/${forumId}/`,
        headers : getters.authHead
      })
      .then(() => {
        router.push({name : 'ForumView'})
      })
      .catch((err) => console.log(err))
    },
    updateForum({getters}, payload) {
      const id = payload.id
      const title = payload.title
      const content = payload.content
      axios({
        method : 'put',
        url : `${API_URL}/community/forum/${id}/`,
        data : {
          title : title,
          content : content
        },
        headers : getters.authHead
      })
      .then(() => {
        router.push({name :'ForumDetailView', params : { id : id} })
      })
      .catch((err) => console.log(err))
    },
    createForum({getters}, payload){
      axios({
        method : 'post',
        url : `${API_URL}/community/forum/`,
        data : {...payload},
        headers : getters.authHead
      })
      .then(() => {
        router.push({name : 'ForumView'})
      })
      .catch((err) => console.log(err))
    },
    getForums({commit}){
      axios({
        method : 'get',
        url : `${API_URL}/community/forum/`,
        // headers : getters.authHead
      })
        .then((res) => {
          commit('GET_FORUMS', res.data)
        })
        .catch((err) => console.log(err))
    },
    getForumDetail({commit},forumId) {
      axios({
        url: `${API_URL}/community/forum/${forumId}`,
      })
      .then((res) => {
        commit('GET_FORUM',res.data)
      })
      .catch((err) => console.log(err))
    },
    forumCommentCreate({getters}, payload){
      const forumId = payload.forumId
      const content = payload.content
      axios({
        method : 'post',
        url : `${API_URL}/community/forum/${forumId}/forumcomments/`,
        headers : getters.authHead,
        data :  {
          content,
        }
      })
      .then((res) => {
        console.log(res)
        router.go(router.currentRoute)
      })
    },

    // review /////////////////////////////////////////////////////////
    deleteReviewComment({getters}, reviewCommentId) {
      axios({
        method : 'delete',
        url : `${API_URL}/community/reviewcomments/${reviewCommentId}/`,
        headers : getters.authHead
      })
      .then(() => {
        router.go(router.currentRoute)
      })
    },
    deleteReview({getters}, reviewId){
      axios({
        method : 'delete',
        url : `${API_URL}/community/review/${reviewId}/`,
        headers : getters.authHead
      })
      .then(() => {
        router.push({name : 'ReviewView'})
      })
      .catch((err) => console.log(err))
    },
    updateReview({getters}, payload) {
      const title = payload.title
      const review = payload.review
      const movie_title = payload.movie_title
      const poster_path = payload.poster_path
      const score = payload.score
      const payloads = {
        title, review, movie_title, poster_path, score
      }
      const id = payload.id
      axios({
        method : 'put',
        url : `${API_URL}/community/review/${id}/`,
        data : payloads,
        headers : getters.authHead
      })
      .then(() => {
        router.push({name :'ReviewDetailView', params : { id : id} })
      })
      .catch((err) => console.log(err))
    },
    createReview({getters}, payload){
      axios({
        method : 'post',
        url : `${API_URL}/community/review/`,
        data : {...payload},
        headers : getters.authHead
      })
      .then((res) => {
        console.log(res);
        router.push({name : 'ReviewView'})
      })
      .catch((err) => console.log(err))
    },
    getReviews({commit}){
      axios({
        method : 'get',
        url : `${API_URL}/community/review/`,
        // headers : getters.authHead
      })
        .then((res) => {
          commit('GET_REVIEWS', res.data)
        })
        .catch((err) => console.log(err))
    },
    getReviewDetail({commit},reviewId) {
      axios({
        url: `${API_URL}/community/review/${reviewId}`,
      })
      .then((res) => {
        commit('GET_REVIEW',res.data)
      })
      .catch((err) => console.log(err))
    },
    reviewCommentCreate({getters},payload) {
      const content = payload.content
      const reviewId = payload.reviewId
      axios({
        method : 'post',
        url: `${API_URL}/community/review/${reviewId}/reviewcomments/`,
        headers : getters.authHead,
        data : {
          content
        }
      })
      .then((res) => {
        console.log(res)
        router.go(router.currentRoute)
      })
     },
    // together /////////////////////////////////////////////////////////
    deleteTogetherComment({getters}, togetherCommentId) {
      axios({
        method : 'delete',
        url : `${API_URL}/community/togethercomments/${togetherCommentId}/`,
        headers : getters.authHead
      })
      .then(() => {
        router.go(router.currentRoute)
      })
    },
    deleteTogether({getters}, togetherId){
      axios({
        method : 'delete',
        url : `${API_URL}/community/together/${togetherId}/`,
        headers : getters.authHead
      })
      .then(() => {
        router.push({name : 'TogetherView'})
      })
      .catch((err) => console.log(err))
    },
    updateTogether({getters}, payload) {
      const title = payload.title
      const content = payload.content
      const map_lat = payload.map_lat
      const map_lng = payload.map_lng
      const endtime = payload.endtime
      const payloads = {
        title, content, map_lat, map_lng, endtime
      }
      const id = payload.id
      axios({
        method : 'put',
        url : `${API_URL}/community/together/${id}/`,
        data : payloads,
        headers : getters.authHead
      })
      .then(() => {
        router.push({name :'TogetherDetailView', params : { id : id} })
      })
      .catch((err) => console.log(err))
    },
    createTogether({getters}, payload){
      axios({
        method : 'post',
        url : `${API_URL}/community/together/`,
        data : {...payload},
        headers : getters.authHead
      })
      .then(() => {
        router.push({name : 'TogetherView'})
      })
      .catch((err) => console.log(err))
    },
    getTogethers({commit}){
      axios({
        method : 'get',
        url : `${API_URL}/community/together/`,
        // headers : getters.authHead
      })
        .then((res) => {
          commit('GET_TOGETHERS', res.data)
        })
        .catch((err) => {
          console.log(err)
          alert('작성된 글이 없습니다.')
          router.push({name : 'TogetherCreateView'})
        })
    },
    getTogetherDetail({commit},togetherId) {
      axios({
        url: `${API_URL}/community/together/${togetherId}`,
      })
      .then((res) => {
        commit('GET_TOGETHER',res.data)
      })
      .catch((err) => console.log(err))
    },
    togetherCommentCreate({getters},payload) {
      const content = payload.content
      const togetherId = payload.togetherId
      axios({
        method : 'post',
        url: `${API_URL}/community/together/${togetherId}/togethercomments/`,
        headers : getters.authHead,
        data : {
          content
        }
      })
      .then((res) => {
        console.log(res)
        router.go(router.currentRoute)
      })
    },
    // movies /////////////////////////////////////////////////////////
    // getMovies, getMovieDetail 주소만 수정해주면 될 것 같음
    getMovies({commit}){
      axios({
        url : `${API_URL}/movies/`,
      })
      .then((res) => {
        // console.log(res.data);
        commit('GET_MOVIES', res.data)
      })
      .catch((err) => console.log(err))
    },
    getMovieDetail({commit}, movieId){
      axios({
        url : `${API_URL}/movies/${movieId}/`,
      })
      .then((res) => {
        // console.log(res);
        commit('GET_MOVIE',res.data)
      })
      .catch((err) => console.log(err))
    },
    // genre
    getGenres({commit}){
      axios({
        url : `${API_URL}/movies/genres/`,
      })
      .then((res) => {
        // console.log(res);
        commit('GET_GENRES', res.data)
      })
      .catch((err) => console.log(err))
    },
    // 선택장르 보내기, 영화 추천받기
    selectGenres({getters, commit}){
      console.log(getters.selectedGenres);
      axios({
        url : `${API_URL}/movies/recommend/`,
        method : 'POST',
        data : getters.selectedGenres,
      })
      .then((res) => {
        console.log(res);
        commit('BEST_MOVIES', res.data[0])
        commit('RECOMMEND_MOVIES', res.data[1])
        commit('SET_GENRES',[])
      })
      .catch((err) => console.log(err))
    },
    // 영화배우 정보 가져오기
    getMovieActors({commit}, movieId){
      axios({
        url : `${API_URL}/movies/recommend/actors/`,
        method : 'POST',
        data : {movieId},
      })
      .then((res) => {
        // console.log(res)
        commit('GET_MOVIE_ACTORS', res.data)
      })
      .catch((err) => console.log(err))
    },
    // 리뷰 작성시 영화 검색
    searchMovie({commit}, movie_name){
      axios({
        url : `${API_URL}/movies/search/`,
        method : 'POST',
        data : {movie_name}
      })
      .then((res) => {
        console.log(res)
        commit('SEARCH_MOVIE', res.data)
      })
      .catch((err) => console.log(err))
    },
    setSelectedMovie({commit}){
      commit('SET_SELECTEDMOVIES', [])
    },
    setSearchMovies({commit}) {
      commit('SEARCH_MOVIE', null)
    }
  },
  modules: {
  }
})
