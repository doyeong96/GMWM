<template>
  <li>
    {{togetherComment.nickname}} : {{togetherComment.content}}
    <button @click="deleteTogetherComment">삭제</button>
  </li>
</template>

<script>
export default {
 name: 'TogetherCommentItem',
 props : {
  togetherComment : Object, 
},
 methods : {
  deleteTogetherComment() {
    this.$store.dispatch('deleteTogetherComment',this.togetherComment.id)
  }
 }
}
</script>

<style>

</style>