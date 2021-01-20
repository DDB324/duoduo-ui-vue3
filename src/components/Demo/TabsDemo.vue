<template>
  <h1 class="demo-title">Tabs 标签页</h1>
  <Demo :component="Tabs1Demo"/>
  <Demo :component="Tabs2Demo"/>
</template>

<script lang="ts">
import Tabs1Demo from '../Tabs/Tabs1.demo.vue';
import Tabs2Demo from '../Tabs/Tabs2.demo.vue';

export default {
  setup() {
    return {Tabs1Demo, Tabs2Demo};
  }
};
</script>