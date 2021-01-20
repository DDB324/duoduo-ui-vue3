<demo>
示例3: 侧边栏在外部的布局
</demo>

<template>
  <d-layout>
    <d-sider>sider</d-sider>
    <d-layout>
      <d-header>header</d-header>
      <d-content>content</d-content>
      <d-footer>footer</d-footer>
    </d-layout>
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

  &-sider {width: 20%;min-height: 100%;background: #58caf5;line-height: 120px}
}
</style>