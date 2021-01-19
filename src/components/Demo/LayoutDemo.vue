<template>
  <h1>Layout 示例</h1>
  <Demo :component="Layout1Demo"/>
  <Demo :component="Layout2Demo"/>
</template>

<script lang="ts">
import Layout1Demo from '../Layout/Layout1.demo.vue';
import Layout2Demo from '../Layout/Layout2.demo.vue';

export default {
  setup() {
    return {Layout1Demo,Layout2Demo};
  },
};
</script>