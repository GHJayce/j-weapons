
# 2019-4-20

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
    // 原返回：1str=123
    // 现返回：str=123
    ```