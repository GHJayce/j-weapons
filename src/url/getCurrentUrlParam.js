
import getUrlParam from './getUrlParam';

/**
 * 获取当前浏览器url的指定参数
 *
 * @param {String} key
 * @param {*} defaultValue
 * @returns {mixed}
 */
const getCurrentUrlParam = (key, defaultValue) => {
    return getUrlParam(window.location.href, key, defaultValue);
};

module.exports = getCurrentUrlParam;