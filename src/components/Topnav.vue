<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-airplane"></use>
      </svg>
    </router-link>
    <div class="menu">
      <router-link to="/doc">
        <svg class="icon">
          <use xlink:href="#icon-document"></use>
        </svg>
        <span>文档</span>
      </router-link>
    </div>
    <svg v-if="toggleMenuButtonVisible"
         class="toggleAside icon" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
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

    &:hover {
      animation: move infinite linear 800ms;
    }

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
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  @keyframes move {
    0% {transform: translateY(0)}
    25% {transform: translateY(5px)}
    50% {transform: translateY(0)}
    75% {transform: translateY(-5px)}
    100% {transform: translateY(0)}
  }
}
</style>