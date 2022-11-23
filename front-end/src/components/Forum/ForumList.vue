<template>
  <div>
    <h2>ForumList</h2>
    <div class="forumListContainer">
      
    <ForumListItem
    v-for ="forum in Forums" :key="forum.id"
    :forum="forum"
    />
    </div>
  </div>
</template>

<script>
import ForumListItem from '@/components/Forum/ForumListItem'

export default {
  name : 'ForumList',
  components : {
    ForumListItem,
  },
  computed : {
    Forums(){
      return this.$store.getters.forums
    }
  },


}
</script>

<style>
.forumListContainer{
  display: flex;
  flex-direction: column-reverse;
}
</style>