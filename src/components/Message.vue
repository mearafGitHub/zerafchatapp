<template>
  <div class="message-container">
    <div class="flex" :class="sender ? 'current-user' : 'other-user'">
       <div class="avata-col">
            <Avatar class="image" :src="photoUrl" />
       </div>
        <div class="text-col">
            <span class="username" v-if="!sender">{{ name }}</span>
            <div class="message-text" :class="sender ? 'right-side' : 'left-side'">
            {{text}}
        </div>
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
.right-side{
    background-color:pink;
}
.left-side{
    background-color: lightblue;
    padding-top: 2%;
    padding-bottom: 2%;
}
.other-user{
    padding-right: 5%;
}
.message-text{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16;
    margin-top: 5%;
    display: inline-block;
    border-radius: 999px;
    color: #333;
    font-size: 18px;
    line-height: 1.2rem;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 5%;
    padding-right: 5%;
    max-width: 75%;
}
.username {
    color: lightslategray;
    font-size: 16px;
    margin-bottom: 1%;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: center;
}
.current-user {
    padding-left: 5%;
    padding-right: 5%;
    justify-content: right;
	text-align: right;
    direction: reverse;
}
.message-container {
    background-attachment: fixed;
    border-radius: 999px;
    width: 100%;
    padding: 0.02rem;
    margin: 2%;
 }

</style>