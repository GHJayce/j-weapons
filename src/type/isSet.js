
import {isRealNaN} from './isRealNaN';

/**
 * 检查是否设置变量
 *
 * @param {*} needle
 * @returns {Boolean}
 */
export const isSet = (needle) => {
    return needle !== undefined
        && needle !== null
        && !isRealNaN(needle)
        && needle !== false;
};
