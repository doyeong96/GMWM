<template>
  <div>
    <!-- <router-link :to="{ name : 'ReviewDetailView', params : { id : review.id} }"><h3>{{review.title}}</h3></router-link> -->
    <a :href="`http://localhost:8080/review/${review.id}/`">{{ review.title }}</a>
    <p>{{ review.nickname }}</p>
    
  </div>
</template>

<script>


export default {
  name : 'ReviewListItem',
  props : {
    review : Object,
  }
}
</script>

<style>

</style>