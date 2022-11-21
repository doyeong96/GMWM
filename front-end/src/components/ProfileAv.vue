<template>
  <img alt="Avatar" :src="avatar">
</template>

<script>
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-identicon-sprites';
export default {
  name : 'ProfileAv',
  computed: {
    avatar(){
      return createAvatar(style, {
        dataUri: true,
        size: 128,
        seed: this.user.username,
     });
    },
    user() {
      return this.$store.getters.user
    }
  },
}
</script>

<style>

</style>