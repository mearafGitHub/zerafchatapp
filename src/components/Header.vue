<template>
  <div class="all">
    <div v-if="isLogin"  class="nav">
      <div class="nav">
        <h1 class="app-name">Zeraf Dev Chat</h1>
        <Avatar :src="user.photoURL" />
        <button class="logout-btn" @click="signOut">
          Sign Out
        </button>
      </div>
      </div>
      <div v-else class="page">
        <h1 class="app-name">Zeraf Dev Chat</h1>
         <button class="login-btn" @click="signIn">
            Sign in
        </button>
      </div>
  </div>
</template>

<script>
import Avatar from './Avatar.vue'
import { useAuth } from '@/firebase'

export default {
  components: { Avatar },
  setup() {
    const { user, isLogin, signOut, signIn } = useAuth()
    return { user, isLogin, signOut, signIn }
  }
}
</script>
<style scoped>
.app-name{
  padding-right: 2.5rem;
  color: black;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}
.all{
  width: 100%;
  height: auto;
}
.page{
  padding: 3rem;
  width: 100%;
  min-height: 100%;
  background-attachment: fixed;
  background-color: tomato;
}

.login-btn{
  margin: 2.5rem;
  background-color: tomato;
  color: white;
  text-justify: right;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: solid 0.1rem white;
  padding: 1rem;
  border-radius: 10%;
}
.logout-btn{
  margin: 2.5rem;
  background-color: tomato;
  color: white;
  text-justify: right;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: solid 0.1rem white;
  padding: 1rem;
  border-radius: 10%;
}
.nav{
  background-attachment: fixed;
  background-color: tomato;
  padding: 1rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

</style>