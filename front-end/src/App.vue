<template>
  <div id="app">
    <nav id="navBar" class="navbar navbar-expand-md justify-content-end">
      <div class="container-fluid">
        <span id="navspan" class="navbar-brand"><router-link :to="{name :'ShowMoviesView'}"><img id="navImg" src="@/assets/nav.png" alt="logo"></router-link></span>
        <div>
        <router-link to="/home">Home</router-link> |
        <router-link :to="{name :'ShowMoviesView'}">Movie</router-link> |
        <router-link :to="{name :'SelectGenreView'}">Genre</router-link> |
        <router-link :to="{name :'ForumView'}">Forum</router-link> |
        <router-link :to="{name :'ReviewView'}">Review</router-link> |
        <router-link :to="{name :'TogetherView'}">Together</router-link> |
        <span v-if="!isLogin">
        <router-link :to="{name :'SignupView'}">Signup</router-link> |
        <router-link :to="{name :'LoginView'}">Login</router-link> | 
        </span>
        <span v-if="isLogin">
          <div class="dropdown">
            <span  type="button" class="dropbtn">
                <NavbarAv
                :username="userNow.username"
                />
            </span>
            <div class="dropdown-content">
              
              <a :href="`http://localhost:8080/profile/${userNow?.username}/`">Profile</a>
              
              <router-link  :to="{name :'PasswordChangeView'}">Passwordchange</router-link> 
              <a href="" style="color : red;" @click.prevent="Withdrawal">회원탈퇴</a>
              <a href="" @click.prevent="Logout">Logout</a>
            </div>
          </div>
        </span>
        <span v-else class="ifans">
        </span>
        </div>
      </div>

    </nav>
    <router-view/>
    <portal-target name="modal" />
  </div>
</template>
<script>
import NavbarAv from '@/components/NavbarAv'

export default {
  methods : {
    Logout() { this.$store.dispatch('logout')},
    Withdrawal() {
      this.$store.dispatch('withDrawal')
    },
  },
  components : {
    NavbarAv,
  },
  computed : {
      isLogin() {
        return this.$store.getters.isLogin
      },
      userNow() {
        return this.$store.getters.userNow
      },
    },
}
</script>
<style>

#app {
  font-family: 'Nanum Gothic Coding', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* background: linear-gradient(#292929 , #141414); */
}
a:visited {
  color :  #EBEBEB;;
}
#navImg {
  width: 50px;
  height: 50px;
}

nav {
  padding: 30px;
  background-color: #292929;
  /* background: linear-gradient(45deg, #141414, #292929); */
  /* margin-bottom: 20px;/ */
}

/* .home {
  background: linear-gradient(#292929 , #141414);
} */
nav a {
  font-weight: bold;
  color:rgba(166, 38, 57, 0.5);
}

nav a.router-link-exact-active {
  color: #A62639;
}
#navspan {
  width: 50px;
  height: 50px;
}

#navspan > img {
  width: 50px;
  height: 50px;
}

/* #navBar {
  background:rgba(20, 20, 20);
  margin-bottom: 20px;
} */

.ifans {
  
  display: inline-block;

}
.dropbtn {
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;  
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 5;
  right : -11px;
  top : 43px;
  
  
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}


</style>
