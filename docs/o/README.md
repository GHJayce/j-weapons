
# 快速开始

## 介绍

**!!!旧版本文档不再维护，请[前往新版本文档](https://ghjayce.github.io/j-weapons/n/)!!!**

j-weapons，J武器。一个开箱即用的函数库。提供了日常开发时所需的一些常用函数方法。

![npm](https://img.shields.io/npm/dm/j-weapons)
![npm](https://img.shields.io/npm/v/j-weapons?color=%2346c018)
![npm bundle size](https://img.shields.io/bundlephobia/min/j-weapons?color=%2346c018)
![NPM](https://img.shields.io/npm/l/j-weapons?color=%2346c018)
[![Known Vulnerabilities](https://snyk.io/test/github/GHJayce/j-weapons/badge.svg?targetFile=package.json)](https://snyk.io/test/github/GHJayce/j-weapons?targetFile=package.json)




## 安装和使用
[看看JW都有些啥](https://npm.runkit.com/j-weapons)

### npm
```shell
npm install j-weapons
```

使用：
```js
// 按需引入
import {isEmpty} from 'j-weapons';

isEmpty('')
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


### isEmpty

`isEmpty(needle[, strict])`

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


## URL

### decodeUrl

`decodeUrl(needle)`

url解码。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待解码对象|String||

```js
console.log(JW.decodeUrl('https%3a%2f%2fgithub.com%2fGHJayce%2fj-weapons'));
```


### encodeUrl

`encodeUrl(needle)`

url编码。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待编码对象|String||

```js
console.log(JW.encodeUrl('https://github.com/GHJayce/j-weapons'));
```


### getUrlParams

`getUrlParams(url)`

获取指定url的所有参数。

返回值：Object

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
url|链接|String||

```js
console.log(JW.getUrlParams('https://api.github.com/search/repositories?q=j-weapons&per_page=1&p=1&sort=stargazers_count'));
```


### getCurrentUrlParams

`getCurrentUrlParams()`

获取当前浏览器url参数。

返回值：Object

```js
console.log(JW.getCurrentUrlParams());
```


### getUrlParam

`getUrlParam(url, key[, defaultVal])`

获取指定url的指定参数。

返回值：Mixed

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
url|链接|String||
key|参数名称|String||
defaultVal|未设定（`JW.isSet`）时的默认值|*||

```js
var url = 'https://api.github.com/search/repositories?q=j-weapons&per_page=1&p=1&sort=stargazers_count';
console.log(JW.getUrlParam(url, 'q'));
console.log(JW.getUrlParam(url, 'author', 'GHJayce'));
```


### getCurrentUrlParam

`getCurrentUrlParam(key[, defaultVal])`

获取当前浏览器url的指定参数。

返回值：Mixed

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
key|参数名称|String||
defaultVal|未设定（`JW.isSet`）时的默认值|*||

```js
console.log(JW.getCurrentUrlParam('q'));
console.log(JW.getCurrentUrlParam('author', 'GHJayce'));
```


### setUrlParams

`setUrlParams(url, key[, val])`

设置指定URL单个或多个参数。设置已存在的参数名称，旧值会被覆盖。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
url|待设定参数链接|*||
key|参数名称|String \| Number \| Object||
val|参数值|Undefined \| String \| Number||

```js
var url = 'https://github.com/GHJayce/j-weapons';
console.log(JW.setUrlParams(url, 'q'));
console.log(JW.setUrlParams(url, 'author', 'GHJayce'));
console.log(JW.setUrlParams(url, {
    author: 'GHJayce'
}));
```


### setCurrentUrlParams

`setCurrentUrlParams(key[, val])`

设置当前URL单个或多个参数。设置已存在的参数名称，旧值会被覆盖。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
key|参数名称|String \| Number \| Object||
val|参数值|Undefined \| String \| Number||

```js
console.log(JW.setCurrentUrlParams('q'));
console.log(JW.setCurrentUrlParams('author', 'GHJayce'));
console.log(JW.setCurrentUrlParams({
    author: 'GHJayce'
}));
```



## 对象

### getFirstKey

`getFirstKey(needle)`

获取第一个属性键名，没有则返回undefined。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待获取对象|Object||

```js
console.log(JW.getFirstKey({a: 1, b: 2}));
```


### getFirstItem

`getFirstItem(needle)`

获取第一个属性，没有则返回undefined。

返回值：Object|Undefined

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待获取对象|Object||

```js
console.log(JW.getFirstItem({a: 1, b: 2}));
```


### getLastKey

`getLastKey(needle)`

获取最后一个属性键名，没有则返回undefined。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待获取对象|Object||

```js
console.log(JW.getLastKey({a: 1, b: 2}));
```


### getLastItem

`getLastItem(needle)`

获取最后一个属性，没有则返回undefined。

返回值：Object|Undefined

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待获取对象|Object||

```js
console.log(JW.getLastItem({a: 1, b: 2}));
```


### toArray

`toArray(needle[, options])`

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


### hasKey

`hasKey(haystack, needle)`

将对象转化为数组。

返回值：Array

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
haystack|待检查对象|Object||
needle|待查找的key|String\|Number\|Boolean||

```js
console.log(JW.hasKey({a: 1, b: 2}, 'd')); // false
console.log(JW.hasKey({a: 1, b: 2, 1: 2}, 1)); // true
console.log(JW.hasKey({a: 1, b: 2, true: 1}, true)); // true
```



## 字符串

### clueTrim

`String.prototype.clueTrim([needle])`

去除首尾字符。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|可为空，默认去除空白符。<br>可指定要去除字符，多个字符使用英文逗号分隔|String||

```js
console.log(' 123 '.clueTrim());
console.log(' ca123ca '.clueTrim(' ,c,a'));
```


### clueTrimLeft

`String.prototype.clueTrimLeft([needle])`

去除开头字符。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|可为空，默认去除空白符。<br>可指定要去除字符，多个字符使用英文逗号分隔|String||

```js
console.log(' 123 '.clueTrimLeft());
console.log(' ca123ca '.clueTrimLeft(' ,c,a'));
```


### clueTrimRight

`String.prototype.clueTrimRight([needle])`

去除开头字符。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|可为空，默认去除空白符。<br>可指定要去除字符，多个字符使用英文逗号分隔|String||

```js
console.log(' 123 '.clueTrimRight());
console.log(' ca123ca '.clueTrimRight(' ,c,a'));
```


### toLower

`String.prototype.toLower()`

转化为小写。

返回值：String

```js
console.log('banana'.toLower());
```


### toUpper

`String.prototype.toUpper()`

转化为大写。

返回值：String

```js
console.log('banana'.toUpper());
```


### insert

`String.prototype.insert(needle, index)`

插入字符串。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|要插入的字符串|String||
index|插入的索引位置|Number||

```js
console.log('banan'.insert('a', 5));
```


### indexReplace

`String.prototype.indexReplace(needle, index)`

索引位置替换。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|替换值|String||
index|被替换值的位置|Number||

```js
console.log('banena'.indexReplace('a', 3));
```


### rangeIndexReplace

`String.prototype.rangeIndexReplace(needle, startIndex, endIndex)`

索引范围替换。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|替换值|String||
startIndex|开始替换的索引位置|Number||
endIndex|结束替换的索引位置|Number||

```js
console.log('zxcvbnm'.rangeIndexReplace('abc', 3, 4));
```


### getShowCount

`String.prototype.getShowCount(needle)`

获取指定字符串出现次数。

返回值：Number

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待统计字符串|String||

```js
console.log('banana'.getShowCount('c'));
```


### getShowCounts

`String.prototype.getShowCounts()`

统计字符串中所有字符的出现次数。

返回值：Object

```js
console.log('banana'.getShowCounts());
```


### batchReplace

`String.prototype.batchReplace(needle)`

字符串批量替换。

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|映射对象|Object||

返回值：String

```js
var str1 = 'C = (a + b) * 2';
var str2 = str1.batchReplace({
    a: 10,
    b: 5,
});
console.log(eval(str2));
```


### sprintf

`String.prototype.sprintf([...])`

将传入的萝卜（形参）放到对应的坑位（%s）上。

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
arguments|萝卜|String||

返回值：String

```js
console.log('Welcome back %s, This is a %s moment.'.sprintf('Jayce', 'wonderful'));
```



## 公共

### getLength

`getLength(needle)`

获取数据长度。

返回值：Number

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待获取长度对象|String \| Array \| Object||

```js
console.log(JW.getLength('banana'));
console.log(JW.getLength('banana'.split('')));
console.log(JW.getLength({a: 1, b: 1}));
```


### deepCopy

`deepCopy(needle)`

对象/数组深拷贝。

返回值：Array|Object

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待深拷贝对象|Array \| Object||

```js
var arrOrigin = [1, 2, 3];
var arr0 = JW.deepCopy(arrOrigin);
var arr1 = JW.deepCopy(arr0);
arr0[0] = 0;
console.log(arrOrigin, arr0, arr1);
```


### getFirstVal

`getFirstVal(needle)`

获取第一个元素值。

返回值：Mixed

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待获取对象|String \| Array \| Object||

```js
console.log(JW.getFirstVal('123'));
console.log(JW.getFirstVal([1, 2, 3]));
console.log(JW.getFirstVal({
    a: 1,
    b: 2,
    c: 3,
}));
```


### getLastVal

`getLastVal(needle)`

获取最后一个元素值。

返回值：Mixed

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待获取对象|String \| Array \| Object||

```js
console.log(JW.getLastVal('123'));
console.log(JW.getLastVal([1, 2, 3]));
console.log(JW.getLastVal({
    a: 1,
    b: 2,
    c: 3,
}));
```


### getCallbackArguments

`getCallbackArguments(needle)`

获取函数的形参名。

返回值：Array

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|函数|Function||

```js
console.log(JW.getCallbackArguments((a, b) => {}));
console.log(JW.getCallbackArguments(function (  a,   b) {}));
```


### hasGetIndex

`hasGetIndex(haystack, needle)`

检查是否存在值，存在返回索引/key，不存在返回-1。

返回值：String|Number

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
haystack|查找范围|String \| Array \| Object||
needle|要查找的值|*||

```js
console.log(JW.hasGetIndex('banana', 'c'));
console.log(JW.hasGetIndex('', 'a'));
```


### has

`has(haystack, needle)`

检查是否存在值，存在返回索引/key，不存在返回-1。

返回值：Boolean

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
haystack|查找范围|String \| Array \| Object||
needle|要查找的值|*||

```js
console.log(JW.has('banana', 'c'));
console.log(JW.has('', 'a'));
```


### pluck

`pluck(haystack, needle, key)`

类似PHP的array_column，摘取数组中对象元素的某个key成为一个集合。

返回值：Array|Object

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
haystack|需要摘取的数组|Array||
needle|需要摘下的字段|string|null|
key|作为摘下字段的key下标|string||undefined

```js
const arr1 = [{id: 1, name: 'jay'}, {id: 2, name: 'jack'}]
JW.pluck(arr1, 'id'); // [1,2]
JW.pluck(arr1, 'name', 'id'); // {1:'jay',2:'jack'}
JW.pluck(arr1, null, 'id'); // {1: {id:1, name:'jay'}, 2: {id:2, name:'jack'}}
```


### cache

`cache([name])`

本地缓存封装，支持对象格式、数值递增、递减等

返回值：Mixed

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
name|本地缓存驱动|String|`local`、`session`|`local`

```js
JW.cache().set('name', 'jayce');
JW.cache().get('name');
JW.cache().incr('age');
JW.cache().incr('age', 10);
JW.cache().decr('age');
JW.cache().hSet('obj', {
    name: 'jayce',
});
JW.cache().hGet('obj'); // {name: 'jayce'}
JW.cache('session').clear(); // 清空所有key
JW.cache().del('name', 'age'); // 删除key
```


# 更新日志

[CHANGELOG](https://github.com/GHJayce/j-weapons/blob/master/CHANGELOG.md)