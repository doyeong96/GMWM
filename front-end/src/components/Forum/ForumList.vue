<template>
  <div>
    <h2>ForumList</h2>
    <ForumListItem
    v-for ="forum in Forums" :key="forum.id"
    :forum="forum"
    />
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
      console.log(this.$store.state.forums);
      return this.$store.state.forums
    }
  },


}
</script>

<style>

</style>