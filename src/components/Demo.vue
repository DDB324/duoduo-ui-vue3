<template>
  <div>
    <div class="demo">
      <h2>{{ component.__sourceCodeTitle }}</h2>
      <div class="demo-component">
        <component :is="component"/>
      </div>
      <div class="demo-actions">
        <Button level="main" v-if="codeVisible === 'show'" @click="codeVisible = 'hide'">
          隐藏代码
        </Button>
        <Button level="main" v-else @click="codeVisible = 'show'">
          查看代码
        </Button>
      </div>
      <div :class="`demo-code-${codeVisible}`">
        <pre class="language-html"
             v-html="html"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import {computed, ref} from 'vue';

const Prism = (window as any).Prism;

export default {
  components: {Button},
  props: {
    component: {
      type: Object
    },
  },
  setup(props) {
    const codeVisible = ref('hide');
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    return {codeVisible, Prism, html};
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 2px solid $border-color;
  margin: 16px 0 32px;
  border-radius: 8px;
  overflow-y: hidden;

  .demo-code-hide {
    max-height: 0;
    overflow: hidden;
    transition: all 300ms;
  }

  .demo-code-show {
    max-height: 1000px;
    transition: all 300ms;
  }


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