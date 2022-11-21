<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ProfileAv/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileAv from '@/components/ProfileAv'
export default {
  name: 'HomeView',
  components: {
   ProfileAv,
  }
}
</script>
