---
title: 前端集成Vite
description: 结合React/Vue适配Vite
---

通过手动创建启动文件的方式进行适配，目前仅支持前端项目。

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
在Vue项目中，`.tsx`后缀文件中无法使用依赖注入。
::

## Vue

### 创建项目

```bash [terminal]
npm create vite@latest malagu-vue-for-vite --template vue-ts
npm i
npm i -D @malagu/core @malagu/vue
```

### 适配项目

```typescript
// src/main.ts
import { createApp } from "vue";
import { App } from "@malagu/vue";
import Root from "./App.vue";

@App(createApp(Root))
export default class {}
```

```typescript
// src/module.ts
import { autoBind } from "@malagu/core";
import "./main";

export default autoBind();
```

### 添加启动文件

添加`src/boot.ts`文件，手动创建容器并加载模块：

```typescript [src/boot.ts]
import "reflect-metadata";
import "setimmediate";
import { Container } from "inversify";
import { Application } from "@malagu/core/lib/common/application/application-protocol";
import { ContainerProvider } from "@malagu/core/lib/common/container/container-provider";
import { currentThis } from "@malagu/core/lib/common/utils";
import commonModule from "@malagu/core/lib/common/static-module";
import browserModule from "@malagu/core/lib/browser/static-module";

function bootstrap() {
  currentThis.malaguProps = {
    malagu: {
      hostDomId: "app",
    },
  };
  const container = new Container({ skipBaseClassChecks: true });
  container.load(commonModule, browserModule);
  import("@malagu/vue/lib/browser/module")
    .then((res) => container.load(res.default))
    .then(() => import("./module"))
    .then((res) => container.load(res.default))
    .then(() => {
      ContainerProvider.set(container);
      const application = container.get<Application>(Application);
      application.start().catch((reason) => {
        console.error(`Failed to start the ${application.constructor.name}.`);
        if (reason) {
          console.error(reason);
        }
      });
    });
}

bootstrap();
```

### 配置启动

编辑`index.html`文件，修改入口文件为`src/boot.ts`：

```html [index.html]
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/boot.ts"></script>
  </body>
</html>
```

## React

### 创建项目

```bash [terminal]
npm create vite@latest malagu-react-for-vite --template react-ts
npm i
npm i -D @malagu/core
```

### 添加 Shell 和 App 修饰器

添加以下文件：

```typescript [src/common/constant.ts]
export const APP = Symbol("APP");
```

```typescript [src/annotation/app.ts]
import { Constant } from "@malagu/core";
import { APP } from "../common/constant";

export function App(app: any, rebind: boolean = false): ClassDecorator {
  return (t: any) => {
    Constant(APP, app, rebind)(t);
  };
}
```

```typescript [src/shell/index.ts]
import { Component, Autowired, Optional } from "@malagu/core";
import { ApplicationShell } from "@malagu/core/lib/browser";
import { APP } from "../common/constant";

@Component({ id: ApplicationShell, rebind: true })
export class Shell implements ApplicationShell {
  @Optional()
  @Autowired(APP)
  protected readonly app: any;

  attach(host: HTMLElement): void {
    this.app(host);
  }
}
```

### 适配项目

```typescript
// src/createApp.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export function createApp(el: HTMLElement) {
  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
```

修改`src/main.tsx`为`src/main.ts`，编辑内容如下：

```typescript [src/main.ts]
import { App } from "./annotation/app";
import { createApp } from "./createApp";
import "./index.css";

@App(createApp)
export default class {}
```

添加`src/module.ts`：

```typescript [src/module.ts]
import "./shell";
import { autoBind } from "@malagu/core";

import "./main";
export default autoBind();
```

### 添加启动文件

添加启动文件`src/boot.ts`：

```typescript [src/boot.ts]
import "reflect-metadata";
import "setimmediate";
import { Container } from "inversify";
import { Application } from "@malagu/core/lib/common/application/application-protocol";
import { ContainerProvider } from "@malagu/core/lib/common/container/container-provider";
import { currentThis } from "@malagu/core/lib/common/utils";
import commonModule from "@malagu/core/lib/common/static-module";
import browserModule from "@malagu/core/lib/browser/static-module";

function bootstrap() {
  currentThis.malaguProps = {
    malagu: {
      hostDomId: "app",
    },
  };
  const container = new Container({ skipBaseClassChecks: true });
  container.load(commonModule, browserModule);
  import("./module")
    .then((res) => container.load(res.default))
    .then(() => {
      ContainerProvider.set(container);
      const application = container.get<Application>(Application);
      application.start().catch((reason) => {
        console.error(`Failed to start the ${application.constructor.name}.`);
        if (reason) {
          console.error(reason);
        }
      });
    });
}

bootstrap();
```

### 配置启动

编辑`index.html`文件，修改入口文件为`src/boot.ts`：

```html [index.html]
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/boot.ts"></script>
  </body>
</html>
```

### tsx 文件下启用装饰器

默认请况下无法在后缀为`.tsx`的文件中使用装饰器，需进行以下配置：

安装依赖

```bash [terminal]
npm i -D @babel/plugin-proposal-decorators
```

修改配置`vite.config.ts`：

```typescript [vite.config.ts]
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
-  plugins: [react()]
+  plugins: [react({
+    babel: {
+      parserOpts: {
+        plugins: ['decorators-legacy']
+      }
+    }
+  })]
})
```

验证：将`index.html`中的`src/main.ts`修改为`src/main.tsx`尝试运行即可。
