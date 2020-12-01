<template>
  <div>
    <Topnav/>
    <div class="banner">
      <h1>duoduo-ui</h1>
      <h2>一个简单的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/DDB324/duoduo-ui-vue3">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
<script lang="ts">
import Topnav from "../components/Topnav.vue";

export default {
  components: {Topnav}
}
</script>

<style lang="scss" scoped>
$h: 28px;
.banner {
  background: lightgreen;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .actions {
    padding: 8px;

    a {
      background: #fff;
      border-radius: $h/2;
      padding: 0 8px;
      margin: 0 8px;
      display: inline-block;
      height: $h;
      line-height: $h;
    }
  }
}
</style>