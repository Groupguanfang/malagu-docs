---
title: 贡献
description: Malagu 是 MIT 许可的开源项目，Malagu 的开发者社区正在快速发展，只有在社区的帮助下，Malagu 才能得以持续发展。
---

## 您能提供什么帮助？

Malagu 没有一家大公司在后面支持，大家都是出于学习和兴趣，业余或者全职为 Malagu 社区做贡献。但是，我们希望使这个框架更加**强大**，可以完全专注于为您提供更为好用的解决方案。您可以通过以下方式帮助我们：

- 通过 [GitHub 项目](https://github.com/cellbang/malagu)上的赞助功能为我们捐款
- 购买我们的企业服务，例如代码 Review 服务
- 直接与我联系：[kevin@cellbang.com](mailto:kevin@cellbang.com)

## 企业服务

- 提供技术指导和架构审查
- 指导团队成员
- 提供最佳实践
- 解决安全和性能问题
- 辅助代码审查
- 长期支持（LTS）和升级协助

## 预备技能

- [REPO](https://zhuanlan.zhihu.com/p/31289463)
- [风格之争](https://zhuanlan.zhihu.com/p/31289463)
- [MONO VS MULTI](https://zhuanlan.zhihu.com/p/31289463)

### 语言

- [es6](https://es6.ruanyifeng.com/)
- [typescript](https://www.tslang.cn/)

### 技术

- [nodejs](http://nodejs.cn/)
- 依赖注入 IOC [InversifyJS](http://inversify.io/)
- [设计模式](https://juejin.im/post/5cb534386fb9a0685727e1eb)《Head First 设计模式》
- 面向对象编程规范《Head First 设计模式》
- linux 脚本

### 工具

- [git](https://www.liaoxuefeng.com/wiki/896043488029600)
- [npm](https://www.npmjs.cn/)
- [yarn](https://yarn.bootcss.com/docs/)
- [learn](https://lerna.js.org/)
- [webpack](https://www.webpackjs.com/)
- [tslink](https://palantir.github.io/tslint/)
- [typedoc](https://typedoc.org/)
- [sinon](https://sinonjs.org/)
- [mocha](https://mochajs.org/)
- [nyc](https://istanbul.js.org/)
- [webdriverio](https://www.ibm.com/developerworks/cn/web/1306_chenlei_webdriver/index.html)
- [concurrently](https://www.npmjs.com/package/concurrently)
- [travis](https://travis-ci.org/)
- [npm vs yarn](https://zhuanlan.zhihu.com/p/27449990)

## 框架目录结构

框架本身的实现也是组件化的，有一个个基础组件组成框架完整功能，每一个组件都是一个 nodejs 项目，所以才有 monorepo 风格组织框架的目录结构。

- CHANGELOG.md
- LICENSE
- README.md
- configs 通用配置
  - base.tsconfig.json
  - build.tslint.json
  - errors.tslint.json
  - mocha.opts
  - nyc.json
  - typedoc-tsconfig.json
  - typedoc.json
  - warnings.tslint.json
- dev-packages 开发工具包
  - cli/
  - ext-scripts/
- doc/
- lerna-debug.log
- lerna.json
- package.json
- packages 组件包
  - core/
  - security/
- scripts/ 脚本
- tsconfig.json
- tsfmt.json
- tslint.json
