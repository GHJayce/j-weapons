
import {isSet} from '../type/isSet';
import {getUrlParams} from './getUrlParams';

/**
 * 获取指定url的指定参数
 *
 * @param {String} url
 * @param {String|Number} key
 * @param {*} defaultVal
 * @returns {mixed}
 */
export const getUrlParam = (url, key, defaultVal) => {
    const params = getUrlParams(url);

    return isSet(params[key])
        ? params[key]
        : defaultVal;
};
