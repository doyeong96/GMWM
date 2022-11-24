<template>
  <li>
    {{togetherComment.nickname}} : {{togetherComment.content}}
    <button  class="createBtn" v-if="!isUpdate" @click="updateTogetherComment">수정</button>
    <div v-if="isUpdate">
      <TogetherCommentUpdateForm
      :comment-all="togetherComment"
      />
    </div>
    <button class="deleteBtn mx-2" v-if="!isUpdate" @click="deleteTogetherComment">삭제</button>
  </li>
</template>

<script>
import TogetherCommentUpdateForm from './TogetherCommentUpdateForm.vue'

export default {
 name: 'TogetherCommentItem',
 data() {
  return {
    isUpdate : false,
  }
 },
 components : {
  TogetherCommentUpdateForm,
 },
 props : {
  togetherComment : Object, 
},
 methods : {
  deleteTogetherComment() {
    this.$store.dispatch('deleteTogetherComment',this.togetherComment.id)
  },
  updateTogetherComment() {
    this.isUpdate = !this.isUpdate
  }
 }
}
</script>

<style>

</style>