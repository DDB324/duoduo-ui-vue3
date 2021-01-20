<demo>
示例2:一句代码打开Dialog
</demo>

<template>
  <d-button theme="main" @click="showDialog">Open Dialog</d-button>
</template>

<script lang="ts">
import {openDialog} from '../../lib';

export default {
  setup() {
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '你好',
        ok: () => {console.log('ok');},
        cancel: () => {console.log('cancel');}
      });
    };
    return {showDialog};
  }
};
</script>