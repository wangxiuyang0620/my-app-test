<template>
  <div>
     <span v-for="(item,index) in 5" :key="index" :class="[{col:index<score}]">☆</span>
  </div>
</template>

<script>
export default {
  props:['score']
}
</script>

<style lang="scss" scoped>
 .col{
     color: yellow;
 }
</style>