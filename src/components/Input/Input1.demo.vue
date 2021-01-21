<demo>
示例1:4种类型输入框
</demo>

<template>
  <d-input value="Input(Default)"></d-input>
  <d-input value="Input(disabled)" disabled></d-input>
  <d-input value="Input(readonly)" readonly></d-input>
  <d-input value="Input(error)" error="对不起,您的输入有误"></d-input>
</template>

<script lang="ts">

export default {
  setup() {
  },
};
</script>