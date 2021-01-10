<template>
  <article class="markdown-body" v-html="md">
  </article>
</template>

<script lang="ts">
import md from '../markdown/GetStarted.md';

export default {
  data() {
    return {md};
  }
};
</script>