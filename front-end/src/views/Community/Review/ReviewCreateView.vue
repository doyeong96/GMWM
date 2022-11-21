<template>
  <div>
    <h2>ReviewCreateView</h2>
    <ReviewForm
    :Review="Review" action="create"
    />
  </div>
</template>

<script>
import ReviewForm from '@/components/Review/ReviewForm'

export default {
  name : 'ReviewCreateView',
  components : {
    ReviewForm,
  },
  data() {
    return {
      Review : {id:null, title :'',review:'',movie_title:null,poster_path:null,score:null,}
    }
  }
}

</script>

<style>

</style>