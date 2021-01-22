<template>
  <transition name="bounce">
    <aside v-if="asideVisible">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/get-started">开始使用</router-link>
        </li>
      </ol>
      <h2>布局</h2>
      <ol>
        <li>
          <router-link to="/doc/layout">Layout 布局</router-link>
        </li>
      </ol>
      <h2>通用</h2>
      <ol>
        <li>
          <router-link to="/doc/icon">Icon 图标</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 按钮</router-link>
        </li>
      </ol>
      <h2>组件</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 开关</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 对话框</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 标签页</router-link>
        </li>
        <li>
          <router-link to="/doc/input">Input 输入框</router-link>
        </li>
        <li>
          <router-link to="/doc/collapse">Collapse 折叠面板</router-link>
        </li>
      </ol>
    </aside>
  </transition>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible};
  }
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar-thumb {
  background-color: #58caf5;
}

.bounce-enter-active {
  animation: bounce-in .8s;
}

.bounce-leave-active {
  animation: bounce-in .8s reverse;
}

@keyframes bounce-in {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
  }
}

aside {
  background: #ffffff;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 0;
  height: 100%;
  flex-shrink: 0;
  z-index: 10;
  box-shadow: 0 0 3px #2f99f4;
  overflow: auto;

  h2 {
    padding-left: 8px;
    margin: 8px 0 8px;
    font-weight: 600;
  }

  ol {
    li {
      a {
        margin: 4px 24px;
        display: inline-block;
        text-decoration: none;
        position: relative;

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          border-radius: 1px;
          background: #2f99f4;
          display: inline-block;
          transform: scale3d(0, 1, 1);
          transform-origin: left;
          transition: all 0.5s;
        }

        &:hover:after {
          transform: scale3d(1, 1, 1);
        }
      }

      .router-link-active {
        color: #1a64ea;
      }
    }
  }
}
</style>