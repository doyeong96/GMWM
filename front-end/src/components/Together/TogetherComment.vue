<template>
  <div>
    <h2>TogetherComment</h2>
    <TogetherCommentItem
    v-for="togethercomment in togetherComments" :key="togethercomment.id"
    :together-comment="togethercomment"
    />
  </div>
</template>

<script>
import TogetherCommentItem from '@/components/Together/TogetherCommentItem.vue'

export default {
  name : 'TogetherComment',
  components : {
    TogetherCommentItem,
  },
  props : {
    togetherComments : Array,
  }
}
</script>

<style>

</style>