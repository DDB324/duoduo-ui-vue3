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
export default {};
</script>

<style lang="scss" scoped>
.duoduo-layout {color: #ffffff;text-align: center;

  &-header {height: 64px;background: #82e2f9;line-height: 64px;}

  &-content {height: 200px;background: #2f99f4;line-height: 200px;}

  &-footer {height: 64px;background: #82e2f9;line-height: 64px;}

  &-sider {width: 20%;height: 100%;background: #58caf5;line-height: 200px;}
}
</style>