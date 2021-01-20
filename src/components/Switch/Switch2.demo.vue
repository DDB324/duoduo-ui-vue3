<demo>
不可用:Switch失效状态
</demo>

<template>
  <d-switch v-model:value="bool" disabled />
</template>

<script lang="ts">
import {ref} from 'vue'
export default {
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>