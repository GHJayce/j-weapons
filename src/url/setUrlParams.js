
require('../common/string');

import {isSet} from '../type/isSet';
import {getUrlParams} from './getUrlParams';
import {getType} from '../type/getType';

/**
 * 设置URL单个或多个参数
 *
 * @param {String} url
 * @param {String|Number|Object} key
 * @param {Undefined|String|Number} val
 * @returns {String}
 */
export const setUrlParams = (url, key, val) => {
    if (!isSet(key)) {
        return url;
    }
    val = isSet(val)
        ? val
        : '';

    const urlLength = url.length;
    const urlLastIndex = urlLength - 1;

    let result = []; // first array, second string
    let params = getUrlParams(url);

    if (getType(key) === 'object') {
        params = Object.assign(params, key);
    } else {
        params[key] = val;
    }

    for (let i in params) {
        result.push(i + '=' + params[i]);
    }
    result = result.join('&');

    let firstSearchIndex = url.indexOf('?');
    let firstHashIndex = url.indexOf('#');

    if (firstSearchIndex === -1) {
        firstSearchIndex = urlLastIndex;
        result = '?' + result;
    }

    firstHashIndex = firstHashIndex === -1
        ? urlLastIndex + 1
        : firstHashIndex - 1;

    return url.rangeIndexReplace(result, firstSearchIndex + 1, firstHashIndex);
};
