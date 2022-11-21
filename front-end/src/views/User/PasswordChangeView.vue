<template>
<div>
<h2> 비밀번호 변경</h2>
<form @submit.prevent="passwordChange">
  <label for="password1">변경할 비밀번호 : </label>
  <input type="password" id="password1" v-model="password1">

  <label for="password2">비밀번호 확인   : </label>
  <input type="password" id="password2" v-model="password2">
  <input type="submit" value="제출">
</form>
</div>
  
  
</template>

<script>
export default {
  name : 'PasswordChangeView',
  data() {
    return {
      password1 : null,
      password2 : null,
    }
  },
  methods : {
    passwordChange() {
      const new_password1 = this.password1
      const new_password2 = this.password2
      const payload = {
        new_password1,new_password2
      }
      this.$store.dispatch('passwordChange', payload)
    }
  }
}
</script>

<style>

</style>