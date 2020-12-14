<template>
  <div class="tabsDemo">
    <h1>示例1</h1>
    <Tab>
      <Tabs title="导航1">内容1</Tabs>
      <Tabs title="导航2">内容2</Tabs>
    </Tab>
  </div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue';
import Tabs from '../lib/Tabs.vue';

export default {
  components: {
    Tab,
    Tabs
  }
};
</script>