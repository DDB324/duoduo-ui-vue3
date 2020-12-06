<template>
  <div @click="onClick">
    <button v-bind="rest">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  props: {
    size: String,
    disabled: String,
    readonly: Boolean
  },
  setup(props, context) {
    console.log({...props});
    console.log({...context.attrs});
    const {onClick, ...rest} = context.attrs;
    return {onClick, rest};
  }
};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>