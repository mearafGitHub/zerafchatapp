<template>
  <div class="big-container">
  <div class="chat-view">
    <div class="show-message">
      <div class="show">
        <Message @click="deleteMessage(id)"
        v-for="{ id, text, userPhotoURL, userName, userId } in messages"
        :key="id"
        :sender="userId === user?.uid"
        :name="userName"
        :photo-url="userPhotoURL"
        :text="text"
      />
      </div>
    </div>
       
    <div class="separator"></div>
    <div class="chat-footer" >
      <form v-if="isLoggedin" @submit.prevent="send">          
        <input type="text" v-model="message" class="message-input" placeholder="Write your message here..." required />
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
import { deleteMsg, authMtd, chatMtd } from '@/firebase'
import SendIcon from './SendIcon.vue'
import Message from './Message.vue'

export default {
  components: { Message, SendIcon },
  setup() {
    const { user, isLoggedin } = authMtd()
    const { messages, sendMessage } = chatMtd()

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
    return { user, isLoggedin, messages, bottom, message, send }
  },
  methods:{
    deleteMessage(messageId){
      if(confirm('Do you want to delete this messsage?')){
        alert(messageId)
        deleteMsg(messageId)
      }
      
    }
  }
}
</script>
<style scoped>

.big-container{
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  padding: 0;
}
.send-btn{
    width: 3.3rem;
    height: 3.0rem;
    margin-top: 0.5%;
    margin-bottom: 0.5%;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    display: block;
    padding: 10px 12px;
    border-radius: 50%;
    background-color: lightslategray;
    color: white;
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
  font-weight: 500;
  line-height: 1.2px;
  padding: 0px 29px;
  color: #222;
  font-size: 16px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  background-color: #D8E2DC;
  transition: 0.3s;
  border-radius: 999px;
}
.chat-view{
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: block;
  border-radius: 25px;
  box-shadow: 1px 1px 12px rgba(100, 100, 100, 0.2);
  width: 60%;
  height:89vh;
  padding-top: 1%;
  padding-bottom: 0.63%;
  background-color: white;
}
.show-message{
  width: 100%;
  height: 91.3%;
  overflow-x: hidden;
  overflow-y: scroll;
}
.sepa{
  margin-bottom: 1%;
  padding:12px;
  background-color: transparent;
}
form{
    display: flex;
    margin-top:12px;
    background-color: transparent;
}
.chat-footer{
    background-attachment: fixed;
    justify-content: center;
    z-index: 20px;
    position: sticky;
    width: 100%;
    width: 100%;
    margin-bottom: 25px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    background-color: #D8E2DC;
    transition: 0.3s;
    border-radius: 999px;
    
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