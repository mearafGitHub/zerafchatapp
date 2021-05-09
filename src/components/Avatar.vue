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
    width: 4rem;
    height: 4rem;
    border: solid 0.2rem white;
    border-radius: 50%;
}
</style>