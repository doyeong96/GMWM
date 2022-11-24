<template>
  <div>
    <h2 >{{nickname}} 프로필</h2>
    <div>
    <ProfileAv
    :username="username"
    />
    </div>
  </div>
</template>

<script>
import ProfileAv from '@/components/Profile/ProfileAv'
export default {
  name : 'ProfileInfo',
  components : {
    ProfileAv,
  },
  props : {
    nickname : String,
    username : String,
  }
}
</script>

<style scoped>

</style>