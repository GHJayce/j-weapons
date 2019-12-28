
# CHANGELOG

## 2019-12-27

v1.0

> :warning: 此版本有更名函数，不完全向下兼容

更新内容：

1. `getQueryStr()`调整：

    1. 新增默认值参数。
    1. 更名为`getUrlParam()`。

1. `getQueryAll()`调整：

    > 默认规则：当存在多个`?`符时，按其头一个符号开始获取键值对象。

    1. 得到的对象会滤空的键。
    1. 其余`?`符出现在val时，`?`后面跟着的`键=值`会被视为一个整体的值。

        例如：`?a=1&b=2?c=3&d=4`
        调整前：`{b:'2?c'}`，`=3`会丢失；
        调整后：`{b:'2?c=3'}`。

    1. 更名为`getUrlParams()`。

1. `getQuery()`调整：

    1. 新增默认值参数。
    1. 更名为`getCurrentUrlParam()`。

1. `trim`等相关函数，默认清除空格，也可以指定清除字符，多个字符用英文逗号分隔。
1. `trimL()`更名为`trimLeft()`。
1. `trimR()`更名为`trimRight()`。
1. `urlDecode()`更名为`decodeUrl()`。
1. `urlEncode()`更名为`encodeUrl()`。
1. `isEmpty()`，新增严格模式`strict`布尔值参数。
1. 新增函数：

    1. 字符串函数：

        1. `indexReplace()`，替换指定索引的字符串。

    1. 检测函数：

        1. `isFloat()`，是否为浮点型。
        1. `isRealNaN()`，是否为`NaN`。
        1. `isSet()`，是否已设置变量。

    1. 转化类函数：

        1. `toArray()`，转化为数组。
        1. `toNumber()`，转化为数值。

    1. URL相关：

        1. `getCurrentUrlParams()`，获取当前浏览器url的所有参数组成的一个对象


## 2019-7-15

v0.4.1

更新内容：
- 新增获取当前库的版本信息`JW.version()`
- 修复在`github`出现的需要`lodash`>=`4.17.13`的警告

## 2019-4-20

v0.4.0

> :warning: 此版本有更名函数，不完全向下兼容

更新内容：
- `isEmpty()`修复无法正常判断`NaN`
- `length()`更名为`getLength()`
- `ltrim()`更名为`trimL()`
- `rtrim()`更名为`trimR()`
- `strtolower()`更名为`toLower()`
- `strtoupper()`更名为`toUpper()`
- `insert()`修正原错误的用法（offset会默认加+1）

    > 同时修正使用它的`setQueryStr()`方法

    ```js
    var str = 123;
    str.insert('str=', 0);
    // 原返回：1str=23
    // 现返回：str=123
    ```

- `deepCopy`重写，真正的深拷贝


## 2019-3-29

v0.3.0

- 兼容支持ie9+


## 2019-3-07

v0.2.0

更新内容：
- 新增`toObject`函数
- 更新重写`deepCopy`函数，现支持深拷贝对象和数组


## 2019-3-04

v0.1.0

更新内容：
- 新的方法：`getQueryAll`获取指定url的所有参数
- 调整`getQueryStr`、`getQuery`方法，现不传key默认会得到所有的参数
- `setQueryStr`、`setQuery`方法，现支持传入多个参数，只需要将key参数换成对象即可
- 更新方法的注释


## 2019-3-02

v0.0.3

- 修复`getQueryStr`在含hash（#）url下获取最后一个参数时会携带hash值的问题
- 修复`setQueryStr`对url中已存在同一个key，其原做法会让新设置的key不起作用的问题
  （原做法会在？后面插入新的参数，同一个key真正有效的是最后一个key）


## 2019-3-01

v0.0.2

- 修复`getQueryStr`在url无?符号下获取key出现错误的问题