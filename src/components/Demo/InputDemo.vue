<template>
  <h1 class="demo-title">Input 输入框</h1>
  <h3>通过鼠标或键盘输入内容，是最基础的表单域的包装</h3>
  <section>我们提供了4种输入框状态:
    <ul>
      <li>normal</li>
      <li>disabled</li>
      <li>readonly</li>
      <li>error</li>
    </ul>
  </section>
  <Demo :component="Input1Demo"/>
</template>

<script lang="ts">
import Input1Demo from '../Input/Input1.demo.vue';

export default {
  setup() {
    return {Input1Demo};
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: circle;
  padding: 0 20px;
}
</style>