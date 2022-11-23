<template>
  <div>
    <span>
      <label for="">제목</label>
      <router-link :to="{ name : 'ForumDetailView', params : { id : forum.id} }"><h3>{{forum.title}}</h3></router-link>
    </span>

    <span>
      <label for="">작성자</label>
      <router-link :to="{ name : 'ProfileView', params : { username : forum.username} }"><p>{{forum.nickname}}</p></router-link>
    </span>
    <hr>
  </div>

  <!-- <tr>
    <td>3</td>
    <th>
      <a href="#!">[공지사항] 개인정보 처리방침 변경안내처리방침</a>
      <p>테스트</p>
    </th>
    <td>2017.07.13</td>
</tr> -->
</template>

<script>
export default {
  name : 'ForumListItem',
  props : {
    forum : Object,
  }
}
</script>

<style>
.forumListContainer{
  display: inline-block;
}
</style>