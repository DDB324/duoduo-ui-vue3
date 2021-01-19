<demo>
示例1: 上中下布局
</demo>

<template>
  <Layout>
    <Header>header</Header>
    <Content>content</Content>
    <Footer>footer</Footer>
  </Layout>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.duoduo-layout {color: #ffffff;text-align: center;

  &-header {height: 64px;background: #82e2f9;line-height: 64px;}

  &-content {height: 128px;background: #2f99f4;line-height: 128px;}

  &-footer {height: 64px;background: #82e2f9;line-height: 64px;}
}
</style>