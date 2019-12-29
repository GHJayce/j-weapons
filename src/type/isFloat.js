
import {getType} from './getType';
import {isRealNaN} from './isRealNaN';

/**
 * 是否为浮点型
 *
 * @param {*} needle
 * @returns {Boolean}
 */
export const isFloat = (needle) => {
    return getType(needle) === 'number'
        && !isRealNaN(needle)
        && needle % 1 != 0;
};
