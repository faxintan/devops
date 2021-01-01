# Standard 

## Message Structure

[Angular standard](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)

example

```text
<type>(<scope>): <subject>
// empty line
<body>
// empty line
<footer>
```

三段式，Header, Body, Footer, Header为必填。任何一行都不得超过72个字符，避免自动换行影响美观。

#### Header

``type``: 提交代码类别，支持以下标识：
| type | desc |
| ---- | ---- |
| feat | 新功能、新特性 |
| fix  | 修复问题、修复缺陷 |
| docs | 仅包含文档的修改 |
| style | 格式化变动，不影响代码逻辑 |
| refactor | 代码重构 |
| perf | 提高性能的修改 |
| improvement | 对当前功能改进 |
| test | 添加或修改测试相关代码 |
| build | 构建工具或外部依赖的修改 |
| ci | 持续集成的配置文件或脚本修改 |
| chore | 不修改源代码和测试代码的修改，如发版打tag的标识 |
| revert | 撤销某次提交 |



> Tips: type为feat或fix时，该commit将出现在Changelog中，其它情况可根据情况自行决定

``scope``: 提交代码影响范围，比如数据层、控制层、视图层等等

``subject``: 提交代码目的的简短描述，内容按以下规则：
- 不超过50个字符
- 以动词开头
- 第一个字母小写
- 结尾不加句号

#### Body

说明代码变动的动机，以及与以前行为的对比

example

```text
More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
```

#### Footer

Footer 只用于两种情况，不兼容变动 或 关闭 Issue

``不兼容变动``：如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法

```text
BREAKING CHANGE: isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
    }

    After:

    scope: {
      myAttr: '@',
    }

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.
```

``关闭 Issue``：如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 

```text
Closes #123, #245, #992
```

#### Revert

还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header

```text
revert: feat(pencil): add 'graphiteWidth' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

> Tips: 如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的Reverts小标题下面。




### Changelog Generator

conventional-changelog 就是生成 Change log 的工具，运行下面的命令即

```bash
# 全局安装
npm install -g conventional-changelog
# 进入项目根目录
cd my-project
# CHANGELOG.md头部添加新的 Change log
conventional-changelog -p angular -i CHANGELOG.md -w
# 生成所有发布的 Change log
conventional-changelog -p angular -i CHANGELOG.md -w -r 0
```

## 查看提交记录

1. 提供更多的历史信息，方便快速浏览
```bash
git log <last tag> HEAD --pretty=format:%s
```

2. 可以过滤某些commit（比如文档改动），便于快速查找信息
```
git log <last release> HEAD --grep feature
```

3. 可以直接从commit生成Changelog
<img src="https://www.ruanyifeng.com/blogimg/asset/2016/bg2016010603.png" />
