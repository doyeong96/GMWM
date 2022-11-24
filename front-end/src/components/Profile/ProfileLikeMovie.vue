<template>
  <div>
    <div class="container">
      <h2 class="title">
        <span class="title-word title-word-1">좋아</span>
        <span class="title-word title-word-2">요</span>
        <span class="title-word title-word-3">한 </span>
        <span class="title-word title-word-4">영화</span>
      </h2>
    </div>
    <div v-for="likesMovie in  userLikesMovies" :key="likesMovie.id" style="width: 330px; display:inline-block;">
        <div class="card mx-2 my-2">
          
          <div class="card-body">
            <img :src="`https://image.tmdb.org/t/p/w500${likesMovie.poster_path}`" style="width: 280px; height:400px;" alt="">
          </div>

          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <a :href="`http://localhost:8080/movieDetail/${likesMovie?.id}`"> {{likesMovie.title}}</a>
            </li>
          </ul>
          
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name : 'ProfileLikeMovie',
  props : {
    userLikesMovies : Array,
  }
}
</script>

<style scoped>
.title-word {
  animation: color-animation 4s linear infinite;
}

.title-word-1 {
  --color-1: #DF8453;
  --color-2: #3D8DAE;
  --color-3: #E4A9A8;
}

.title-word-2 {
  --color-1: #DBAD4A;
  --color-2: #ACCFCB;
  --color-3: #17494D;
}

.title-word-3 {
  --color-1: #ACCFCB;
  --color-2: #E4A9A8;
  --color-3: #ACCFCB;
}

.title-word-4 {
  --color-1: #3D8DAE;
  --color-2: #DF8453;
  --color-3: #E4A9A8;
}

@keyframes color-animation {
  0%    {color: var(--color-1)}
  32%   {color: var(--color-1)}
  33%   {color: var(--color-2)}
  65%   {color: var(--color-2)}
  66%   {color: var(--color-3)}
  99%   {color: var(--color-3)}
  100%  {color: var(--color-1)}
}

/* Here are just some visual styles. 🖌 */

.container {
  display: grid;
}

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 40px;
  text-transform: uppercase;
}
</style>
</style>