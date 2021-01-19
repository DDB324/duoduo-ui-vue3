<template>
  <h1>Layout 示例</h1>
  <Demo :component="Layout1Demo"/>
</template>

<script lang="ts">
import Layout1Demo from '../Layout/Layout1.demo.vue';

export default {
  setup() {
    return {Layout1Demo};
  },
};
</script>