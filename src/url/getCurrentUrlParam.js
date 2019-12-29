
import {getUrlParam} from './getUrlParam';

/**
 * 获取当前浏览器url的指定参数
 *
 * @param {String} key
 * @param {*} defaultVal
 * @returns {mixed}
 */
export const getCurrentUrlParam = (key, defaultVal) => {
    return getUrlParam(window.location.href, key, defaultVal);
};
