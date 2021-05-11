<template>
  <div class="big-container">
  <div class="chat-view">
    <div class="show-message">
      <Message
        v-for="{ id, text, userPhotoURL, userName, userId } in messages"
        :key="id"
        :sender="userId === user?.uid"
        :name="userName"
        :photo-url="userPhotoURL"
        :text="text"
      />
    </div>
       
    <div class="spacer"></div>
    <div class="chat-footer" >
      <form v-if="isLogin" @submit.prevent="send">          
        <input type="text-area" v-model="message" class="message-input" placeholder="Write your message here..." required />
        <button class="send-btn" type="submit">
            <SendIcon />
        </button>
     </form>
    </div>
</div>
</div>
</template>

<script>
import { ref, watch, nextTick } from 'vue'
import { useAuth, useChat } from '@/firebase'
import SendIcon from './SendIcon.vue'
import Message from './Message.vue'
//import ScrollableContainer from 'vue-scrollable-container';

export default {
  components: { Message, SendIcon },
  setup() {
    const { user, isLogin } = useAuth()
    const { messages, sendMessage } = useChat()

    const bottom = ref(null)
    watch(
      messages,
      () => {
        nextTick(() => {
          bottom.value?.scrollIntoView({ behavior: 'smooth' })
        })
      },
      { deep: true }
    )
    const message = ref('')
    const send = () => {
      sendMessage(message.value)
      message.value = ''
    }
    return { user, isLogin, messages, bottom, message, send }
  },
  methods:{
    
  }
}
</script>
<style scoped>

.big-container{
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
}
.send-btn{
    width: 3.5rem;
    height: 3rem;
    margin: 0.5%;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    display: block;
    padding: 10px 15px;
    border-radius: 50%;
    background-color: white;
    color: lightslategray;
}
.message-input{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  flex: 1 1 100%;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2px;
  padding: 0px 29px;
  color: #222;
  font-size: 16px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  background-color: white;
  transition: 0.3s;
  border-radius: 999px;
}
.chat-view{
  align-items: center;
  justify-content: center;
  display: block;
  border-radius: 25px;
  box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
  
  border: solid 0.3rem lightslategray;
  width: 60%;
  height:85vh;
  background-attachment: fixed;
  background-color: lightslategray;
}
div.show-message{
  width: 100%;
  height: 90%;
  overflow-x: hidden;
  overflow-y: auto;
}
form{
    display: flex;
    max-width: 100%;
    margin-bottom: 25px;
}
.chat-footer{
    background-attachment: fixed;
    justify-content: center;
    z-index: 20px;
    position: sticky;
    width: 100%;
}
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-600;
  @apply shadow-lg;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300;
  @apply rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-200;
}
</style>