<demo>
示例1:基础用法
</demo>

<template>
  <Button @click="toggle" theme="main">Open Dialog</Button>
  <Dialog v-model:visible="value" :ok="ok" :cancel="cancel" :close-on-click-overlay="false">
    <template v-slot:title>
      <strong>标题支持HTML</strong>
    </template>
    <template v-slot:content>
      <strong>内容支持HTML</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup() {
    const value = ref(false);
    const toggle = () => {
      value.value = !value.value;
    };
    const ok = () => {
      return false;
    };
    const cancel = () => {
    };
    return {value, toggle, ok, cancel};
  }
};
</script>