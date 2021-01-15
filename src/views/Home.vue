<template>
  <div>
    <div class="topnavAndBanner">
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
    <Features></Features>
  </div>
</template>

<style lang="scss" scoped>

</style>
<script lang="ts">
import Topnav from '../components/Topnav.vue';
import Icon from '../components/Icon.vue';
import Features from '../components/Features.vue';


export default {
  components: {Topnav, Icon, Features}
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;
.banner {
  background: rgb(227, 255, 240);
  background: linear-gradient(135deg, rgba(227, 255, 240, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .actions {
    padding: 8px;

    a {
      background: $green;
      color: white;
      padding: 8px 24px;
      margin: 0 8px;
      display: inline-block;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>