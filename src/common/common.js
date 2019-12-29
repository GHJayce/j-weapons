
import {getType} from '../type/getType';
import {isEmpty} from '../../src/type/isEmpty';
import {reportExceptType} from '../type/reportExceptType';


/**
 * 获取数据长度
 *
 * @param {(String|Array|Object)} needle
 * @returns {Number}
 */
export const getLength = (needle) => {
    reportExceptType(['string', 'array', 'object'], needle);

    const type = getType(needle);

    return has(['array', 'string'], type)
        ? needle.length
        : Object.keys(needle).length;
};


/**
 * 对象/数组深拷贝
 *
 * @param {(Array|Object)} needle
 * @returns {(Array|Object)}
 */
export const deepCopy = (needle) => {
    reportExceptType(['array', 'object'], needle);

    let result = getType(needle) === 'object'
        ? {}
        : [];

    for (let i in needle) {
        if (getType(needle[i]) === 'object') {
            result[i] = deepCopy(needle[i]);
        } else {
            result[i] = needle[i];
        }
    }

    return result;
    // return getType(data) === 'object' ? Object.assign({}, data) : Object.values(data);
};


/**
 * 获取第一个元素值
 *
 * @param {(String|Array|Object)} needle
 * @returns {mixed}
 */
export const getFirstVal = (needle) => {
    reportExceptType(['string', 'array', 'object'], needle);

    const type = getType(needle);
    let index = 0;

    if (type === 'object') {
        index = Object.keys(needle)[index];
    }

    return needle[index];
};


/**
 * 获取最后一个元素值
 *
 * @param {(String|Array|Object)} needle
 * @returns {mixed}
 */
export const getLastVal = (needle) => {
    reportExceptType(['string', 'array', 'object'], needle);

    const type = getType(needle);
    let index = getLength(needle) - 1;

    if (type === 'object') {
        index = Object.keys(needle)[index];
    }

    return needle[index];
};


/**
 * 获取函数的形参名
 *
 * @param {Function} callback
 * @returns {Array}
 */
export const getCallbackArguments = (callback) => {
    reportExceptType('function', callback);

    const callbackStr = callback.toString();
    const match = /[function[\s\S]*?]{0,}\(([\s\S]*?)\)/.exec(callbackStr);
    let argumentList = [];

    if (!isEmpty(match)) {
        if (!isEmpty(match[1])) {
            argumentList = match[1].replace(/\s/g, '').split(',');
        }
    }

    return argumentList;
};


/**
 * 检查是否存在值，存在返回索引/key，不存在返回-1
 *
 * @param {(String|Array|Object)} haystack 查找范围
 * @param {*} needle 要查找的值
 * @returns {(String|Number)}
 */
export const hasGetIndex = (haystack, needle) => {
    reportExceptType(['string', 'array', 'object'], haystack);

    const type = getType(haystack);
    let index;

    if (type === 'object') {
        const keys = Object.keys(haystack);
        const keyIndex = Object.values(haystack).indexOf(needle);
        index = keyIndex === - 1
            ? keyIndex
            : keys[keyIndex];
    } else {
        index = haystack.indexOf(needle);
    }

    return index;
};


/**
 * 检查是否存在值
 *
 * @param {(String|Array|Object)} haystack 查找范围
 * @param {*} needle 要查找的值
 * @returns {Boolean}
 */
export const has = (haystack, needle) => {
    return hasGetIndex(haystack, needle) !== -1;
};