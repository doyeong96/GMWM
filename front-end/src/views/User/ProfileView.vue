<template>
  <div>
    <h2>{{userProfile.nickname}}님의 프로파일입니다.</h2>
    <ProfileAv
    :username="userProfile.username"
    />
    <p>좋아요한 자유글</p>
    <div v-for="(forum,idxForum) in userLikesForums" :key="idxForum">
      {{forum.title}}
    </div>
    <p>좋아요한  리뷰글</p>
    <div v-for="(review,idxReview) in userLikesReviews" :key="idxReview+'l'">
      {{review.title}}
    </div>
    <p>좋아요한 구해요글</p>
    <div v-for="(together,idxTogether) in userLikesTogethers" :key="idxTogether+'r'">
      {{together.title}}
    </div>
    <p>좋아요한 영화</p>
    <div v-for="(movie,idxMovie) in userLikesMovies" :key="idxMovie+'c'">
      {{movie.title}}
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="">
    </div>

  </div>
</template>

<script>
import ProfileAv from '@/components/ProfileAv'
export default {
  name : 'ProfileView',
  components : {
    ProfileAv,
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
    
  },
}
</script>

<style>

</style>