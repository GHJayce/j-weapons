
require('../../src/common/string');

import getType from './getType';
import {getLength} from '../common/common';

/**
 * 判断是否为空
 *
 * @param {*} data
 * @param {Boolean} strict 默认false。非严格模式，以下情况被识别为空，字符串：'0'、'null'、'undefined'、'false'、'NaN'
 * @returns {Boolean}
 */
const isEmpty = (data, strict) => {
    const type = getType(data);
    let result = data;
    strict = strict === undefined ? false : strict;

    switch (type) {
        case 'object':
        case 'array':
            result = getLength(data) === 0;
            break;
        case 'number':
            result = data !== data || data === 0;
            break;
        case 'string':
            const str = data.trim();
            const lower = str.toLower();
            const notStrictKeywords = ['0', 'null', 'undefined', 'false'];
            let keywords = [''];
            if (!strict) keywords.push(...notStrictKeywords);
            result = keywords.indexOf(lower) !== -1;
            result = !strict ? (result || str === 'NaN') : result;
            break;
        case 'undefined':
        case 'null':
        case 'boolean':
            result = type === 'boolean' && data === false || true;
            break
    }

    return result;
};

module.exports = isEmpty;