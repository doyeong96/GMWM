import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
//Forum
import ForumView from '@/views/Community/Forum/ForumView'
import ForumCreateView from '@/views/Community/Forum/ForumCreateView'
import ForumUpdateView from '@/views/Community/Forum/ForumUpdateView'
import ForumDetailView from '@/views/Community/Forum/ForumDetailView'
//Review
import ReviewView from '@/views/Community/Review/ReviewView'
import ReviewCreateView from '@/views/Community/Review/ReviewCreateView'
import ReviewUpdateView from '@/views/Community/Review/ReviewUpdateView'
import ReviewDetailView from '@/views/Community/Review/ReviewDetailView'
//Together
import TogetherView from '@/views/Community/Together/TogetherView'
import TogetherCreateView from '@/views/Community/Together/TogetherCreateView'
import TogetherUpdateView from '@/views/Community/Together/TogetherUpdateView'
import TogetherDetailView from '@/views/Community/Together/TogetherDetailView'
//User
import SignupView from '@/views/User/SignupView'
import LoginView from '@/views/User/LoginView'
import PasswordChangeView from '@/views/User/PasswordChangeView'
import ProfileView from '@/views/User/ProfileView'
//Movie
import ShowMoviesView from '@/views/Movie/ShowMoviesView'
import SelectGenreView from '@/views/Movie/SelectGenreView'
import MovieDetailView from '@/views/Movie/MovieDetailView'
import Modal from '@/components/Modal.vue'
import Content from '@/components/Movie/Content'
//404
import NotFound404 from '@/views/NotFound'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component : LoginView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  // 404 페이지
  {
    path : '/404-not-found',
    name : 'NotFound404',
    component : NotFound404,
  },
  //Forum router
  {
    path: '/forum',
    name: 'ForumView',
    component: ForumView,
  },
  {
    path: '/forum/create',
    name: 'ForumCreateView',
    component: ForumCreateView,
  },
  {
    path: '/forum/update',
    name: 'ForumUpdateView',
    component : ForumUpdateView,
  },
  {
    //추후 path :id로 수정필요
    path: '/forum/:id',
    name: 'ForumDetailView',
    component : ForumDetailView
  },
  //Review
  {
    path: '/review',
    name: 'ReviewView',
    component : ReviewView,
  },
  {
    path: '/review/create/:action',
    name: 'ReviewCreateView',
    component : ReviewCreateView,
  },
  {
    path: '/review/update',
    name: 'ReviewUpdateView',
    component : ReviewUpdateView,
  },
  {
    //추후 path 수정
    path: '/review/:id',
    name: 'ReviewDetailView',
    component : ReviewDetailView,
  },
  //Together
  {
    path: '/together',
    name: 'TogetherView',
    component : TogetherView,
  },
  {
    path: '/together/create',
    name: 'TogetherCreateView',
    component : TogetherCreateView,
  },
  {
    path: '/together/update',
    name: 'TogetherUpdateView',
    component : TogetherUpdateView,
  },
  {//수정
    path: '/together/:id',
    name: 'TogetherDetailView',
    component : TogetherDetailView,
  },
  //user
  {
    path: '/signup',
    name: 'SignupView',
    component : SignupView,
  },
  {
    path: '/passwordchange',
    name: 'PasswordChangeView',
    component : PasswordChangeView,
  },
  {
    path: '/profile/:username',
    name: 'ProfileView',
    component : ProfileView,
  },
  //movie
  {
    path: '/showmovie',
    name: 'ShowMoviesView',
    component : ShowMoviesView,
    children: [
      {
        path: ':movieId',
        component: Modal,
        props: {
          component: Content, 
        }
      }
    ]
  },
  {
    path : '/movieDetail/:movieId',
    name : 'MovieDetailView',
    component : MovieDetailView,
  },
  {
    path: '/selectgenre',
    name: 'SelectGenreView',
    component : SelectGenreView,
  },
  //404
  {
    path : '*',
    redirect : { name : 'NotFound404' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
