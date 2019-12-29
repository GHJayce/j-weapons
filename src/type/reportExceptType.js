
import {getType} from './getType';

/**
 * 报告非指定类型外的类型
 *
 * @param {(String|Array)} allowTypes
 * @param {*} needle
 * @throws
 */
export const reportExceptType = (allowTypes, needle) => {
    const type = getType(needle);
    const allowTypesStr = getType(allowTypes) === 'string'
        ? allowTypes
        : allowTypes.join(', ');

    if (allowTypes.indexOf(type) === -1) {
        throw `j-weapons: The data type is not accepted.
Give: ${type}.
Allow types by getType: ${allowTypesStr}.
`;
    }
};