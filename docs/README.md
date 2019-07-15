
# 入门

## 简介

j-weapons

[![Downloads](https://img.shields.io/npm/dm/j-weapons.svg)](https://www.npmjs.com/package/j-weapons) [![Version](https://img.shields.io/npm/v/j-weapons.svg)](https://www.npmjs.com/package/j-weapons) [![Known Vulnerabilities](https://snyk.io/test/github/GHBJayce/j-weapons/badge.svg?targetFile=package.json)](https://snyk.io/test/github/GHBJayce/j-weapons?targetFile=package.json)

一个函数库，这里有平时自己在开发中，用到的一些函数方法。

> 本着是便利自己实际开发，同时（最好）又能方便他人而建立的库。

> [新的想法&BUG](https://github.com/GHBJayce/j-weapons/issues)

:warning: **非稳定版本！！**

## 安装

```html
<script src="//unpkg.com/j-weapons/dist/j-weapons.min.js"></script>
```

## 使用

```js
// example 1
var a;
console.log(isEmpty(a));

// or example 2
console.log(JW.isEmpty(a));
```
[运行代码](https://codepen.io/GHBJayce/pen/axKOWR)

你可以在全局对象中找到所有的函数方法

> 它们大部分都是一个独立的方法，正如`example 1`那样

```js
console.log(JW)
```
[运行代码](https://codepen.io/GHBJayce/pen/NmzqLv)

### 查看当前库的版本

```js
console.log(JW.version());
```


# 武器库

## 公共的

### isEmpty

`isEmpty(data)`

data：任何变量

return：bool

判断变量是否为空。支持判断数组、对象，以及下面这些值

> 会被识别为空值：`0`、`'0'`、`NaN`、`'NaN'`、`''`、`null`、`'null'`、`undefined`、`'undefined'`、`false`、`'false'`。

```js
var list = {
    a: 0,
    b: '0',
    c: NaN,
    d: 'NaN',
    e: '',
    f: null,
    g: 'null',
    h: undefined,
    i: 'undefined',
    j: false,
    k: 'false',
    l: true,
    m: [],
    n: [1, 2],
    o: {},
    p: {
        a: 0,
    },
};

for (var i in list) {
    console.log(i + '：' + isEmpty(list[i]));
}
```
[运行代码](https://codepen.io/GHBJayce/pen/jRKPRz)

### getLength

`getLength(data)`

data：数组、对象、字符串

return：int

获取数据长度

```js
var list = {
    a: [],
    b: [1, 2],
    c: {},
    d: {
        a: 0,
    },
    e: '123',
    f: 123,
    g: NaN,
};

for (var i in list) {
    console.log(i + '：' + getLength(list[i]));
}
```
[运行代码](https://codepen.io/GHBJayce/pen/zXavzO)

### typeofStr

`typeofStr(data)`

data：任何数据类型

return：string

获取数据的类型，冗长版（能够识别我们认为的数据类型）

```js
var list = {
    a: [],
    b: {},
    c: '123',
    d: 123,
    e: NaN,
    f: true,
    g: undefined,
    h: 1.2,
    i: function () {},
    j: null,
};

for (var i in list) {
    console.log(i + '：' + typeofStr(list[i]));
}
```
[运行代码](https://codepen.io/GHBJayce/pen/xezZGq)

### getType

`getType(data)`

data：任何数据类型

return：string

获取数据的类型，简洁版（能够识别我们认为的数据类型）

```js
var list = {
    a: [],
    b: {},
    c: '123',
    d: 123,
    e: NaN,
    f: true,
    g: undefined,
    h: 1.2,
    i: function () {},
    j: null,
};

for (var i in list) {
    console.log(i + '：' + getType(list[i]));
}
```
[运行代码](https://codepen.io/GHBJayce/pen/PgaZZx)

### deepCopy

`deepCopy(data)`

data：任何数据类型

return：array|object

对象/数组深拷贝

```js
var list = {
    a: [1, 2, 3],
    b: {
        a: 1,
        b: 2,
        c: {
            a: 1,
            b: 2,
        },
    },
};
console.log(list);

var list2 = list;
list2.a[0] = 11;
list2.b.a = 11;
console.log(list, list2);

var list3 = deepCopy(list);
list3.a[0] = 22;
list3.b.a = 22;
list3.b.c.a = 22;
console.log(list, list3);
```
[运行代码](https://codepen.io/GHBJayce/pen/mgzYOL)

### toObject

`toObject(data)`

data：数组、字符串

return：object

转化为对象

```js
var list = {
    a: [1, 2, 3, 5, 6, 9],
    b: 'abc',
    c: 123,
    d: null,
    e: undefined,
    f: {
        a: 1,
        b: 'ab',
    },
    g: 2.3
};

for (var i in list) {
    console.log(i, toObject(list[i]));
}
```
[运行代码](https://codepen.io/GHBJayce/pen/oOQwPV)


## 字符串

### trim

`String.prototype.trim()`

return：string

去除字符串首尾空格

### trimL

`String.prototype.trimL()`

return：string

去除字符串首处空格

### trimR

`String.prototype.trimR()`

return：string

去除字符串尾处空格

### toLower

`String.prototype.toLower()`

return：string

字符串转为小写

### toUpper

`String.prototype.toUpper()`

return：string

字符串转为大写

### insert

`String.prototype.insert(str, offset)`

str：要插入的内容

offset：要插入的位置

return：string

插入字符串


## url

### getQuery

`getQuery(key)`

key：参数名称key

return：string

获取当前url的参数

### getQueryAll

`getQueryAll(url)`

url：url字符串

return：object

获取指定url的所有参数

### getQueryStr

`getQueryStr(url, key)`

url：url字符串

key: 参数名称key，不指定则返回所有参数

return：string|object

获取指定url的指定参数

### setQuery

`setQuery(key, val)`

key: 参数名称key

val：值

return：string

给当前的url设置参数

### setQueryStr

`setQueryStr(url, key, val)`

url：url字符串

key: 参数名称key

val：值

return：string

给指定url设置参数

### urlDecode

`urlDecode(str)`

str：待解码字符串

return：string

url解码

### urlEncode

`urlEncode(str)`

str：待编码字符串

return：string

url编码