<demo>
示例2:双向绑定
</demo>

<template>
  <d-input v-model:value="message"></d-input>
  <div> 双向绑定: {{ message }}</div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup() {
    const message = ref('删除输入框的内容');
    return {message};
  },
};
</script>