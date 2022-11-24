<template>
  <div>
    <ul class="commentItem">
      <TogetherCommentItem
      v-for="togethercomment in togetherComments" :key="togethercomment.id"
      :together-comment="togethercomment"
      />
    </ul>
    <div class="mt-5">
      <TogetherCommentForm
      :together-id="togetherId"
      />
    </div>
  </div>
</template>

<script>
import TogetherCommentItem from '@/components/Together/TogetherCommentItem.vue'
import TogetherCommentForm from '@/components/Together/TogetherCommentForm'

export default {
  name : 'TogetherComment',
  components : {
    TogetherCommentItem,
    TogetherCommentForm,
  },
  props : {
    togetherComments : Array,
    togetherId : Number,
  }
}
</script>

<style scoped>
.commentItem{
  display: flex!important;
  flex-direction: column;
  align-items: flex-start;
}
</style>