# 快速开始

## 安装

```shell
npm install j-weapons
```

或者使用CDN

- 引入最新版：
  1. unpkg：https://unpkg.com/j-weapons/dist/j-weapons.min.js
  1. jsdelivr：https://cdn.jsdelivr.net/npm/j-weapons/dist/j-weapons.min.js

- 引入指定版本：
  1. unpkg：https://unpkg.com/j-weapons@1.5.0/dist/j-weapons.min.js
  2. jsdelivr：https://cdn.jsdelivr.net/npm/j-weapons@1.5.0/dist/j-weapons.min.js

> 强烈建议生产环境使用带版本号的CDN


## 使用
[看看JW都有些啥](https://npm.runkit.com/j-weapons)
```js
import JW from 'j-weapons';
// or 按需引入
import {isEmpty} from 'j-weapons';
```

其它使用场景
```js
// 正确引入j-weapons将得到一个全局对象
console.log(window.JW);
console.log(JW.version);
console.log(JW.getType([]));

// 或者你喜欢将所有方法暴露出来
JW.exposesToGlobal();
getType([]);
```

