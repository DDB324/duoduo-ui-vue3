<demo>
示例2:双向绑定
</demo>

<template>
  <d-input v-model:value="message"></d-input>
  <div> v-model: {{ message }}</div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup() {
    const message = ref('双向绑定:删除这里试试');
    return {message};
  },
};
</script>