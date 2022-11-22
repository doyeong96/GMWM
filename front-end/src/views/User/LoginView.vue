<template>
  <div id="whole">
    <div id="loginContainer" class="">
      <h1 id="loginTitle">로그인 하셈</h1>
      <form @submit.prevent="login">
          <!-- <label for="username">username : </label> -->
          <span>
            <input placeholder='username' type="text" id="username" v-model="username"><br>
          </span>

          <!-- <label for="password"> password : </label> -->
          <span>
            <input placeholder='password' type="password" id="password" v-model="password"><br>
          </span>


          <button type="submit" id="logInButton">로그인</button>
          <!-- <input type="submit" value="logIn"> -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    login() {
      const username = this.username
      const password = this.password

      const payload = {
        username: username,
        password: password,
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style scoped>
#whole{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/userpage (4).jpg');
  background-size: cover;
}
#loginContainer{
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  width: 440px;
  padding: 70px;
  background-color: #02111B;
  opacity: 0.9;
  border-radius: 30px;
}
#logInButton{
  width: 300px;
  height: 50px;
  margin-top: 10px;
  border-radius: 10px;
  font-size: large;
  background-color: #710627;
}

#password,
#username{
  width: 300px;
  height: 50px;
  margin-top: 10px;
  border-radius: 10px;
  font-size: large;
  background-color: #A7A7A9;
}


#loginTitle{
  padding-bottom: 35px;
  color: white;
}
</style>