<template>
  <div class=" duoduo-tabs">
    <div class=" duoduo-tabs-nav">
      <div class=" duoduo-tabs-nav-item"
           v-for="(t,index) in titles" :key="index"
           @click="select(t)"
           :class="{selected:t === selected}">
        {{ t }}
      </div>
      <div class=" duoduo-tabs-nav-indicator"></div>
    </div>
    <div class=" duoduo-tabs-content">
      <component class=" duoduo-tabs-content-item"
                 v-for="(c,index) in defaults" :is="c" :key="index"
                 :class="{selected:c.props.title === selected}"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';

export default {
  props: {
    selected: {
      type: String,
    }
  },
  setup(props, context) {
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return {defaults, titles, select};
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.duoduo-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      height: 3px;
      width: 100px;
      background: $blue;
      position: absolute;
      bottom: -1px;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>