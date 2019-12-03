<template>
  <div>
    <!-- {{data.class===1?'日常工作':(data.class===2?"专项工作":"临时工作")}} -->
    <p v-if="data=='1'">日常工作</p>
    <p v-if="data=='2'">专项工作</p>
    <p v-if="data=='3'">临时工作</p>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style>
</style>