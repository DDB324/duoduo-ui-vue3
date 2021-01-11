<template>
  <div class="switchDemo">
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Switch v-model:value="bool"></Switch>
      </div>
      <div class="demo-actions">
        <Button level="main">查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>Switch v-model:value="bool"</pre>
      </div>
    </div>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Switch v-model:value="bool" disabled=""></Switch>
      </div>
      <div class="demo-actions">
        <Button level="main">查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>Switch v-model:value="bool" disabled</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Switch, Button},
  setup() {
    const bool = ref(false);
    return {bool};
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 2px solid $border-color;
  margin: 16px 0 32px;
  border-radius: 8px;

  h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 2px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 2px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 2px dashed $border-color;

    pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}

</style>