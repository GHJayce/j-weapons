
import {getType} from './getType';

/**
 * 检查NaN
 *
 * @param {*} data
 * @returns {Boolean}
 */
export const isRealNaN = (data) => {
    return getType(data) === 'number'
        && data !== data;
};
