
import {isSet} from '../type/isSet';
import {isEmpty} from '../type/isEmpty';

const trimCommon = (needle) => {
    needle = needle || '\\s';
    const rules = needle.split(',');

    return rules.join('|');
};

/**
 * 去除首尾字符
 *
 * @param {String} needle 默认空白符，可指定要去除字符，多个字符使用英文逗号分隔
 * @returns {String}
 */
String.prototype.trim = function (needle) {
    const core = trimCommon(needle);
    const rule = `^([${core}]*)|([${core}]*)$`;

    return this.replace(new RegExp(rule, 'g'), '');
};


/**
 * 去除开头字符
 *
 * @param {String} needle 默认空白符，可指定要去除字符，多个字符使用英文逗号分隔
 * @returns {String}
 */
String.prototype.trimLeft = function (needle) {
    const core = trimCommon(needle);
    const rule = `^([${core}]*)`;

    return this.replace(new RegExp(rule), '');
};


/**
 * 去除结尾字符
 *
 * @param {String} needle 默认空白符，可指定要去除字符，多个字符使用英文逗号分隔
 * @returns {String}
 */
String.prototype.trimRight = function (needle) {
    const core = trimCommon(needle);
    const rule = `([${core}]*)$`;

    return this.replace(new RegExp(rule, 'g'), '');
};


/**
 * 转化为小写
 *
 * @returns {String}
 */
String.prototype.toLower = function () {
    return this.toLocaleLowerCase();
};


/**
 * 转化为大写
 *
 * @returns {String}
 */
String.prototype.toUpper = function () {
    return this.toLocaleUpperCase();
};


/**
 * 插入字符串
 *
 * @param {String} needle 要插入的字符串
 * @param {Number} index 插入的索引位置
 * @returns {String}
 */
String.prototype.insert = function (needle, index) {
    const str1 = this.substring(0, index);
    const str2 = this.substring(index);

    return str1 + needle + str2;
};


/**
 * 索引位置替换
 *
 * @param {String} needle 替换值
 * @param {Number} index 被替换值的位置
 * @returns {String}
 */
String.prototype.indexReplace = function (needle, index) {
    const strArr = this.split('');

    strArr.splice(index, 1, needle);

    return strArr.join('');
};


/**
 * 索引范围替换
 *
 * @param {String} needle 替换值
 * @param {Number} startIndex 开始替换的索引位置
 * @param {Number} endIndex 结束替换的索引位置
 */
String.prototype.rangeIndexReplace = function (needle, startIndex, endIndex) {
    const length = this.length;
    if (
        !isSet(startIndex)
        || endIndex < startIndex
    ) {
        return this.toString();
    }

    endIndex = !isSet(endIndex)
        ? length
        : endIndex >= length
            ? length
            : endIndex;
    startIndex = startIndex >= length
        ? length
        : startIndex;

    const strBegin = this.substring(0, startIndex);
    const strEnd = this.substring(endIndex + 1, this.length);

    return strBegin + needle + strEnd;
};


/**
 * 获取指定字符串出现次数
 *
 * @param {String} needle
 * @returns {Number}
 */
String.prototype.getShowCount = function (needle) {
    return this.split(needle).length - 1;
};


/**
 * 统计字符串中的字符出现次数
 *
 * @returns {Object}
 */
String.prototype.getShowCounts = function () {
    let result = {};

    if (isEmpty(this)) {
        return result;
    }

    result = this
        .split('')
        .sort()
        .join('')
        .match(/(.)\1*/g)
        .reduce((result, cur) => {
            result[cur[0]] = cur.length;

            return result;
        }, {});

    return result;
};