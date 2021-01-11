// @ts-nocheck
import path from 'path'
import fs from 'fs'
import marked from 'marked'

const mdToJs = str => {
  const content = JSON.stringify(marked(str))
  return `export default ${content}`
}

export function md() {
  return {
    configureServer: [ // 用于开发
      async ({ app }) => {
        app.use(async (ctx, next) => { // koa
          //如果路径是以md结尾的
          if (ctx.path.endsWith('.md')) {
            //把文件变成js文件
            ctx.type = 'js'
            const filePath = path.join(process.cwd(), ctx.path)
            //文件的内容就是将markdown变成js
            ctx.body = mdToJs(fs.readFileSync(filePath).toString())
          } else {
            await next()
          }
        })
      },
    ],
    transforms: [{  // 用于 rollup // 插件
      //将.md结尾的文件的内容变成js
      test: context => context.path.endsWith('.md'),
      transform: ({ code }) => mdToJs(code)
    }]
  }
}