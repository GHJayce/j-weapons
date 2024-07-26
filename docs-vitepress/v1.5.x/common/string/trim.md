

# trim

`String.prototype.trim([needle])`

去除首尾字符。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|可为空，默认去除空白符。<br>可指定要去除字符，多个字符使用英文逗号分隔|String||

```js
console.log(' 123 '.trim());
console.log(' ca123ca '.trim(' ,c,a'));
```