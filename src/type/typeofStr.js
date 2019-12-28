
/**
 * 获取数据的类型，冗长版（能够识别我们认为的数据类型）
 *
 * @param {*} data
 * @returns {String}
 */
const typeofStr = (data) => {
    return Object.prototype.toString.call(data);
};

module.exports = typeofStr;