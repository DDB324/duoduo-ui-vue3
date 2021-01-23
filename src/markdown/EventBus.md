# 为什么

由于Vue3不再提供$on函数,而且createApp的时候必须要传入参数,
所以在Vue2中直接使用new Vue()作为EventBus在Vue3中不可以了.
所以本组件库提供了一个简易的EventBus.

# 全局EventBus

## 在入口文件中挂载
```
// main.js
import { createApp } from 'vue'
import App from './App.vue'

// 引入EventBus
import EventBus from 'lib/bus.ts'

//创建EventBus实例
const $bus = new EventBus()

// 1.使用provide提供
app.provide('$bus', $bus)
// 2.挂载到this上
app.config.globalProperties.$bus = $bus
```

## 在组件中使用

在setup中使用

```
// Button.vue
import {inject} from 'vue'
export default {
 setup(){
   const $bus = inject('$bus')
 }
}
```

在created中使用

```
// Button.vue
export default {
  created() {
      this.$bus.emit('ButtonCreated')
  }
}
```

# 局部EventBus

## 在父组件中provide

```
// Button.vue
import {provide} from 'vue'
import EventBus from 'lib/bus.ts'
export default {
 setup(){
    //创建eventBus实例
    const eventBus = new EventBus()
    //使用provide
    provide('eventBus', eventBus)
 }
}
```

## 在子组件中inject

```
// Button-item.vue
import {inject} from 'vue'
import EventBus from 'lib/bus.ts'
export default {
 setup(){
    //注入事件总线
    const eventBus: EventBus = inject('eventBus')
 }
}
```
