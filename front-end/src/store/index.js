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
    user : null,
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
    searchMovie : null,
    selectedMovieTitle : '',
    selectedMoviePoster : '',
    // genre
    genres : [],
    genre : {},
    selectedGenres : [],
    // 영화배우
    actors : []
  },
  getters: {
    authHead: (state) => ({ Authorization: `Token ${state.token}`}),
    user: (state) => state.user,
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
    actors : (state) => state.actors,
    searchMovie : (state) => state.searchMovie,
    selectedMovieTitle : (state) => state.selectedMovieTitle,
    selectedMoviePoster : (state) => state.selectedMoviePoster,
  },
  mutations: {
    // user
    SET_TOKEN : (state,token) => state.token = token,
    SET_USER: (state,user) => state.user = user,
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
    SEARCH_MOVIE : (state, searchMovie) => state.searchMovie = searchMovie,
    SET_SELECTEDMOVIESTITLE : (state, data) => state.selectedMovieTitle = data,
    SET_SELECTEDMOVIESPOSTER : (state,data) => state.selectedMoviePoster = data,
    // genre
    GET_GENRES : (state, genres) => state.genres = genres,
    SET_GENRES : (state, data) => state.selectedGenres = data,
    // 영화배우
    GET_MOVIE_ACTORS : (state, actors) => state.actors = actors,
    
  },
  actions: {
    // user /////////////////////////////////////////////////////////
    signUp({commit,dispatch},payload) {
      axios({
        method : 'post',
        url : `${API_URL}/accounts/signup/`,
        data: {...payload}
      })
      .then((res) => {
        commit('SET_TOKEN', res.data.key)
        dispatch('getUserInfo')
        alert('로그인 되셨습니다.')
        router.push({ name : 'ForumView'})
      })
      .catch((err) => console.log(err))
    },
    login({commit,dispatch},payload) {
      axios({
        method : 'post',
        url : `${API_URL}/accounts/login/`,
        data: {...payload}
      })
      .then((res) => {
        commit('SET_TOKEN', res.data.key)
        dispatch('getUserInfo')
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
        commit('SET_USER', null)
        router.push({name : 'LoginView'})
      })
      .catch((err) => console.log(err))
    },
    getUserInfo({commit, getters}) {
      axios({
        url: `${API_URL}/accounts/user/`,
        method: 'get',
        headers: getters.authHead,
      })
      .then((res) => {
        console.log(res.data)
        commit('SET_USER',res.data)
      })
    },
    passwordChange({commit,getters},payload) {
      console.log(payload)
      axios({
        method : 'post',
        url: `${API_URL}/accounts/password/change/`,
        headers: getters.authHead,
        data : {...payload}
      })
      .then((res) => {
        console.log(res)
        commit('SET_TOKEN',null)
        commit('SET_USER', null)
        alert('비밀번호 변경이 완료됐습니다 다시 로그인 해주세요')
        router.push({name : 'LoginView'})
      })
      .catch((err) => {
        console.log(err)
        alert('제대로 입력해주세요')
      })
    },
    withDrawal({getters,commit}) {
      axios({
        method : 'delete',
        url : `${API_URL}/withdrawal/`,
        headers : getters.authHead
      })
      .then((res) => {
        console.log(res)
      })
      axios({
        method : 'post',
        url: `${API_URL}/accounts/logout/`,
        headers: getters.authHead,
      })
      .then(() => {
        commit('SET_TOKEN',null)
        commit('SET_USER', null)
        router.push({name : 'LoginView'})
      })
      .catch((err) => console.log(err))
    },
    // forum /////////////////////////////////////////////////////////
    likesForum({getters}, forumId) {
      axios({
        method : 'post',
        url : `${API_URL}/community/forumlikes/${forumId}/`,
        headers : getters.authHead
      })
      .then(() => {
        router.go(router.currentRoute)
      })
      .catch((err) => {
        console.log(err)
      })
    },
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
      .catch((err) => {console.log(err)
        alert('내용을 채워주세요')
      })
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
    likesReview({getters}, reviewId) {
      axios({
        method : 'post',
        url : `${API_URL}/community/reviewlikes/${reviewId}/`,
        headers : getters.authHead
      })
      .then(() => {
        router.go(router.currentRoute)
      })
      .catch((err) => {
        console.log(err)
      })
    },
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
      .catch((err) => {
        console.log(err.response.data)
        alert('빈 부분이 있거나 평점이 0~5점인지 확인하세요')
        
      })
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
    likesTogether({getters}, togetherId) {
      axios({
        method : 'post',
        url : `${API_URL}/community/togetherlikes/${togetherId}/`,
        headers : getters.authHead
      })
      .then(() => {
        router.go(router.currentRoute)
      })
      .catch((err) => {
        console.log(err)
      })
    },
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
      .catch((err) => {console.log(err)
        alert('내용을 채워주세요')
      })
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
        commit('RECOMMEND_MOVIES', res.data)
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
    selectMovie({commit}, findMovie) {
      commit('SET_SELECTEDMOVIESTITLE', findMovie.title)
      commit('SET_SELECTEDMOVIESPOSTER', findMovie.poster_path)
    },
    setSelectedMovie({commit}){
      commit('SET_SELECTEDMOVIESTITLE', '')
      commit('SET_SELECTEDMOVIESPOSTER','')
    },
    setSearchMovies({commit}) {
      commit('SEARCH_MOVIE', null)
    }
  },
  modules: {
  }
})
