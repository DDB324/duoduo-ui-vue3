<template>
  <div class=" duoduo-tabs">
    <div class=" duoduo-tabs-nav" ref="nav">
      <div class=" duoduo-tabs-nav-item"
           v-for="(t,index) in titles" :key="index"
           :ref="el => { if (t === selected) {selectedItem = el} }"
           @click="select(t)"
           :class="{selected:t === selected}">
        {{ t }}
      </div>
      <div class=" duoduo-tabs-nav-indicator"
           ref="indicator"></div>
    </div>
    <div class=" duoduo-tabs-content">
      <component :is="visibleContent" :key="visibleContent.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed, ref, watchEffect} from 'vue';

export default {
  props: {
    selected: {
      type: String,
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const nav = ref<HTMLDivElement>(null);
    watchEffect(() => {
          const {width, left} = selectedItem.value.getBoundingClientRect();
          const {left: left2} = nav.value.getBoundingClientRect();
          indicator.value.style.width = width + 'px';
          indicator.value.style.left = `${left - left2}px`;
        },
        {
          flush: 'post'
        }
    );
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
    const visibleContent = computed(() => {
      return defaults.filter(item => item.props.title === props.selected)[0];
    });
    return {defaults, titles, select, selectedItem, indicator, nav, visibleContent};
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
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>