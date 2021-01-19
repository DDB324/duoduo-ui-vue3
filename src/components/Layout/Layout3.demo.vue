<demo>
示例3: 侧边栏在外部的布局
</demo>

<template>
  <Layout>
    <Sider>sider</Sider>
    <Layout>
      <Header>header</Header>
      <Content>content</Content>
      <Footer>footer</Footer>
    </Layout>
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

  &-sider {width: 100px;min-height: 100%;background: #58caf5;line-height: 120px}
}
</style>