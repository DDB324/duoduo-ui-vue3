# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你需要使用本组件库的文件中中写入下面的代码引入本组件库

```
import {Button, Tabs, Switch, Dialog, openDialog} from "duoduo-ui-vue3"
```

这样就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
    <d-button>按钮</d-button>
</template>

<script>
    import {Button} from "duoduo-ui-vue3"
    export default {
        components: {d-button:Button}
    }
</script>
```
