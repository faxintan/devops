# Commit Message


## Commit Message

[Angular standard](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)

1. 提供更多的历史信息，方便快速浏览
```bash
git log <last tag> HEAD --pretty=format:%s
```

2. 可以过滤某些commit（比如文档改动），便于快速查找信息
```
git log <last release> HEAD --grep feature
```

3. 可以直接从commit生成Change log
<img src="https://www.ruanyifeng.com/blogimg/asset/2016/bg2016010603.png" />

### Message Format
example
```js
<type>(<scope>): <subject>
// empty line
<body>
// empty line
<footer>
```

三段式，Header, Body, Footer, Header为必填。任何一行都不得超过72个字符，避免自动换行影响美观。

#### Header

``type``: commit 类别，只能使用一下标识：
- feat: 新功能
- fix: 修补bug
- docs: 文档修改
- style: 格式化
- refactor: 重构
- test: 增加测试单元
- chore: 构建过程或者辅助工具变动

> Tips: type为feat或fix时，该commit将出现在Change log中，其它情况可根据情况自行决定

``scope``: commit 影响范围，比如数据层、控制层、视图层等等

``subject``: commit 目的的简短描述，内容按一下规则：
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


### Commitizen

Commitizen是一个撰写合格 Commit message 的工具。安装到全局，并使用新的指令提交commit

```bash
# 全局安装
npm install -g commitizen
# 项目根目录中进行初始化
commitizen init cz-conventional-changelog --save --save-exact
```

后面该项目凡是要用到git commit命令，一律改为使用git cz。这时，就会出现选项，用来生成符合格式的 Commit message

<img src="https://www.ruanyifeng.com/blogimg/asset/2016/bg2016010605.png" />


### Change log Generator

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
