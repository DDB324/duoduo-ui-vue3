<demo>
示例2:同时最多展开1个
</demo>

<template>
  折叠面板状态: {{ active }}
  <d-collapse v-model:activeName="active" single>
    <d-collapse-item title="标题1" name="1">内容1</d-collapse-item>
    <d-collapse-item title="标题2" name="2">内容2</d-collapse-item>
    <d-collapse-item title="标题3" name="3">内容3</d-collapse-item>
  </d-collapse>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup() {
    const active = ref(['1']);
    return {active};
  }
};
</script>