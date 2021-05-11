<template>
  <div class="message-container">
    <div class="flex" :class="sender ? 'current-user' : 'other-user'">
       <div class="avatar-col">
            <Avatar class="image" :src="photoUrl" />
       </div>
        <div class="text-col">
            <div class="username" v-if="!sender">{{ name }}</div>
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
    background-color:#DEE2FF
}
.left-side{
    background-color: lightsteelblue;
    padding-top: 2%;
    padding-bottom: 2%;
}
.other-user{
    padding-right: 5%;
}
.text-col{
    flex-direction:column;
    flex-wrap:wrap;
}
.message-text{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16;
    display: inline-block;
    border-radius: 999px;
    color: #333;
    font-size: 16px;
    line-height: 1.2rem;
    padding-top: 1.6%;
    padding-bottom: 1.6%;
    padding-left: 4%;
    padding-right: 3%;
    max-width: 75%;
}
.username {
    color: lightslategray;
    font-size: 16px;
    margin-bottom: 1%;
    padding-left: 1%;
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
    flex-direction:column;
    flex-wrap:wrap;
    display: inline-block;
 }

</style>