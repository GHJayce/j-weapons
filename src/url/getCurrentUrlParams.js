
import {getUrlParams} from './getUrlParams';

/**
 * 获取当前浏览器url参数
 *
 * @returns {Object}
 */
export const getCurrentUrlParams = () => {
    return getUrlParams(window.location.href);
};
