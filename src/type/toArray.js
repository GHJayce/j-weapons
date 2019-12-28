
/**
 * 转化为数组
 *
 * @param {Object} obj
 * @param {Number} type 1：默认，得到所有值的数组；2：保留结构，外面套一层数组
 * @returns {Array}
 */
const toArray = (obj, type) => {
    type = JW.toNumber(type) || 1;
    let result = [];
    switch (type) {
        case 1:
            result = Object.values(obj);
            break;
        case 2:
            result = [obj];
            break;
    }

    return result;
};

module.exports = toArray;