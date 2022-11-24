<template>
  <div class="reviewContainer">
    <div id="review-container">

      <div id="jb-header">
        <h2>{{ review.title }}</h2>
      </div>

      <div id="review-poster">
        <p>{{review.movie_title}}</p>
        <img class="poster" :src="`https://image.tmdb.org/t/p/w500${review.poster_path}`" alt="">
      </div>

      <div id="review-content">
        <p>{{ review.review }}</p>
      </div>

      <div id="review-statuschange">
        <p>{{ likeUsers }} 명이 좋아합니다 </p>
        <div>
          <span v-if="review.like_users.includes(user.pk)">
            <h2 type="button" @click="likesReview"><img alt="likes" src="@/assets/heart (2).png" style="width:30px; height:30px;"></h2>
            <!-- <button @click="likesReview">좋아요 취소</button> -->
          </span>
          <span v-else>
            <h2 type="button" @click="likesReview"><img alt="likes" src="@/assets/heart (1).png" style="width:30px; height:30px;"></h2>
            <!-- <button @click="likesReview">좋아요</button> -->
          </span>

          <button>
            <span data-bs-toggle="modal" data-bs-target="#reveiwDeleteModal">
              삭제  
            </span>
          </button>
          <router-link :to="{ name : 'ReviewUpdateView'}">UPDATE</router-link> <br>	

      <div class="modal fade" id="reveiwDeleteModal" tabindex="-1" aria-labelledby="reveiwDeleteModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <h3>게시물을 삭제하시겠습니까?</h3>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
              <button class=" btn btn-danger" @click="deleteReview" data-bs-dismiss="modal">삭제</button>
              <!-- <router-link :to="{ name : 'ReviewUpdateView' }">UPDATE</router-link> -->
            </div>
          </div>
        </div>
      </div>

          <!-- <button @click="deleteReview">삭제</button> -->
        </div>
      </div>

    </div>
    <!-- {{review.title}}
    {{review.movie_title}} -->
    <!-- <img :src="`https://image.tmdb.org/t/p/w500${review.poster_path}`" alt=""> -->
    <div id="review-comment">
      <ReviewComment
      :review-comments="review.reviewcomment_set"
      :review-id="review.id"
      />
    </div>
  </div>
</template>

<script>
import ReviewComment from '@/components/Review/ReviewComment'

export default {
  name : 'ReviewDetailView',
  components: {
    ReviewComment,
  },
  created() {
    this.$store.dispatch('getReviewDetail', this.$route.params.id)
  },
  computed : {
    review() {
      return this.$store.getters.review
    },
    user() {
      return this.$store.getters.user
    },
    likeUsers() {
      return (this.review?.like_users.length)
     
    }
  },
  methods : {	
    deleteReview() {	
      this.$store.dispatch('deleteReview', this.review.id)	
    },
    likesReview() {
      this.$store.dispatch('likesReview', this.review.id)
    },
  },
  
}
</script>

<style scoped>
#review-container{
  width: 940px;
  margin: 0px auto;
  padding: 20px;
  /* border: 1px solid #bcbcbc; */
  /* display: none; */
}
#review-poster{
  width: 580px;
  padding: 20px;
  margin-bottom: 20px;
  float: left;
  /* border: 1px solid #bcbcbc; */
}
#review-content{
  width: 260px;
  padding: 20px;
  /* margin-bottom: 20px; */
  margin-top:58px;
  float: right;
  height: 550px;
  border: 1px solid #bcbcbc;
  border-radius: 10px;
}
#review-statuschange{
  width: 260px;
  padding: 20px;
  /* margin-bottom: 20px; */
  margin-top:50px;
  
  float: right;
  /* border: 1px solid #bcbcbc; */
}
#review-comment{
  clear: both;
  padding: 20px;
  /* border: 1px solid #bcbcbc; */
}
#review-header{
  padding: 20px;
  margin-bottom: 20px;
  /* border: 1px solid #bcbcbc; */
}
.reviewContainer{
  height: 500px;
  width: 850px;
  margin-left: auto;
  margin-right: auto ;
  margin-top: 50px ;
}
.poster{
  border-radius: 10px;
}
</style>