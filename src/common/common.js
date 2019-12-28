import getType from '../type/getType';

/**
 * 获取数据长度
 *
 * @param {(Array|String|Object)} data
 * @returns {Number}
 */
const getLength = (data) => {
    const type = getType(data);

    return ['array', 'string'].indexOf(type) !== -1 ? data.length : Object.keys(data).length;
};

/**
 * 对象/数组深拷贝
 *
 * @param {(Object|Array)} data
 * @returns {(Object|Array)}
 */
const deepCopy = (data) => {
    let result = getType(data) === 'object' ? {} : [];
    for (let i in data) {
        if (getType(data[i]) === 'object') {
            result[i] = deepCopy(data[i]);
        } else {
            result[i] = data[i];
        }
    }

    return result;
    // return getType(data) === 'object' ? Object.assign({}, data) : Object.values(data);
};

module.exports = {
    getLength,
    deepCopy,
};