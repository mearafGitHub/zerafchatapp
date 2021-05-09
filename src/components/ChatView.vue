<template>
<div class="chats-view">
    <Message
        v-for="{ id, text, userPhotoURL, userName, userId } in messages"
        :key="id"
        :sender="userId === user?.uid"
        :name="userName"
        :photo-url="userPhotoURL"
        :text="text"
    />    
    <div class="chat-fotter" >
      <form v-if="isLogin" @submit.prevent="send">          
        <input v-model="message" class="message-input" placeholder="Write your message here..." required />
        <button class="send-btn" type="submit">
            <SendIcon />
        </button>
     </form>
    </div>
</div>
</template>

<script>
import { ref, watch, nextTick } from 'vue'
import { useAuth, useChat } from '@/firebase'

import SendIcon from './SendIcon.vue'
import Message from './Message.vue'

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
  }
}
</script>
<style scoped>

.messager{
    justify-content: center;
    display: flex;
    align-items: center;
    max-width: 30rem;
    padding: 10rem;
    background-attachment: fixed
}
.send-btn{
    width: 4rem;
    appearance: none;
    border: none;
    outline: none;
    background: none;

    display: block;
    padding: 10px 15px;
    border-radius: 0px 8px 8px 0px;

    background-color: #ea526f;

    color: #FFF;
    font-size: 18px;
    font-weight: 700;
}
.message-input{
    flex: 1 1 100%;

    appearance: none;
    border: none;
    outline: none;
    background: none;

    display: block;
    width: 100%;
    padding: 10px 15px;
    border-radius: 8px 0px 0px 8px;
    
    color: #333;
    font-size: 18px;

    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    background-color: #F3F3F3;

    transition: 0.4s;

    
}
.chat-view{
    border-radius: 24px 24px 0px 0px;
    background-color: #FFF;
    box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
    flex: 1 1 100%;
    padding: 30px;
    margin: 20rem;
}

form{
    display: flex;
    max-width: 40rem;
    margin-bottom: 25px;
}
.chat-footer{
    position: sticky;
    bottom: 0px;
    background-color: #FFF;
    padding: 30px;
    box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
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