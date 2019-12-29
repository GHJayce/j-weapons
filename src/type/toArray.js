
import {toNumber} from './toNumber';
import {reportExceptType} from './reportExceptType';

/**
 * 转化为数组
 *
 * @param {Object} needle
 * @param {Number} options 1：默认，得到所有值的数组；2：保留结构，外面套一层数组
 * @returns {Array}
 */
export const toArray = (needle, options) => {
    reportExceptType('object', needle);

    options = toNumber(options) || 1;

    let result = [];

    switch (options) {
        case 1:
            result = Object.values(needle);
            break;
        case 2:
            result = [needle];
            break;
    }

    return result;
};
