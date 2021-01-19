<demo>
示例1: 上中下布局
</demo>

<template>
  <d-layout>
    <d-header>header</d-header>
    <d-content>content</d-content>
    <d-footer>footer</d-footer>
  </d-layout>
</template>

<script lang="ts">
import Layout from '/src/lib/Layout.vue';
import Header from '/src/lib/Header.vue';
import Content from '/src/lib/Content.vue';
import Footer from '/src/lib/Footer.vue';

export default {
  components: {
    'd-layout': Layout,
    'd-header': Header,
    'd-content': Content,
    'd-footer': Footer
  },
};
</script>

<style lang="scss" scoped>
.duoduo-layout {color: #ffffff;text-align: center;

  &-header {height: 64px;background: #82e2f9;line-height: 64px;}

  &-content {height: 128px;background: #2f99f4;line-height: 128px;}

  &-footer {height: 64px;background: #82e2f9;line-height: 64px;}
}
</style>