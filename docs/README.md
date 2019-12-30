
# 快速开始

## 介绍

[![Downloads](https://img.shields.io/npm/dm/j-weapons.svg)](https://www.npmjs.com/package/j-weapons) [![Version](https://img.shields.io/npm/v/j-weapons.svg)](https://www.npmjs.com/package/j-weapons) [![Known Vulnerabilities](https://snyk.io/test/github/GHBJayce/j-weapons/badge.svg?targetFile=package.json)](https://snyk.io/test/github/GHBJayce/j-weapons?targetFile=package.json)

一个开箱即用的函数库。平时自己在做开发时所收集的一些常用函数方法。



## 安装

```shell
npm install j-weapons
```

或者使用CDN

1. unpkg：https://unpkg.com/j-weapons/dist/j-weapons.min.js
1. jsdelivr：https://cdn.jsdelivr.net/npm/j-weapons/dist/j-weapons.min.js

> 建议使用带版本号的CDN



## 使用

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
[运行代码](https://codepen.io/GHBJayce/pen/eYmGNey)



# 武器库

## 类型

### getType

`getType(needle)`

获取数据类型，简洁版。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待识别对象|*||

```
console.log(JW.getType([]));
```
[运行代码](https://codepen.io/GHBJayce/pen/MWYEwGO)


### isEmpty

`isEmpty(needle, strict)`

检测是否为空。

返回值：Boolean

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待检测对象|*||
strict|启用严格模式。<br>非严格模式，以下字符串视为空：<br>`'0'` `'null'` `'undefined'` `'false'` `'NaN'`|Boolean||false

```js
console.log(JW.isEmpty(0));
console.log(JW.isEmpty('0'));
console.log(JW.isEmpty('0', 1));
```
[运行代码](https://codepen.io/GHBJayce/pen/wvBraRo)


### isFloat

`isFloat(needle)`

检测是否为浮点型。

返回值：Boolean

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待检测对象|*||

```js
console.log(JW.isFloat(1));
console.log(JW.isFloat(1.1));
console.log(JW.isFloat([]));
```
[运行代码](https://codepen.io/GHBJayce/pen/yLyzNWv)


### isRealNaN

`isRealNaN(needle)`

检测是否为`NaN`。

返回值：Boolean

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待检测对象|*||

```js
console.log(JW.isRealNaN('NaN'));
console.log(JW.isRealNaN(NaN));
console.log(JW.isRealNaN({}));
```
[运行代码](https://codepen.io/GHBJayce/pen/rNaGVEZ)


### isSet

`isSet(needle)`

检测是否设置，以下类型视为未设置：`undefined` `NaN` `null` `false`。

返回值：Boolean

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待检测对象|*||

```js
console.log(JW.isSet(undefined));
console.log(JW.isSet(NaN));
console.log(JW.isSet(null));
console.log(JW.isSet(false));
console.log(JW.isSet(0));
```
[运行代码](https://codepen.io/GHBJayce/pen/qBEPOWG)


### toNumber

`toNumber(needle)`

转换为Number类型。

返回值：Number

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待转换对象|String||

```js
console.log(JW.toNumber('1'));
```
[运行代码](https://codepen.io/GHBJayce/pen/vYEeNyG)


### toObject

`toObject(needle)`

转换为对象数据类型。

返回值：Object

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待转换对象|String \| Array||

```js
console.log(JW.toObject([1, 2, 3]));
console.log(JW.toObject('123'));
```
[运行代码](https://codepen.io/GHBJayce/pen/gObGagg)


### typeofStr

`typeofStr(needle)`

获取数据类型，冗长版。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待检测对象|*||

```js
console.log(JW.typeofStr([]));
console.log(JW.typeofStr(''));
```
[运行代码](https://codepen.io/GHBJayce/pen/abzLvJg)



## 对象

### toArray

`toArray(needle)`

将对象转化为数组。

返回值：Array

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待转换对象|Object||
options|选项|Number|`1` 对象所有属性值组成的数组<br>`2` 保留结构，外面套一层数组|1

```js
console.log(JW.toArray({a: 1, b: 2}));
console.log(JW.toArray({a: 1, b: 2}, 2));
```
[运行代码](https://codepen.io/GHBJayce/pen/WNbZQZz)

