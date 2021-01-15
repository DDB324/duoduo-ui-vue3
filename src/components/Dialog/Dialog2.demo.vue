<demo>
示例2:
</demo>

<template>
  <Button @click="showDialog">展示Dialog</Button>
</template>

<script lang="ts">
import {openDialog} from '../../lib/openDialog';

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