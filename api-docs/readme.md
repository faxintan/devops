# Docs Generator

根据TSDoc规范注释生成相应的API接口文档，支持markdown格式。建议为每个需要暴露给用户的API接口
都添加相应的注释，从而生成使用文档。

除了自动生成文档，api-extractor还能把分散的 ``libs/*.d.ts`` 文件打包成一个单独声明文件，
避免依赖文件中声明的类型定义变成私有定义。

### 规范

针对需要自动生成文档的接口添加TSDoc规范注释

example

```typescript
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
	return `hello world, ${str}`
}
```

### 使用

```bash
$ npm install   # 安装依赖
$ npm run api   # 生成接口报告，并把libs/*.d.ts文件合并成单个声明文件
$ npm run docs  # 根据接口报告生成markdown文档
```

### api-extractor

- 根据遵循TSDoc规范的注释生成API报告
- 把遵循TSDoc规范的注释生成metadata数据描述
- 把 ``libs/*.d.ts`` 文件合并成单个声明文件

> tsconfig.json配置中支持声明文件生成，并保留注释

通过配置api-extractor.json文件启动相应的功能

```bash
$ npx api-extractor init  # 初始化默认配置
```

```js
// api-extractor.json 配置

{
	"$schema": "https://developer.microsoft.com/json-schemas/api-extractor/v7/api-extractor.schema.json",
	"mainEntryPointFilePath": "./typings/index.d.ts", // 解析文件的主要入口
	"bundledPackages": [],                            // 依赖分析合并指定依赖的声明
	"apiReport": {
		"enabled": true,                                // 允许生成api报告
		"reportFolder": "./docs/"                       // api报告存放的目录
	},
	"docModel": {
		"enabled": true                                 // 允许生成metadata描述文件
	},
	"dtsRollup": {
		"enabled": false,                               // 允许打包合并 *.d.ts 文件
		"untrimmedFilePath": "./typings/index.d.ts"     // 合并后存放文件,覆盖入口文件
	}
}
```

### api-documenter

- 根据metadata数据描述生成markdown等文档

### 相关文档

[API Extractor](https://api-extractor.com/pages/setup/invoking/)

[API Documenter](https://api-extractor.com/pages/overview/demo_docs/)

[Comment Structure](https://api-extractor.com/pages/tsdoc/doc_comment_syntax/)
