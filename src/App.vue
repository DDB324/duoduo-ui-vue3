<template>
  <router-view/>
</template>

<script>
import {ref,provide} from 'vue'
import {router} from "./router";

export default {
  name: 'App',
  setup(){
    let width = document.documentElement.clientWidth
    const asideVisible = ref(width > 500)
    provide('asideVisible',asideVisible)
    router.afterEach(()=>{
      if(width<=500){
        asideVisible.value = false
      }
    })
  },
}
</script>

<style>
/*控制整个滚动条*/
::-webkit-scrollbar {
  background-color: lightgray;
  width: 10px;
  height: 10px;
  background-clip: padding-box;
}

/*滚动条两端方向按钮*/
/*::-webkit-scrollbar-button {*/
/*  background-color: pink;*/
/*}*/

/*滚动条中间滑动部分*/
::-webkit-scrollbar-thumb {
  background-color: #2078ef;
  border-radius: 5px;
}

/*滚动条右下角区域*/
::-webkit-scrollbar-corner {
  background-color: red;
}
</style>