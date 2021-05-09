<template>
  <div class="mlogin-div" v-if="isLogin">
      <Header />
  </div>
  <div class="chat" v-else>
    <Header />
  </div>
</template>

<script>
import { useAuth } from '@/firebase'
import Header from './components/Header'
export default {
  name: 'App',
  components:{
    Header
  },
  setup() {
    const { user, isLogin, signOut, signIn } = useAuth()
    return { user, isLogin, signOut, signIn }
  }
}
</script>

<style >
* {
	font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.login-div{
  background-color:black;
  min-height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
}

	
</style>