<demo>
按钮类型:4种类型按钮
</demo>

<template>
  <Button @click="onClick">Default Button</Button>
  <Button theme="main">Primary Button</Button>
  <Button theme="text">Text Button</Button>
  <Button theme="link">Link Button</Button>
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