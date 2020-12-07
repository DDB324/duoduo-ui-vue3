<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <Button>默认button</Button>
  <Button theme="link">link</Button>
  <Button theme="text">text</Button>
  <h1>示例2</h1>
  <Button size="big">大大大</Button>
  <Button>普通</Button>
  <Button size="small">小小小</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {
    Button
  },
  setup() {
    return {};
  },
};
</script>