<template>
  <div>
    <h2>TogetherForm</h2>
    <form @submit.prevent="createTogether">
      <label for="title">title</label>
      <input id='title' type="text" v-model="title">

      <label for="content">content</label>
      <input id='content' type="text" v-model="content">
      
      <!-- 추후에는 컴포넌트 넣어서 주소 검색하면 위도 경도 나올 수 있게 -->
      <!-- const coords = new kakao.maps.LatLng(result[0].y, result[0].x); -->
      <label for="map_lat">map_lat</label>
      <input id='map_lat' type="text" v-model="map_lat">

      <label for="map_lng">map_lng</label>
      <input id='map_lng' type="text" v-model="map_lng">

      <label for="endtime">endtime</label>
      <input id='endtime' type="datetime-local" v-model="endtime">

      <input type="submit">
    </form>
  </div>
</template>

<script>
export default {
  name : 'TogetherForm',
  data(){
    return {
      title : null,
      content : null,
      map_lat : 36.3553193257957,
      map_lng : 127.29820111515,
      endtime : null
    }
  },
  methods : {
    createTogether(){
      const title = this.title
      const content = this.content
      const map_lat = this.map_lat
      const map_lng = this.map_lng
      const endtime = this.endtime

      const payload = {
        title, content, map_lat, map_lng, endtime
      }

      this.$store.dispatch('createTogether', payload)

    }
  }
}
</script>

<style>

</style>