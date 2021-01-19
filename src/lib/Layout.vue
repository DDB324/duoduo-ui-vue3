<template>
  <section class="duoduo-layout" :class="{hasSide:classes}">
    <slot></slot>
  </section>
</template>

<script lang='ts'>
import {ref, onMounted} from 'vue';

export default {
  name: 'd-layout',
  setup(props, context) {
    const classes = ref(false);
    onMounted(() => {
      context.slots.default().forEach(item => {
            if (item.type.name.toLowerCase() === 'd-sider') {
              classes.value = true;
            }
          }
      );
    });
    return {classes};
  }
};
</script>

<style lang='scss' scoped>
.duoduo-layout {
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  background: #f0f2f5;

  .hasSide {
    flex-direction: row;
  }
}


</style>