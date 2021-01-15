<demo>
示例1: 3种不同的按钮
</demo>

<template>
  <Button @click="onClick">默认按钮</Button>
  <Button theme="link">链接按钮</Button>
  <Button theme="text">文本按钮</Button>
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