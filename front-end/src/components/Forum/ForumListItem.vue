<template>
  <div>
    <router-link :to="{ name : 'ForumDetailView', params : { id : forum.id} }"><h3>{{forum.title}}</h3></router-link>
    <router-link :to="{ name : 'ProfileView', params : { username : forum.username} }"><p>{{forum.nickname}}</p>
    </router-link>
   
  </div>
</template>

<script>
export default {
  name : 'ForumListItem',
  props : {
    forum : Object,
  }
}
</script>

<style>

</style>