<template>
  <div>
    <ul class="d-flex">
      <li>
        <ForumCommentItem
        v-for=" forumComment in forumComments" :key="forumComment.id"
        :forum-comment="forumComment"
        />
      </li>
    </ul>
    <div class="mt-5">
      <ForumCommentForm
      :forum-id="forumId"
      />
    </div>
  </div>
</template>

<script>
import ForumCommentItem from '@/components/Forum/ForumCommentItem'
import ForumCommentForm from '@/components/Forum/ForumCommentForm'

export default {
  name : 'ForumComment',
  props : {
    forumComments : Array,
    forumId : Number
  },
  components : {
    ForumCommentItem,
    ForumCommentForm,
  }
}
</script>

<style>

</style>