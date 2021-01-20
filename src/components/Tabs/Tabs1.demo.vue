<demo>
示例1:基础用法
</demo>

<template>
  <d-tabs v-model:selected="value">
    <d-tab title="Tab1">Content of Tab1</d-tab>
    <d-tab title="Tab2"><strong>Content of Tab2</strong></d-tab>
    <d-tab title="Tab3">Content of Tab3</d-tab>
  </d-tabs>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup() {
    const value = ref('Tab2');
    return {value};
  }
};
</script>