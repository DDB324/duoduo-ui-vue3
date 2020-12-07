<template>
  <button class="duoduo-button" :class="classes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  setup(props) {
    const {theme, size} = props;
    const classes = computed(() => {
          return {
            [`duoduo-theme-${theme}`]: theme,
            [`duoduo-size-${size}`]: size,
          };
        }
    );
    return {classes};
  }
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.duoduo-button {
  height: $h;
  border-radius: $radius;
  white-space: nowrap;
  border: 1px solid $border-color;
  color: $color;
  background: white;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover, &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.duoduo-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover, &:focus {
      color: lighten($blue, 10%)
    }
  }

  &.duoduo-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      color: lighten(white, 5%)
    }
  }

  &.duoduo-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.duoduo-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
}
</style>