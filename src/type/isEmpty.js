
require('../common/string');

import {getType} from './getType';
import {getLength} from '../common/common';
import {has} from '../common/common';

/**
 * 判断是否为空
 *
 * @param {*} needle
 * @param {Boolean} strict 默认false。非严格模式，以下情况被识别为空，字符串：'0'、'null'、'undefined'、'false'、'NaN'
 * @returns {Boolean}
 */
export const isEmpty = (needle, strict) => {
    const type = getType(needle);
    let result = needle;

    strict = strict === undefined ? false : strict;

    switch (type) {
        case 'object':
        case 'array':
            result = getLength(needle) === 0;
            break;
        case 'number':
            result = needle !== needle || needle === 0;
            break;
        case 'string':
            const str = needle.trim();
            const lower = str.toLower();
            const notStrictKeywords = ['0', 'null', 'undefined', 'false'];
            let keywords = [''];

            if (!strict) keywords.push(...notStrictKeywords);

            result = has(keywords, lower);
            result = !strict ? (result || str === 'NaN') : result;
            break;
        case 'undefined':
        case 'null':
        case 'boolean':
            result = type === 'boolean' && needle === false || true;
            break
    }

    return result;
};