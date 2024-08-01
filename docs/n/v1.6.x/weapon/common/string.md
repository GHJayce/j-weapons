
# 字符串

## clueTrim

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

## clueTrimLeft

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

## clueTrimRight

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

## toLower

<!--@include: ../../../common/common/string/toLower.md-->

## toUpper

<!--@include: ../../../common/common/string/toUpper.md-->

## insert

<!--@include: ../../../common/common/string/insert.md-->

## indexReplace

<!--@include: ../../../common/common/string/indexReplace.md-->

## rangeIndexReplace

<!--@include: ../../../common/common/string/rangeIndexReplace.md-->

## getShowCount

<!--@include: ../../../common/common/string/getShowCount.md-->

## getShowCounts

<!--@include: ../../../common/common/string/getShowCounts.md-->

## batchReplace

<!--@include: ../../../common/common/string/batchReplace.md-->

## sprintf

<!--@include: ../../../common/common/string/sprintf.md-->