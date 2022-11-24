<template>
  <div>
    <div class="container">
      <h2 class="title">
        <span class="title-word title-word-1">좋아</span>
        <span class="title-word title-word-2">요</span>
        <span class="title-word title-word-3">한 자</span>
        <span class="title-word title-word-4">유글</span>
      </h2>
    </div>
    <ul class="list-group" v-for="(forum,idxForum) in userLikesForums" :key="idxForum">
      <li class="list-group-item"><router-link :to="{ name : 'ForumDetailView', params : { id : forum.id} }">{{forum.title}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
 name : 'ProfileLikeForum',
 props : {
  userLikesForums : Array,
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