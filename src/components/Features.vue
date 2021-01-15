<template>
  <div class="features">
    <ul>
      <li>
        <Icon name="vue"></Icon>
        <h3>基于 Vue 3</h3>
        <p>使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <Icon name="typescript"></Icon>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <Icon name="light"></Icon>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
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
</style>