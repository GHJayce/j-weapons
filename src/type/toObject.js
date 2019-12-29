
import {reportExceptType} from './reportExceptType';

/**
 * 转化为对象数据类型
 *
 * @param {(String|Array)} needle
 * @returns {Object}
 */
export const toObject = (needle) => {
    reportExceptType(['string', 'array'], needle);

    return Object.assign({}, needle);
};
