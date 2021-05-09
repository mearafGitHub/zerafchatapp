<template>
  <div class="message-container">
    <div class="flex" :class="sender ? 'current-user' : 'message'">
        <Avatar class="image" :class="sender ? 'right-avatar' : ''" :src="photoUrl" />
        
        <div class="message-text" :class="sender ? 'right-side' : 'left-side'">
            {{text}}
        </div>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar.vue'
export default {
    //<span class="username" v-if="!sender">{{ name }}</span>
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
    
    background-color:lightcyan;
}
.left-side{
    
    background-color: lightskyblue;
}
.row{
    display: block;
    display: table-column;
}
.message {
    margin-bottom: 25px;
    display: inline-block;
    padding: 10px 20px;
}
.message-text{
    display: inline-block;
    padding: 10px 20px;
    border-radius: 999px;
    color: #333;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    font-size: 18px;
    line-height: 1.2em;
}
.username {
    color: lightslategray;
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
}

.message-container {
    max-width: 50%;
    background-attachment: fixed;
    border-radius: 5rem;
    width: 50rem;
 }

</style>