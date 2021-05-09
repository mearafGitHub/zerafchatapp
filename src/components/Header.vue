<template>
  <nav>
    <div>
      <h1>Zeraf Dev Chat</h1>

      <div v-if="isLogin" class="logout">
        <Avatar :src="user.photoURL" />
        <button class="logout" @click="signOut">
          Sign Out
        </button>
      </div>

      <button v-else class="logout" @click="signIn">
        Sign in
      </button>
    </div>
  </nav>
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