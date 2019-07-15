
# CHANGELOG

## 2019-7-15

v0.4.1

更新内容：
- 新增获取当前库的版本信息`JW.version()`
- 修复在`github`出现的需要`lodash`>=`4.17.13`的警告

## 2019-4-20

v0.4.0

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