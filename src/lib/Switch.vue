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
  background: blue;

  &:focus {
    outline: none
  }

  &.checked {
    background: gray;

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
    transition: left 250ms;
  }
}
</style>