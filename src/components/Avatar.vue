<template>
  <img class="avatar" :src="src" />
</template>

<script>
export default {
  props: { src: { type: String, default: '' } }
}
</script>
<style scoped>
.avatar{
    width: 3rem;
    height: 3rem;
    border: solid 0.rem white;
    border-radius: 50%;
}
</style>