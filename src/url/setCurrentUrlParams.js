
import {setUrlParams} from './setUrlParams';

/**
 * 设置当前URL参数
 *
 * @param {String|Number|Object} key
 * @param {Undefined|String|Number} val
 * @returns {String}
 */
export const setCurrentUrlParams = (key, val) => {
    return setUrlParams(window.location.href, key, val);
};
