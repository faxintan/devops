# Lerna

[offical doc](https://lerna.js.org/)

[getting-started](https://github.com/lerna/lerna#getting-started)


## init

Create a new lerna repo or upgrade an existing repo to the current version of Lerna.

## create

Create a new lerna-managed package
- --access: set publishConfig.access value [public]
- --registry: Configure the package's publishConfig.registry [.npmrc]
- --bin: Package has an executable

## ls

List all of the public packages in the current Lerna repo.

## add

Add a local or remote packaage as dependency to matched packages
- --scope: specified package
- --dev: add to devDenpendencies
- --peer: add to peerDependencies

```bash
lerna add <package>[@version] [--dev] [--exact] [--peer]
```

## exec (remove)

Execute an arbitrary command in each package
- --scope: specified package
- --stream: Stream output from child processes immediately
- --parallel: Similar to --stream, but with prefixed streaming output
- --profile-location: Profiles the command executions and produces a performance profile
- --no-bail: executing in all packages regardless of exit code

```bash
# Usage
lerna exec -- <command> [..args] # runs the command in all packages

# Examples
lerna exec --scope=package -- yarn remove lodash # remove dependency
lerna exec --parallel -- babel src -d lib -w # run the heavy build task
```

## run

Run an npm script in each package that contains that script
- options just like exec command

```bash
# Usage
lerna run <script> -- [..args] # runs npm run my-script in all packages that have it

# Examples
lerna exec --scope=package -- yarn remove lodash # remove dependency
lerna exec --parallel -- babel src -d lib -w # run the heavy build task
```

## link

Symlink together all packages that are dependencies of each other
- --force-local: always symlink local dependencies regardless of matching version range

## clean

Remove the node_modules directory from all packages

## bootstrap

Bootstrap the packages in the current Lerna repo. Installing all their dependencies and linking any cross-dependencies.

## publish

Publish packages in the current project
- --npm-tag [tagname]: Publish to npm with the given npm dist-tag (Defaults to latest)
- --skip-git: Don't run any git commands


```bash
lerna publish              # publish packages that have changed since the last release
lerna publish from-git     # explicitly publish packages tagged in the current commit
lerna publish from-package # explicitly publish packages where the latest version is not present in the registry
```

## Lerna Config

example

```json
{
  "__npmClient": "执行命令所用的客户端，默认为npm",
  "npmClient": "yarn",
  "__useWorkspaces": "pkg 中同时配置 {'workspaces': ['packages/*']}",
  "useWorkspaces": true,
  "__command": "命令相关配置",
  "command": {
    "__publish": "发布时配置",
    "publish": {
      "__ignoreChanges": "校验版本变更时需要忽略的文件",
      "ignoreChanges": ["ignored-file", "*.md"],
      "__message": "发布时的自定义提示消息",
      "message": "chore(release): publish"
    },
    "__bootstrap": "安装依赖配置",
    "bootstrap": {
      "ignore": "component-*",
      "__npmClientArgs": "执行 lerna bootstrap命令时传的参数",
      "npmClientArgs": ["--no-package-lock"]
    }
  },
  "__packages": "指定存放包的位置",
  "packages": ["packages/*"],
  "__version": "当前版本号",
  "version": "0.0.0"
}
```

