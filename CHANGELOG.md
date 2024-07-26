
# CHANGELOG
## v1.6.0
2024-07-21
1. 删除exposesToGlobal方法，不再暴露到window全局。
2. 更名以下string类型的内置方法，避免和ES2019内置方法冲突。
   1. `trim()`更名为`clueTrim()`
   2. `trimLeft()`更名为`clueTrimLeft()`
   3. `trimRight()`更名为`clueTrimRight()`
3. 改用TypeScript，输出文件为ES、UMD。

## v1.5.0
2022-03-31
1. 新增cache函数，本地缓存封装

## v1.4.0
2021-07-10
1. 新增函数`hasKey`用于检查对象是否包含某个key
1. 新增函数`pluck`类似PHP的array_column，摘取数组中对象元素的某个key成为一个集合。对象内结构不确定，暂时仅支持数组

## v1.3.0

2020-8-5

1. 新增两个字符串替换函数
    1. `batchReplace()`批量替换函数，以对象的形式传入，替换前的值作为key，替换后的值作为value，进行字符串的批量替换。
    1. `sprintf()`占位符替换函数，一个萝卜一个坑，%s代表坑，对应形参代表萝卜。

## v1.2.1

2020-3-14

1. 修复在`npm`的`runkit`中提示`window`未定义的问题。
1. 更新`./docs`文档，不再支持代码在线执行。
1. 重新打包
1. 升级npm包

## v1.2.0

2020-3-14

1. 修复`isEmpty()`对函数（等其它类似）的判断无法得到`bool`值结果的问题，增加对`ArrayBuffer`、`sharedarraybuffer`、`int8array`等的空判断。
1. `getLength()`增加对`ArrayBuffer`、`sharedarraybuffer`、`int8array`等的长度获取。

## v1.1.0

2020-1-8

1. 修复`isEmpty()`对布尔值`true`的情况下仍然识别为空的问题，同时补充单元测试项。


## v1.0.0

2019-12-30

> :warning: 此版本不向下兼容

更新内容：

1. `getQueryStr()`调整：

    1. 新增默认值参数。
    1. 更名为`getUrlParam()`。

1. `getQueryAll()`调整：

    > 默认规则：当存在多个`?`符时，按其头一个符号开始获取键值对象。

    1. 当不存在`?`时，表示没有参数。

        调整前：得到一个当前链接的键值；
        调整后：得到空对象。

    1. 得到的对象会滤空的键。
    1. 其余`?`符出现在val时，`?`后面跟着的`键=值`会被视为一个整体的值。

        例如：`?a=1&b=2?c=3&d=4`
        调整前：`{b:'2?c'}`，`=3`会丢失；
        调整后：`{b:'2?c=3'}`。

    1. 更名为`getUrlParams()`。

1. `getQuery()`调整：

    1. 新增默认值参数。
    1. 更名为`getCurrentUrlParam()`。

1. `setQueryStr()`重写：

    重写前：新加的任何key（包括url已经存在的key）都直接加在url的search后面hash前面。
    重写后：已存在的key不再往后面追加，而是直接覆盖原值。其余特性与原来保持一致。

    1. 更名为`setUrlParams()`。

1. `setQuery()`更名为`setCurrentUrlParams()`。
1. `trim`等相关函数，默认清除空格，也可以指定清除字符，多个字符用英文逗号分隔。
1. `trimL()`更名为`trimLeft()`。
1. `trimR()`更名为`trimRight()`。
1. `urlDecode()`更名为`decodeUrl()`。
1. `urlEncode()`更名为`encodeUrl()`。
1. `isEmpty()`，新增严格模式`strict`布尔值参数。
1. 新增函数：

    1. 字符串函数：

        1. `indexReplace()`，替换指定索引的字符串。
        1. `getShowCount()`，获取指定字符串出现次数。
        1. `getShowCounts()`，获取字符串所有字符出现次数。

    1. 检测函数：

        1. `isFloat()`，是否为浮点型。
        1. `isRealNaN()`，是否为`NaN`。
        1. `isSet()`，是否已设置变量。

    1. 转化类函数：

        1. `toArray()`，转化为数组。
        1. `toNumber()`，转化为数值。

    1. URL相关：

        1. `getCurrentUrlParams()`，获取当前浏览器url的所有参数组成的一个对象。
        1. `setCurrentUrlParams()`，设置当前浏览器的url参数。

    1. 获取元素相关：

        1. `getFirstKey()`，获取对象第一个元素的键名。
        1. `getFirstVal()`，获取对象第一个元素的值。
        1. `getFirstItem()`，获取对象的第一个元素。
        1. `getLastKey()`，获取对象最后一个元素的键名。
        1. `getLastVal()`，获取对象最后一个元素的值。
        1. `getLastItem()`，获取对象的最后一个元素。

    1. 其它：

        1. `getCallbackArguments()`，获取函数形参名称列表。
        1. `has()`，检查是否存在值，返回布尔值。
        1. `hasGetIndex()`，检查是否存在值，不存在返回-1，存在返回索引。


## v0.4.1

2019-7-15

更新内容：

- 新增获取当前库的版本信息`JW.version()`
- 修复在`github`出现的需要`lodash`>=`4.17.13`的警告


## v0.4.0

2019-4-20

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


## v0.3.0

2019-3-29

- 兼容支持ie9+


## v0.2.0

2019-3-07

更新内容：

- 新增`toObject`函数
- 更新重写`deepCopy`函数，现支持深拷贝对象和数组


## v0.1.0

2019-3-04

更新内容：

- 新的方法：`getQueryAll`获取指定url的所有参数
- 调整`getQueryStr`、`getQuery`方法，现不传key默认会得到所有的参数
- `setQueryStr`、`setQuery`方法，现支持传入多个参数，只需要将key参数换成对象即可
- 更新方法的注释


## v0.0.3

2019-3-02

- 修复`getQueryStr`在含hash（#）url下获取最后一个参数时会携带hash值的问题
- 修复`setQueryStr`对url中已存在同一个key，其原做法会让新设置的key不起作用的问题
  （原做法会在？后面插入新的参数，同一个key真正有效的是最后一个key）


## v0.0.2

2019-3-01

- 修复`getQueryStr`在url无?符号下获取key出现错误的问题