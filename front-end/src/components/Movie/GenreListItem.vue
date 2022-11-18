<template>
  <div>
    {{genre.name}}
  </div>
</template>

<script>
export default {
    name : 'GenreListItem',
    props : {
      genre : Object
    }
}
</script>

<style>

</style>