<template>
  <div>
    <h2>ForumComment</h2>
    <ForumCommentItem
    v-for=" forumComment in forumComments" :key="forumComment.id"
    :forum-comment="forumComment"
    />
  </div>
</template>

<script>
import ForumCommentItem from '@/components/Forum/ForumCommentItem'

export default {
  name : 'ForumComment',
  props : {
    forumComments : Array
  },
  components : {
    ForumCommentItem,
  }
}
</script>

<style>

</style>