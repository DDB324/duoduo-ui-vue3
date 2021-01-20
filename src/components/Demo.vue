<template>
  <div>
    <div class="demo">
      <div class="demo-component">
        <component :is="component"/>
      </div>
      <h3>{{ component.__sourceCodeTitle }}</h3>
      <div class="demo-actions">
        <d-button v-if="codeVisible === 'show'" @click="codeVisible = 'hide'">
          隐藏代码
        </d-button>
        <d-button theme="main" v-else @click="codeVisible = 'show'">
          查看代码
        </d-button>
      </div>
      <div :class="`demo-code-${codeVisible}`">
        <pre class="language-html"
             v-html="html"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import {computed, ref} from 'vue';

const Prism = (window as any).Prism;

export default {
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


  h3 {
    font-size: 20px;
    padding: 8px 16px;
  }

  &-component {
    padding: 16px;
    border-bottom: 2px solid $border-color;
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