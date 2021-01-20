<demo>
基本:最简单的用法
</demo>

<template>
  <d-switch v-model:value="bool"/>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup() {
    const bool = ref(true);
    return {
      bool
    };
  }
};
</script>