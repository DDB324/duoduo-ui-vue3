<template>
  <div class="banner">
    <h1>DuoDuo UI</h1>
    <h2>一个简单的UI框架</h2>
    <p class="actions">
      <router-link to="/doc">开始</router-link>
      <a href="https://github.com/DDB324/duoduo-ui-vue3">
        <Icon name="github"></Icon>
        GitHub</a>
    </p>
  </div>
</template>

<script lang="ts">
import Icon from './Icon.vue';

export default {
  components: {
    Icon
  }
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 2em;
$color: #007974;
.banner {
  color: #fff;
  //padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3em;
    margin-top: 20px
  }

  h2 {
    margin: 20px
  }

  .actions {
    padding: 24px;
    margin-bottom: 50px;
    font-size:1.2em;

    a {
      background: white;
      color: #273849;
      padding: 8px 3em;
      margin: 0 8px;
      display: inline-block;
      border-radius: $border-radius;
      font-weight: 600;

      &:last-child {
        background: #eee;
        position: relative;

        svg {
          position: absolute;
          left: 0.3em;
          top: 0.15em;
          width: 2em;
          height: 2em;
          vertical-align: sub;
        }
      }

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>