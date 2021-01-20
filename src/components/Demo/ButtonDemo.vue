<template>
  <h1 class="demo-title">Button 按钮</h1>
  <h3>按钮用于开始一个即时操作</h3>
  <section>我们提供了4种按钮:
    <ul>
      <li>默认按钮</li>
      <li>主要按钮</li>
      <li>文本按钮</li>
      <li>链接按钮</li>
    </ul>
  </section>
  <Demo :component="Button1Demo"/>
  <Demo :component="Button2Demo"/>
  <Demo :component="Button3Demo"/>
  <Demo :component="Button4Demo"/>
  <Demo :component="Button5Demo"/>
</template>

<script lang="ts">
import Button1Demo from '../Button/Button1.demo.vue';
import Button2Demo from '../Button/Button2.demo.vue';
import Button3Demo from '../Button/Button3.demo.vue';
import Button4Demo from '../Button/Button4.demo.vue';
import Button5Demo from '../Button/Button5.demo.vue';

export default {
  setup() {
    return {Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo};
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: circle;
  padding: 0 20px;
}
</style>