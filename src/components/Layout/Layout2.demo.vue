<demo>
示例2: 侧边栏在内部的布局
</demo>

<template>
  <Layout>
    <Header>header</Header>
    <Layout>
      <Sider>sider</Sider>
      <Content>content</Content>
    </Layout>
    <Footer>footer</Footer>
  </Layout>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.duoduo-layout {color: #ffffff;text-align: center;

  &-header {height: 64px;background: #82e2f9;line-height: 64px;}

  &-content {height: 120px;background: #2f99f4;line-height: 128px;}

  &-footer {height: 64px;background: #82e2f9;line-height: 64px;}

  &-sider {width: 100px;height: 100%;background: #58caf5;line-height: 120px;}
}
</style>