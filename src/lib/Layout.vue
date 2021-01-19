<template>
  <section class="duoduo-layout">
    <slot></slot>
  </section>
</template>

<script lang='ts'>
export default {};
</script>

<style lang='scss' scoped>
.duoduo-layout {
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  background: #f0f2f5;
}
</style>