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
    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav}
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

.features {
  margin: 32px auto;
  padding: 0 16px;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 100%;
      margin: 16px 0;
      display: grid;
      grid-template-areas:
      "icon title"
      "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      justify-content: center;
      align-content: space-between;

      svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      h3 {
        grid-area: title;
        font-size: 28px;
      }

      p {
        grid-area: text;
      }
    }
  }

  @media (min-width: 800px) {
    width: 800px;
    ul {
      li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    ul {
      li {
        width: 33.3%;
      }
    }
  }
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