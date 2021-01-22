<template>
  <div class="duoduo-collapse-item" :class="{open:currentOpen}">
    <header class="title" @click="toggleOpen">
      <d-icon name="arrow-right" :class="currentOpen?'collapse-item-svg-bottom':'collapse-item-svg-right'"></d-icon>
      {{ title }}
    </header>
    <main class="content" v-if="currentOpen">
      <slot></slot>
    </main>
  </div>
</template>

<script lang='ts'>
import {ref} from 'vue';

export default {
  props: {
    title: {
      type: String,
      require: true
    },
  },
  setup(props) {
    const currentOpen = ref(true);
    const toggleOpen = () => {
      currentOpen.value = !currentOpen.value;
    };
    return {toggleOpen, currentOpen};
  }
};
</script>

<style lang='scss'>
$grey: #ddd;
$background-color: #eee;

.duoduo-collapse-item {
  .title {
    border: 1px solid $grey;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    background: #eee;
    border-bottom: none;


    .collapse-item-svg {
      &-bottom {
        transform: rotate(90deg);
        transition: all 250ms;
      }

      &-right {
        transform: rotate(0deg);
        transition: all 250ms;
      }
    }
  }

  .content {
    border: 1px solid $grey;
    border-bottom: none;
    padding: 8px 4px;
  }

  &:first-child {
    .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  &:last-child {
    .title {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-bottom: 1px solid $grey;
    }

    &[class~='open'] {
      .title {
        border-bottom: none;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      .content {
        border: 1px solid $grey;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
}
</style>