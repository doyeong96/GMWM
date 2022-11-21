<template>
  <div>
    <h2>{{userProfile.nickname}}님의 프로파일입니다.</h2>
    <ProfileAv
    :username="userProfile.username"
    />
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
  },
  computed : {
    userProfile() {
      return this.$store.getters.userProfile
    }
  },
}
</script>

<style>

</style>