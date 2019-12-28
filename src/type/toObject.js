
import getType from './getType'

/**
 * 转化为对象数据类型
 *
 * @param {(Array|String)} data
 * @returns {Object}
 */
const toObject = (data) => {
    return getType(data) === 'object' && data || Object.assign({}, data);
};

module.exports = toObject;