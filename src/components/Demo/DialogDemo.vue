<template>
  <h1>Dialog 示例</h1>
  <Demo :component="Dialog1Demo"></Demo>
  <Demo :component="Dialog2Demo"></Demo>
</template>

<script lang="ts">
import Dialog1Demo from '../Dialog/Dialog1.demo.vue';
import Dialog2Demo from '../Dialog/Dialog2.demo.vue';

export default {
  setup() {
    return {Dialog1Demo, Dialog2Demo};
  }
};
</script>