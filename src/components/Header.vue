<template>
  <div class="all">
    <div v-if="isLogin" class="loggedin-cont">
      <div class="nav">
        <h1 class="app-name-login">Zeraf Dev Chat</h1>
        <button class="logout-btn" @click="signOut">
          Log out
        </button>
        <Avatar :src="user.photoURL" />
        </div>
        <div class="chat">
          <ChatView />
        </div>
      </div> 
      <div v-else class="login-page">
        <h1 class="app-name">Zeraf Dev Chat</h1>
        <h4>Login to chat with Zeraf Developers</h4>
         <button class="login-btn" @click="signIn">
            Log In
        </button>
      </div> 
  </div>
</template>

<script>
import Avatar from './Avatar.vue'
import ChatView from './ChatView.vue'
import { useAuth } from '@/firebase'

export default {
  components: { Avatar, ChatView },
  setup() {
    const { user, isLogin, signOut, signIn } = useAuth()
    return { user, isLogin, signOut, signIn }
  }
}
</script>
<style scoped>
.app-name-login{
  padding-right: 2.5rem;
  color: white;
  font-weight: bolder;
  align-items: center;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}
.app-name{
  padding-right: 2.5rem;
  color: white;
  align-items: center;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}
.all{
  background-color: white;
  min-height: 100vh;
}
.login-page{
  padding: 20rem;
  height: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background-attachment: fixed;
  background-color: lightslategray;
} 

.login-btn{
  margin: 2.5rem;
  background-color: lightslategray;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: solid 0.15rem white;
  padding: 1rem;
  border-radius: 25%;
}
.login-btn:hover{
  margin: 2.5rem;
  background-color: white;
  color: lightslategray;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: solid 0.15rem white;
  padding: 1rem;
  border-radius: 25%;
}
.logout-btn{
  margin: 2.5rem;
  background-color: lightslategray;
  color: white;
  text-justify: right;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: solid 0.15rem white;
  padding: 1rem;
  border-radius: 25%;
  float: right;
}
.nav{
  background-attachment: fixed;
  background-color: lightslategray;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>