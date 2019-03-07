
/**
 * 判断是否为空
 *
 * @param {*} data
 * @returns {Boolean}
 */
function isEmpty(data) {
    const type = JW.getType(data)
    let result = data

    switch (type) {
        case 'object':
        case 'array':
            result = JW.length(data) === 0
            break
        case 'number':
            result = data === NaN || data === 0 || data / 1 === 0
            break
        case 'string':
            const str = data.trim()
            const lower = str.strtolower()
            result = ['', '0', 'null', 'undefined', 'false'].indexOf(lower) !== -1 || str === 'NaN'
            break
        case 'undefined':
        case 'null':
        case 'boolean':
            result = type === 'boolean' && data === false || true
            break
    }

    return result
}

/**
 * 获取数据长度
 *
 * @param {(Array|String|Object)} data
 * @returns {Number}
 */
function length(data) {
    const type = getType(data)

    return ['array', 'string'].indexOf(type) !== -1 ? data.length : Object.keys(data).length
}

/**
 * 获取数据类型的字符串格式
 *
 * @param {*} data
 * @returns {String}
 */
function typeofStr(data) {
    return Object.prototype.toString.call(data)
}

/**
 * 获取数据类型
 *
 * 返回小写；能识别array、null
 *
 * @param {*} data
 * @returns {String}
 */
function getType(data) {
    const type = JW.typeofStr(data)

    return type.substring(type.lastIndexOf(' ') + 1, type.lastIndexOf(']')).strtolower()
}

/**
 * 对象/数组深拷贝
 *
 * @param {(Object|Array)} data
 * @returns {(Object|Array)}
 */
function deepCopy(data) {
    return JW.getType(data) === 'object' ? Object.assign({}, data) : Object.values(data)
}

/**
 * 转化为对象数据类型
 *
 * @param {(Array|String)} data
 * @returns {Object}
 */
function toObject(data) {
    return JW.getType(data) === 'object' && data || Object.assign({}, data)
}

module.exports = {
    isEmpty,
    length,
    typeofStr,
    getType,
    deepCopy,
    toObject,
}