# ChangeLog

规范 commit message 的结构，遵循 Augular 规范。发版时，可根据规提交
记录类型(type)为 ``feat`` 和  ``fix`` 的 message 生成相应的特性和
bugfix记录信息

### 1. 规范

使用Augular规范编写 [提交信息结构](./standard.md)

example

```text
<type>(<scope>): <subject>

<body>

<footer>
```

### 2. 使用

```bash
$ npm install     # 安装依赖
$ npm run commit  # 引导式构建提交信息
```

### 3. Commitizen

[Commitizen](https://www.npmjs.com/package/commitizen)规范提交信息结构，通过引导方式帮助使用者构建符合规范的提交信息

使用cz-conventional-changelog作为默认格式配置

- 安装相关依赖

```bash
$ npm install commitizen -D # 构建符合规范的提交信息
$ npm install cz-conventional-changelog -D # 提交信息的格式配置
```

- 配置commitizen构建提交信息的格式，直接使用[cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)推荐配置

```js
// .cz.json

{
  "path": "cz-conventional-changelog"
}
```

> 可使用相应的VSCode插件：[commitizen](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen)

### 4. Commitlint

[Commitlint](https://www.npmjs.com/package/@commitlint/cli)用于校验提交信息的格式，
类似ESLint校验JS代码。配合[@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)使用推荐配置的格式

```js
// commitlint.config.js

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {},
};
```

### 5. Changelog

提交信息符合规范后，可通过 [standard-version](https://www.npmjs.com/package/standard-version)
提取提交类型为feat和fix的提交信息，生成项目变更Changelog报告


```js
// package.json 配置执行命令

{
  "scripts": {
    "commit": "git-cz", // 构建规提交信息
    "changelog": "standard-version" // 自动生成 changelog
  }
}
```

### 6. Husky

[husky](https://www.npmjs.com/package/husky)安装时，会为当前仓库添加git钩子，
卸载husky也会自动清除这些钩子。通过这些钩子，可以实现监听 commit-msg 命令的处理，
并在执行前校验提交信息是否符合规范

```js
// package.json 配置husky

{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -e $GIT_PARAMS"
    }
  }
}
```


### 7. Tools & Config

构建规范Msg引导
- [npm] commitizen
- [npm] cz-conventional-changelog
- [json] .cz.json
- [vscode] commitizen

校验Msg是否符合规范
- [npm] @commitlint/cli
- [npm] @commitlint/config-conventional
- [npm] husky
- [javascript] commitlint.config.js

根据规范Msg生成Changelog
- [npm] standard-version
