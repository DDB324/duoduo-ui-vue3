<template>
  <main class=" duoduo-layout-content">
    <slot></slot>
  </main>
</template>

<script lang='ts'>
export default {
  name:'d-content'
};
</script>

<style lang='scss' scoped>
.duoduo-layout-content{
  flex-grow:1;
}
</style>