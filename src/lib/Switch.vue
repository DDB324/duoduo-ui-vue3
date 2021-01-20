<template>
  <button class="duoduo-switch" @click="toggle" :class="{'duoduo-checked':value}" :disabled="disabled">
    <span class=" duoduo-switch-handle"></span>
  </button>
</template>

<script lang="ts">

export default {
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.duoduo-switch {
  position: relative;
  height: $h;
  width: $h*2;
  border-radius: $h/2;
  border: none;
  background: #bfbfbf;

  &:focus {
    outline: none
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    .duoduo-switch-handle {
      width: $h2 + 4px;
    }
  }

  &.duoduo-checked:active {
    .duoduo-switch-handle {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }

  &.duoduo-checked {
    background: #1890ff;

    .duoduo-switch-handle {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  .duoduo-switch-handle {
    position: absolute;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    top: 2px;
    left: 2px;
    transition: all 250ms;
  }

  &[disabled] {
    cursor: not-allowed;
  }
}
</style>