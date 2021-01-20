<template>
  <h1 class="demo-title">Icon 图标</h1>
  需要在index.html中增加script标签,scr属性填写以下路径
  <pre class="language-html"
       v-text="url"/>
  <Demo :component="Icon1Demo"/>
  <h2>本组件库自带的图标</h2>
  <Icon2Demo></Icon2Demo>
</template>

<script lang="ts">
import Icon1Demo from '../Icon/Icon1.demo.vue';
import Icon2Demo from '../Icon/Icon2.demo.vue';
import {ref} from 'vue';

export default {
  setup() {
    const url = ref('//at.alicdn.com/t/font_2317593_qr18iygatnb.js')
    return {Icon1Demo,Icon2Demo,url};
  },
};
</script>