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
    token : null,
    forums : [],
    forum : {},
    reviews : [],
    review : {},
    togethers : [],
    together : {},
  },
  getters: {
    authHead: (state) => ({ Authorization: `Token ${state.token}`}),
  },
  mutations: {
    SAVE_TOKEN : (state,token) => state.token = token,
    // forum
    GET_FORUMS : (state, forums) => state.forums = forums,
    GET_FORUM : (state, forum) => state.forum = forum,
  },
  actions: {
    // user
    signUp({commit},payload) {
      axios({
        method : 'post',
        url : `${API_URL}/accounts/signup/`,
        data: {...payload}
      })
      .then((res) => {
        commit('SAVE_TOKEN', res.data.key)
        router.push({ name : 'HomeView'})
      })
      .catch((err) => console.log(err))
    },
    // forum
    createForum({getters}, payload){
      axios({
        method : 'post',
        url : `${API_URL}/community/forum/`,
        data : {...payload},
        headers : getters.authHead
      })
      .then((res) => {
        console.log(res);
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
          console.log(res);
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

    // review
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

    // together

  },
  modules: {
  }
})
