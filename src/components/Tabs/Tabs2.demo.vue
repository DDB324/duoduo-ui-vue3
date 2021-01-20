<demo>
示例2:设置disabled来禁用某一项
</demo>

<template>
  <Tabs v-model:selected="value" disabled="Tab3">
    <Tab title="Tab1">Content of Tab1</Tab>
    <Tab title="Tab2"><strong>Content of Tab2</strong></Tab>
    <Tab title="Tab3">Content of Tab3</Tab>
  </Tabs>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup() {
    const value = ref('Tab1');
    return {value};
  }
};
</script>