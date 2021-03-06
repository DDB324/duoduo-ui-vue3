<template>
  <button class="duoduo-button" :class="classes" :disabled="disabled">
    <span class="duoduo-loadingIndicator" v-if="loading"></span>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  props: {
    theme: {type: String, default: 'button'},
    size: {type: String, default: 'normal'},
    level: {type: String, default: 'normal'},
    disabled: {type: Boolean, default: false},
    loading: {type: Boolean, default: false}
  },
  setup(props) {
    const {theme, size, level} = props;
    const classes = computed(() => {
          return {
            [`duoduo-theme-${theme}`]: theme,
            [`duoduo-size-${size}`]: size,
            [`duoduo-level-${level}`]: level,
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
$red: red;
$grey: grey;
.duoduo-button {height: $h;border-radius: $radius;white-space: nowrap;border: 1px solid $border-color;
  color: $color;background: white;padding: 0 8px;cursor: pointer;display: inline-flex;
  justify-content: center;align-items: center;box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;margin-right: 8px;margin-bottom: 8px;

  &:hover, &:focus {color: $blue;border-color: $blue;}

  &:focus {outline: none;}

  &::-moz-focus-inner {border: 0;}

  &.duoduo-theme-link {border-color: transparent;box-shadow: none;color: $blue;

    &:hover, &:focus {color: lighten($blue, 10%)}
  }

  &.duoduo-theme-text {border-color: transparent;box-shadow: none;color: inherit;

    &:hover, &:focus {background: darken(white, 5%)}
  }

  &.duoduo-theme-main {background: $blue;color: white;border-color: $blue;

    &:hover, &:focus {background: darken($blue, 10%);border-color: darken($blue, 10%);}
  }

  &.duoduo-size-big {font-size: 24px;height: 48px;padding: 0 16px;}

  &.duoduo-size-small {font-size: 12px;height: 20px;padding: 0 4px;}

  &.duoduo-theme-button {
    &.duoduo-level-danger {color: $red;border-color: $red;

      &:hover, &:focus {color: darken($red, 10%);}
    }
  }

  &.duoduo-theme-main {
    &.duoduo-level-danger {color: white;border-color: $red;background: $red;

      &:hover, &:focus {background: darken($red, 10%);}
    }
  }

  &.duoduo-theme-link {
    &.duoduo-level-danger {color: $red;

      &:hover, &:focus {color: darken($red, 10%);}
    }
  }

  &.duoduo-theme-text {
    &.duoduo-level-danger {color: $red;

      &:hover, &:focus {color: darken($red, 10%);}
    }
  }

  &.duoduo-theme-button, &.duoduo-theme-main {
    &[disabled] {cursor: not-allowed;color: $grey;border-color:$border-color;background: darken(white, 5%)
    }
  }

  &.duoduo-theme-link, &.duoduo-theme-text {
    &[disabled] {cursor: not-allowed;color: $grey}
  }

  .duoduo-loadingIndicator {display: inline-block;width: 14px;height: 14px;
    border-radius: 8px;border-color: $blue $blue $blue transparent;
    border-style: solid;border-width: 2px;margin-right: 4px;animation: duoduo-spin infinite 1s linear;}
}

@keyframes duoduo-spin {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}
</style>