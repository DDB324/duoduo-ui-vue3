<template>
  <div class="duoduo-collapse">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import {ref, inject, onMounted} from 'vue';

export default {
  props: {
    activeName: {
      type: Array,
      default: []
    }
  },
  setup(props, context) {
    //注入事件总线
    const $bus = inject('$bus');

    onMounted(() => {
      //不能修改props,所以用JSON深拷贝
      let copyActiveName = JSON.parse(JSON.stringify(props.activeName));

      //触发activeName的更新函数,使外部能拿到数据
      let updateActiveName = () => {
        context.$emit('update:activeName', copyActiveName);
      };

      //触发事件总线的activeName函数
      $bus.emit('update:activeName', props.activeName);

      //事件总线监听addActiveName事件,将接受到的name作为触发函数的参数
      //将name放到拷贝的activeName中
      //触发activeName的更新函数
      $bus.on('update:addActiveName', (name) => {
        copyActiveName.push(name);
        updateActiveName();
      });
    });
  }
};
</script>

<style lang='scss'>

</style>