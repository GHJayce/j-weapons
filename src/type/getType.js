
require('../../src/common/string');

import typeofStr from './typeofStr';

/**
 * 获取数据的类型，简洁版，能够识别我们认为的数据类型，浮点型除外
 *
 * 返回小写；能识别array、null
 *
 * @param {*} data
 * @returns {String}
 */
const getType = (data) => {
    const type = typeofStr(data);

    return type.substring(type.lastIndexOf(' ') + 1, type.lastIndexOf(']')).toLower();
};

module.exports = getType;