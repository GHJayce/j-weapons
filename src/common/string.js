
const trimCommon = (str) => {
    str = str || '\\s';
    const rules = str.split(',');

    return rules.join('|');
};

/**
 * 去除首尾字符
 *
 * @param {String} str 默认空白符，可指定要去除字符，多个字符使用英文逗号分隔
 * @returns {String}
 */
String.prototype.trim = function (str) {
    const core = trimCommon(str);
    const rule = `^([${core}]*)|([${core}]*)$`;

    return this.replace(new RegExp(rule, 'g'), '');
}

/**
 * 去除开头字符
 *
 * @param {String} str 默认空白符，可指定要去除字符，多个字符使用英文逗号分隔
 * @returns {String}
 */
String.prototype.trimLeft = function (str) {
    const core = trimCommon(str);
    const rule = `^([${core}]*)`;

    return this.replace(new RegExp(rule), '');
}

/**
 * 去除结尾字符
 *
 * @param {String} str 默认空白符，可指定要去除字符，多个字符使用英文逗号分隔
 * @returns {String}
 */
String.prototype.trimRight = function (str) {
    const core = trimCommon(str);
    const rule = `([${core}]*)$`;

    return this.replace(new RegExp(rule, 'g'), '');
}

/**
 * 转化为小写
 *
 * @returns {String}
 */
String.prototype.toLower = function () {
    return this.toLocaleLowerCase();
}

/**
 * 转化为大写
 *
 * @returns {String}
 */
String.prototype.toUpper = function () {
    return this.toLocaleUpperCase();
}

/**
 * 插入字符串
 *
 * @param {String} str 要插入的字符串
 * @param {Number} index 插入的索引位置
 * @returns {String}
 */
String.prototype.insert = function (str, index) {
    const str1 = this.substring(0, index);
    const str2 = this.substring(index);

    return str1 + str + str2;
}

/**
 * 索引位置替换
 *
 * @param {String} str 替换值
 * @param {Number} index 被替换值的位置
 * @returns {String}
 */
String.prototype.indexReplace = function (str, index) {
    const strArr = this.split('');
    strArr.splice(index, 1, str);

    return strArr.join('');
}

module.exports = {};