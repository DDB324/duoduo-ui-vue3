<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-airplane"></use>
      </svg>
    </div>
    <div class="menu">
      <router-link to="/doc">
        <svg class="icon">
          <use xlink:href="#icon-document"></use>
        </svg>
        <span>文档</span>
      </router-link>
    </div>
    <span class="toggleAside" @click="toggleAside"></span>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
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
$color: #007974;

.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  .logo {
    max-width: 6em;
    margin-right: auto;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    .icon {
      width: 20px;
      height: 20px;
    }

    span {
      margin-left: 4px;
      font-size: 20px;
    }
  }

  .toggleAside {
    display: none;
  }

  @media (max-width: 500px) {
    .logo {
      margin-left: auto;
    }
    .menu {
      display: none;
    }
    .toggleAside {
      display: inline-block;
      width: 24px;
      height: 24px;
      background: red;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>