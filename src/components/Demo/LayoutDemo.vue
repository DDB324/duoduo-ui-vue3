<template>
  <h1 class="demo-title">Layout 布局</h1>
  <h3>协助进行页面整体布局</h3>
  <Demo :component="Layout1Demo"/>
  <Demo :component="Layout2Demo"/>
  <Demo :component="Layout3Demo"/>
</template>

<script lang="ts">
import Layout1Demo from '../Layout/Layout1.demo.vue';
import Layout2Demo from '../Layout/Layout2.demo.vue';
import Layout3Demo from '../Layout/Layout3.demo.vue';

export default {
  setup() {
    return {Layout1Demo, Layout2Demo, Layout3Demo};
  },
};
</script>