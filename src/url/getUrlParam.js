
import isSet from '../type/isSet';
import getUrlParams from './getUrlParams';

/**
 * 获取指定url的指定参数
 *
 * @param {String} url
 * @param {String|Number} key
 * @param {*} defaultValue
 * @returns {mixed}
 */
const getUrlParam = (url, key, defaultValue) => {
    const params = getUrlParams(url);

    return isSet(params[key], 1)
        ? params[key]
        : defaultValue;
};

module.exports = getUrlParam;