<template>
  <div class="topnav">
    <router-link to="/" class="logo-wrapper">
      <Icon class="logo" name="whirlpool"></Icon>
    </router-link>
    <div class="menu">
      <a href="https://github.com/DDB324/duoduo-ui-vue3">GitHub</a>
      <a href="https://www.yuque.com/jiangdaoran/gt5tss/faonoe">笔记</a>
      <router-link to="/doc">
        <span>文档</span>
      </router-link>
    </div>
    <Icon v-if="toggleMenuButtonVisible"
          class="toggleAside"
          @click="toggleAside"
          name="menu"></Icon>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleAside};
  },
};
</script>

<style lang="scss" scoped>
$color: #273849;

.topnav {
  color: $color;
  display: flex;
  padding: 12px 8px 12px 64px;
  z-index: 20;
  justify-content: center;
  align-items: center;
  -moz-user-select: none; /*火狐*/
  @media (max-width:500px) {
    padding-left: 8px;
  }

  .logo-wrapper {
    max-width: 6em;
    margin-right: auto;
    text-decoration: none;

    .logo {
      width: 40px;
      height: 40px;
      vertical-align: middle;
    }
  }

  .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    a {
      margin: 0 .6em;
      font-size: 20px;
      text-decoration: none;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        border-radius: 1px;
        background: #1a64ea;
        display: inline-block;
        transform: scale3d(0, 1, 1);
        transform-origin: left;
        transition: all 0.5s;
      }

      &:hover:after {
        transform: scale3d(1, 1, 1);
      }
    }
  }

  .toggleAside {
    display: none;
  }

  @media (max-width: 500px) {
    .logo-wrapper {
      margin-left: auto;
    }
    .menu {
      display: none;
    }
    .toggleAside {
      display: inline-block;
      width: 24px;
      height: 24px;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>