<template>
  <div @click="onClick">
    <button @focus="onFocus">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  setup(props, context) {
    const {onClick, onFocus} = context.attrs;
    return {onClick, onFocus};
  }
};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>