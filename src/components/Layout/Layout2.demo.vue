<demo>
示例2: 侧边栏在内部的布局
</demo>

<template>
  <d-layout>
    <d-header>header</d-header>
    <d-layout>
      <d-sider>sider</d-sider>
      <d-content>content</d-content>
    </d-layout>
    <d-footer>footer</d-footer>
  </d-layout>
</template>

<script lang="ts">
import Layout from '/src/lib/Layout.vue';
import Header from '/src/lib/Header.vue';
import Content from '/src/lib/Content.vue';
import Footer from '/src/lib/Footer.vue';
import Sider from '/src/lib/Sider.vue';

export default {
  components: {
    'd-layout': Layout,
    'd-header': Header,
    'd-content': Content,
    'd-footer': Footer,
    'd-sider': Sider
  },
};
</script>

<style lang="scss" scoped>
.duoduo-layout {color: #ffffff;text-align: center;

  &-header {height: 64px;background: #82e2f9;line-height: 64px;}

  &-content {height: 120px;background: #2f99f4;line-height: 128px;}

  &-footer {height: 64px;background: #82e2f9;line-height: 64px;}

  &-sider {width: 100px;height: 100%;background: #58caf5;line-height: 120px;}
}
</style>