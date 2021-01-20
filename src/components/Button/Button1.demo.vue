<demo>
按钮类型:4种类型按钮
</demo>

<template>
  <d-button @click="onClick">Default Button</d-button>
  <d-button theme="main">Primary Button</d-button>
  <d-button theme="text">Text Button</d-button>
  <d-button theme="link">Link Button</d-button>
</template>

<script lang="ts">

export default {
  setup() {
    const onClick = () => {
      console.log('按钮的回调');
    };
    return {onClick};
  },
};
</script>