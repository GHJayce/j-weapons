
import {getLength} from './common';
import {reportExceptType} from '../type/reportExceptType';
import {isEmpty} from '../type/isEmpty';

/**
 * 获取第一个元素键名，没有则返回undefined
 *
 * @param {Object} needle
 * @returns {mixed}
 */
export const getFirstKey = (needle) => {
    reportExceptType('object', needle);

    return Object.keys(needle)[0];
};


/**
 * 获取最后一个元素键名，没有则返回undefined
 *
 * @param {Object} needle
 * @returns {mixed}
 */
export const getLastKey = (needle) => {
    reportExceptType('object', needle);

    return Object.keys(needle)[getLength(needle) - 1];
};


/**
 * 获取第一个元素，没有则返回undefined
 *
 * @param {Object} needle
 * @returns {mixed}
 */
export const getFirstItem = (needle) => {
    reportExceptType('object', needle);

    if (isEmpty(needle)) {
        return undefined;
    }

    const index = 0;
    const key = Object.keys(needle)[index];
    const val = Object.values(needle)[index];
    let result = {};

    result[key] = val;

    return result;
};


/**
 * 获取最后一个元素，没有则返回undefined
 *
 * @param {Object} needle
 * @returns {mixed}
 */
export const getLastItem = (needle) => {
    reportExceptType('object', needle);

    if (isEmpty(needle)) {
        return undefined;
    }

    const index = getLength(needle) - 1;
    const key = Object.keys(needle)[index];
    const val = Object.values(needle)[index];
    let result = {};

    result[key] = val;

    return result;
};
