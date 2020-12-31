# Docs Generator

根据 TSDoc 规范注释生成相应的 API 接口文档，支持 markdown 格式。建议为每个需要暴露给用户的 API 接口
都添加相应的注释，从而生成使用文档。

除了自动生成文档，api-extractor 还能把分散的 `libs/*.d.ts` 文件打包成一个单独声明文件，
避免依赖文件中声明的类型定义变成私有定义。

### 1. 规范

针对需要自动生成文档的接口添加 TSDoc 规范注释

example

````typescript
/**
 * 返回 hello 开头的字符串
 *
 * @param str - input string
 * @returns 'hello xxx'
 *
 * @example
 * ```ts
 * myFirstFunc('ts') => 'hello ts'
 * ```
 *
 * @beta
 */

export function myFirstFunc(str: string): string {
  return `hello world, ${str}`;
}
````

### 2. 使用

```bash
$ npm install   # 安装依赖
$ npm run api   # 生成接口报告，并把libs/*.d.ts文件合并成单个声明文件
$ npm run docs  # 根据接口报告生成markdown文档
```

### 3. api-extractor

- 根据遵循 TSDoc 规范的注释生成 API 报告
- 把遵循 TSDoc 规范的注释生成 metadata 数据描述
- 把 `libs/*.d.ts` 文件合并成单个声明文件

> tsconfig.json 配置中支持声明文件生成，并保留注释

通过配置 api-extractor.json 文件启动相应的功能

```bash
$ npx api-extractor init  # 初始化默认配置
```

```js
// api-extractor.json 配置

{
  "$schema": "https://developer.microsoft.com/json-schemas/api-extractor/v7/api-extractor.schema.json",
  "mainEntryPointFilePath": "./typings/index.d.ts",   // 解析文件的主要入口
  "bundledPackages": [],                              // 依赖分析合并指定依赖的声明
  "apiReport": {
    "enabled": true,                                  // 是否生成api报告
    "reportFileName": "<unscopedPackageName>.api.md", // 报告文件名称 ([name].api.md)
    "reportFolder": "<projectFolder>/temp/",          // 报告存放目录
    "reportTempFolder": "<projectFolder>/temp/"       // 临时存放目录(同上时可避免报错)
  },
  "docModel": {
    "enabled": true                                   // 是否生成文档模板,用于生成文档 ([name].api.json)
    "apiJsonFilePath": "<projectFolder>/temp/<unscopedPackageName>.api.json"
  },
  "dtsRollup": {
    "enabled": true,                                  // 是否打包合并 libs/*.d.ts 文件
    "untrimmedFilePath": "./typings/<unscopedPackageName>.d.ts" // 合并后覆盖式写入命名文件
  },
  "tsdocMetadata": {
    "enabled": false                                  // 是否生成Metadata文件，用于指定TSDoc版本
  }
}
```

### 4. api-documenter

- 根据 metadata 数据描述生成 markdown 等文档

```js
// package.json 配置执行命令

{
  "scripts": {
    "api": "api-extractor run",
    "docs": "api-documenter markdown --input-folder ./temp --output-folder ./docs"
  }
}
```

### 5. 相关文档

[API Extractor](https://api-extractor.com/pages/setup/invoking/)

[API Documenter](https://api-extractor.com/pages/overview/demo_docs/)

[Comment Structure](https://api-extractor.com/pages/tsdoc/doc_comment_syntax/)
