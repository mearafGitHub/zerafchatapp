<template>
  <div class="message-container">
    <div class="flex" :class="sender ? 'current-user' : 'message'">
        <span class="username" v-if="!sender">{{ name }}</span>
        <Avatar class="image" :src="photoUrl" />
        <div class="message-text" :class="sender ? 'right-side' : 'left-side'">
            {{text}}
        </div>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar.vue'
export default {
  components: { Avatar },
  props: {
    name: { type: String, default: '' },
    photoUrl: { type: String, default: '' },
    sender: { type: Boolean, default: false },
    text: {type: String, default:''}
  }
}
</script>
<style scoped>

.message {
    margin-bottom: 25px;
    display: inline-block;
    padding: 10px 20px;
    background-color: #F3F3F3;
    border-radius: 999px;
    color: #333;
    margin-top: 15px;
    font-size: 18px;
    line-height: 1.2em;
    text-align: left;
}
.message-text{
   
}
.username {
    color: #888;
    font-size: 16px;
    margin-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: center;
}

.current-user {
    margin-top: 35px;
    text-align: right;
    margin-bottom: 25px;
    color: black;
    background-color:lightgray;	
    display: inline-block;
    padding: 10px 20px;
    background-color: #F3F3F3;
    border-radius: 999px;
    color: #333;
    font-size: 18px;
    line-height: 1.2em;
}

.message-container {
    max-width: 40%;
    background-attachment: fixed;
    border-radius: 5rem;
 }

</style>