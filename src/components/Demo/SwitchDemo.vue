<template>
    <h1 class="demo-title">Switch 开关</h1>
    <h3>开关选择器</h3>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
</template>

<script lang="ts">
import Switch1Demo from '../Switch/Switch1.demo.vue';
import Switch2Demo from '../Switch/Switch2.demo.vue';

export default {
  setup() {
    return {Switch1Demo, Switch2Demo};
  }
};
</script>
