
import {getType} from './getType';

/**
 * 检查NaN
 *
 * @param {*} needle
 * @returns {Boolean}
 */
export const isRealNaN = (needle) => {
    return getType(needle) === 'number'
        && needle !== needle;
};
