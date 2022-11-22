<template>
  <div>
    <h2>ForumDetailView</h2>
    {{forum.title}}
    <router-link :to="{ name : 'ForumUpdateView' }">UPDATE</router-link> <br>
    <p>좋아요 누른 사람 : {{likeUsers}} </p>
    <div v-if="forum.like_users.includes(user.pk)">
      <button @click="likesForum">좋아요 취소</button>
      
    </div>
    <div v-else>
      <button @click="likesForum">좋아요</button>
    </div>
    <button @click="deleteForum">삭제</button>
    <ForumComment
    :forum-comments="forum.forumcomment_set"
    :forum-id="forum.id"
    />
  </div>
</template>

<script>
import ForumComment from '@/components/Forum/ForumComment'

export default {
  name : 'ForumDetailView',
  components : {
    ForumComment,
  },
  created() {
    this.$store.dispatch('getForumDetail', this.$route.params.id)
  },
  computed : {
    forum() {
      return this.$store.getters.forum
    },
    user() {
      return this.$store.getters.user
    },
    likeUsers() {
      return (this.forum?.like_users.length)
     
    },
  },
  methods : {
    deleteForum() {
      this.$store.dispatch('deleteForum', this.forum.id)
    },
    likesForum() {
      this.$store.dispatch('likesForum', this.forum.id)
    }
  }
}
</script>

<style>

</style>