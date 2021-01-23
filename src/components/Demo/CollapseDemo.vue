<template>
  <h1 class="demo-title">Collapse 折叠面板</h1>
  <h3>可以折叠/展开的内容区域</h3>
  <Demo :component="Collapse1Demo"/>
  <Demo :component="Collapse2Demo"/>
</template>

<script lang="ts">
import Collapse1Demo from '../Collapse/Collapse1.demo.vue';
import Collapse2Demo from '../Collapse/Collapse2.demo.vue';

export default {
  setup() {
    return {Collapse1Demo, Collapse2Demo};
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: circle;
  padding: 0 20px;
}
</style>