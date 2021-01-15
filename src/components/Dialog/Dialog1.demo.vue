<demo>
示例1:
</demo>

<template>
  <Button @click="toggle">展示Dialog</Button>
  <Dialog v-model:visible="x" :ok="f1" :cancel="f2" :close-on-click-overlay="false">
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {
    };
    return {x, toggle, f1, f2};
  }
};
</script>