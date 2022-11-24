<template>
  <li>
    {{forumComment.nickname}} : {{forumComment.content}}
    <button  class="createBtn" v-if="!isUpdate" @click="updateForumComment">수정</button>
    <div v-if="isUpdate">
      <ForumCommentUpdateForm
      :comment-all="forumComment"
      />
    </div>
    <button class="deleteBtn mx-2" v-if="!isUpdate" @click="deleteFourmComment">삭제</button>
    
  </li>
</template>

<script>
import ForumCommentUpdateForm from './ForumCommentUpdateForm.vue'

export default {
 name : 'ForumCommentItem',
 data() {
  return {
    isUpdate : false,
  }
 },
 components : {
  ForumCommentUpdateForm,
 },
 props : {
  forumComment : Object,
 },
 methods : {
  deleteFourmComment() {
    this.$store.dispatch('deleteFourmComment', this.forumComment.id)
  },
  updateForumComment() {
    this.isUpdate = !this.isUpdate
  }
 }
}
</script>

<style>
.deleteBtn {
  
  background: rgba(250,90,90,1);
  background: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(250,90,90,1)), to(rgba(232,81,81,1)));
  background: -webkit-linear-gradient(rgba(250,90,90,1) 0%, rgba(232,81,81,1) 100%);
  background: -moz-linear-gradient(rgba(250,90,90,1) 0%, rgba(232,81,81,1) 100%);
  background: -o-linear-gradient(rgba(250,90,90,1) 0%, rgba(232,81,81,1) 100%);
  background: linear-gradient(rgba(250,90,90,1) 0%, rgba(232,81,81,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fa5a5a', endColorstr='#e85151', GradientType=0 );
  color: white;
  display: inline-block;
  position: relative;
  text-shadow: rgba(0, 0, 0, 0.15) 0px 1px 0px;
  text-decoration: none;
  padding: 10px 30px;
  border-width: 1px 1px 4px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.21);
  border-image: initial;
  border-bottom: 4px solid rgba(0, 0, 0, 0.21);
  border-radius: 4px;
  font-size: 12px;
  padding: 4px 12px;
}
</style>