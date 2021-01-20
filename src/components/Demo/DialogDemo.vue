<template>
  <h1 class="demo-title">Dialog 对话框</h1>
  <h3>浮层对话框</h3>
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