---
title: react
date: 2022-08-08 10:30:56
permalink: /pages/c61d32/
categories:
  - pages
  - React
tags:
  - 
---
## react 预备笔记

## 1.准备工作

1. 创建项目 `npm create vite`

2. 配置@路径别名

   2.1.安装node类型声明

   ```js
   npm i -D @types/node
   ```

   2.2.配置vite.config.ts

   ```ts
   import { join } from 'path'
   
   export default defineConfig({
       plugins: [react()],
       // 2. 在 resolve.alias 对象下，配置 @ 的指向路径
       resolve: {
         alias: {
           '@': join(__dirname, './src/')
         }
       }
   })
   ```

   2.3配置 `tsconfig.json` 文件，在 `compilerOptions` 节点下，新增 `"baseUrl": "."` 和 `"paths": { "@/*": [ "src/*" ] }` 两项：

   ```tsx
   /* 新增以下两个配置项，分别是 baseUrl 和 paths */
   "baseUrl": ".",
   "paths": {
   	"@/*": [
   		"src/*"
   	]
   },
   
   ```

   