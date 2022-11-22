<template>
  <div>    
    <swiper
      class="swiper"
      :options="swiperOption"
  >
      <swiper-slide v-for="bestMovie in bestMovies" :key="bestMovie.id" id="swiperSlid">
          <figure class="hover-img">
            <img id="swiperSlidImg" :src="`https://image.tmdb.org/t/p/w500${bestMovie.poster_path}`" alt="">
              <figcaption >
                <a data-bs-toggle="modal" data-bs-target="#detailModal" :href="`http://localhost:8080/showmovie/${bestMovie.id}/`">{{bestMovie.title}}</a>
              </figcaption>
          </figure>
      </swiper-slide>
          
    </swiper>
    <!-- Modal -->
    <div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="detailModalModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-3" id="detailModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- <MovieDetailView/> -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>

<script>

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import MovieDetailView from '@/views/Movie/MovieDetailView'

export default {
    name : 'MoviesListSwiper',
    components : {
      MovieDetailView,
      Swiper,
      SwiperSlide
    },
    data(){
      return{      
        swiperOption: { 
            effect : 'coverflow',
            grabCursor : "true",
            centeredSlides : "true",
            slidesPerView : 3,
            coverflowEffect : {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            },
            spaceBetween: 10, 
            loop: true, 
        },
      }
    },
    computed : {
      bestMovies(){
        return this.$store.getters.bestMovie
      }
    }
}
</script>

<style scoped>
#swiperSlidImg{
  height: 450px;
  width: 350px;
}
a {
  color: #FCF7FF;
  font-size: 24px;
  font-family: sans-serif;
  font-weight: 400;
}
.hover-img {
  background-color: #000;
  color: rgb(137, 58, 58);
  display: inline-block;
  margin: 8px;
  max-width: 320px;
  min-width: 240px;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%;
}

.hover-img * {
  box-sizing: border-box;
  transition: all 0.45s ease;
}

.hover-img::before,
.hover-img::after {
  background-color: rgba(0, 0, 0, 0.5);
  border-top: 32px solid rgba(0, 0, 0, 0.5);
  border-bottom: 32px solid rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  transition: all 0.3s ease;
  z-index: 1;
  opacity: 0;
  transform: scaleY(2);
}

.hover-img img {
  vertical-align: top;
  max-width: 100%;
  backface-visibility: hidden;
}

.hover-img figcaption {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.1em;
  opacity: 0;
  z-index: 2;
  transition-delay: 0.1s;
  font-size: 24px;
  font-family: sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.hover-img:hover::before,
.hover-img:hover::after {
  transform: scale(1);
  opacity: 1;
}

.hover-img:hover > img {
  opacity: 0.7;
}

.hover-img:hover figcaption {
  opacity: 1;
}
</style>