# 快速开始

## 安装和使用
[看看JW都有些啥](https://npm.runkit.com/j-weapons)

### npm
::: code-group

```shell [npm]
npm install j-weapons
```

```shell [pnpm]
pnpm add j-weapons
```
:::

使用：
```ts
// 按需引入，默认会引入String原型方法
import {isEmpty} from 'j-weapons';

isEmpty('');

// 仅使用String原型方法
import 'j-weapons/string';
"aspeedaa".clueTrim('a');
```

### 浏览器直接引入

使用CDN

- 引入指定版本：
  - unpkg：https://unpkg.com/j-weapons@x.x.x/dist/j-weapons.umd.min.js
  - jsdelivr：https://cdn.jsdelivr.net/npm/j-weapons@x.x.x/dist/j-weapons.umd.min.js

- 引入最新版：
  - unpkg：https://unpkg.com/j-weapons/dist/j-weapons.umd.min.js
  - jsdelivr：https://cdn.jsdelivr.net/npm/j-weapons/dist/j-weapons.umd.min.js

> 强烈建议生产环境使用带版本号的CDN

使用：
```js
// 正确引入j-weapons将得到一个全局对象
console.log(window.JW);
console.log(JW.version);
console.log(JW.getType([]));
```

