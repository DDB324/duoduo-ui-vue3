<template>
  <button @click="toggle" :class="{checked:value}"><span></span></button>
</template>

<script lang="ts">

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
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
    span {
      width: $h2 + 4px;
    }
  }

  &.checked:active {
    span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }

  &.checked {
    background: #1890ff;

    span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  span {
    position: absolute;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    top: 2px;
    left: 2px;
    transition: all 250ms;
  }
}
</style>