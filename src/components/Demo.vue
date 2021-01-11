<template>
  <div>
    <div class="demo">
      <h2>{{ component.__sourceCodeTitle }}</h2>
      <div class="demo-component">
        <component :is="component"/>
      </div>
      <div class="demo-actions">
        <Button level="main" @click="codeVisible = !codeVisible">
          查看代码
        </Button>
      </div>
      <div class="demo-code bounce-enter-active"
           v-if="codeVisible">
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
    const codeVisible = ref(false);
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    return {codeVisible, Prism, html};
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.bounce-enter-active {
  animation: bounce-in .5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

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