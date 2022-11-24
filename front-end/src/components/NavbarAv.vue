<template>
<div class="box" style="background-color:white;">
  <img  class="profiless" alt="Avatar" :src="avatar">
</div>
  
</template>

<script>
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-identicon-sprites';
export default {
  name : 'ProfileAv',
  props : {
    username : String,
  },
  computed: {
    avatar(){
      return createAvatar(style, {
        dataUri: true,
        size: 32,
        translateX:0,
        translateY:0,
        seed: this.username,
     });
    },
  },
}
</script>

<style scoped>
.box {
    width: 32px;
    height: 32px; 
    border-radius: 70%;
    overflow: hidden;
    position : absolute;
    top: 11px;
    right: 4px;
}
.profiless {
  object-fit: cover;
}
</style>