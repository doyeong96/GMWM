<template>
  <div>
    <h2>{{user}}프로파일입니다.</h2>
  </div>
</template>

<script>
export default {
  name : 'ProfileView',
  computed : {
    user() {
      return this.$store.getters.user
    }
  },
  methods : {
    customGetUserInfo() {
      
    },
  },
}
</script>

<style>

</style>