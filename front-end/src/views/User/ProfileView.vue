<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <ProfileInfo
          :nickname="userProfile?.nickname"
          :username="userProfile?.username"
          />
          <div class="container">
            <button @click="select('forum')"   class="Btn purple col-5 m-2">좋아요한 포럼</button>
            <button @click="select('review')"  class="Btn purple col-5 m-2">좋아요한 리뷰</button>
            <button @click="select('together')"  class="Btn purple col-5 m-2">좋아요한 구해</button>
            <button @click="select('movie')" class="Btn purple col-5 m-2">좋아요한 영화</button>
          </div>
            
        </div>
        <div class="col-8">
          <span v-if="sel === 'forum'">
            <ProfileLikeForum
            :user-likes-forums="userLikesForums"
            />   
          </span>
          <span v-else-if=" sel === 'review'">
            <ProfileLikeReview
            :user-likes-reviews="userLikesReviews"
            />
          </span>
          <span v-else-if="sel === 'together'">
            <ProfileLikeTogether
            :user-likes-togethers="userLikesTogethers"
            />
          </span>
          <span v-else>
            <ProfileLikeMovie
            :user-likes-movies="userLikesMovies"
            />
          </span>
        </div>
      </div>
    </div>
    

  </div>
</template>

<script>
import ProfileInfo from '@/components/Profile/ProfileInfo'
import ProfileLikeMovie from '@/components/Profile/ProfileLikeMovie'
import ProfileLikeForum from '@/components/Profile/ProfileLikeForum'
import ProfileLikeReview from '@/components/Profile/ProfileLikeReview'
import ProfileLikeTogether from '@/components/Profile/ProfileLikeTogether'
export default {
  name : 'ProfileView',
  data() {
    return {
      sel : 'movie',
    }
  },
  components : {
    ProfileInfo,
    ProfileLikeTogether,
    ProfileLikeReview,
    ProfileLikeForum,
    ProfileLikeMovie,
  },
  created() {
    this.$store.dispatch('customGetUserInfo',this.$route.params.username)
    this.$store.dispatch('userLikesForums', this.$route.params.username)
    this.$store.dispatch('userLikesReviews', this.$route.params.username)
    this.$store.dispatch('userLikesTogethers', this.$route.params.username)
    this.$store.dispatch('userLikesMovies', this.$route.params.username)
  },
  computed : {
    userProfile() {
      return this.$store.getters.userProfile
    },
    userLikesForums() {
      return this.$store.getters.userLikesForums
    },
    userLikesReviews() {
      return this.$store.getters.userLikesReviews
    },
    userLikesTogethers() {
      return this.$store.getters.userLikesTogethers
    },
    userLikesMovies() {
      return this.$store.getters.userLikesMovies
    },
    user() {
      return this.$store.getters.user
    },
    
  },
  methods : {
    select(data) {
      console.log(data)
      this.sel = data
    }
  },
}
</script>

<style>
.Btn.purple {box-shadow:0px 4px 0px #AD83A8;}
.Btn.purple:active {box-shadow: 0 0 #BA8CB5; background-color: #BA8CB5;}

.Btn {
  background: rgba(27,188,194,1);
  background: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(27,188,194,1)), to(rgba(24,163,168,1)));
  background: -webkit-linear-gradient(rgba(27,188,194,1) 0%, rgba(24,163,168,1) 100%);
  background: -moz-linear-gradient(rgba(27,188,194,1) 0%, rgba(24,163,168,1) 100%);
  background: -o-linear-gradient(rgba(27,188,194,1) 0%, rgba(24,163,168,1) 100%);
  background: linear-gradient(rgba(27,188,194,1) 0%, rgba(24,163,168,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1bbcc2', endColorstr='#18a3a8', GradientType=0);
  text-decoration: none;
  color: white;
  padding: 10px 30px;
  display: inline-block;
  position: relative;
  border: 1px solid rgba(0,0,0,0.21);
  border-bottom: 4px solid rgba(0,0,0,0.21);
  border-radius: 4px;
  text-shadow: 0 1px 0 rgba(0,0,0,0.15);
/* position: relative;
  border: 0;
  padding: 15px 25px;
  display: inline-block;
  text-align: center;
  color: white; */
}
.Btn:active {
  top: 4px; 
}
</style>