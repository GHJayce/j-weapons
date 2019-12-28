
require('../common/string');

import decodeUrl from './decodeUrl';

/**
 * 获取指定url的所有参数
 *
 * @param {String} url
 * @returns {Object}
 */
const getUrlParams = (url) => {
    const hashLocation = url.indexOf('#');
    const str = url.substring(url.indexOf('?') + 1, hashLocation !== -1 ? hashLocation : url.length);

    return str
        .split('&')
        .filter(a=>a)
        .map((v) => {
            let keyValArr = v.split('=');
            if (keyValArr.length > 2) {
                const key = keyValArr.shift();
                const val = keyValArr.join('=');
                keyValArr = [key, val];
            }

            return keyValArr;
        })
        .reduce((acc, v) => {
            acc[decodeUrl(v[0].trim())] = v[1] === undefined ? '' : decodeUrl(v[1].trim());

            return acc;
        }, {});
};

module.exports = getUrlParams;