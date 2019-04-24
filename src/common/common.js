
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
            result = JW.getLength(data) === 0
            break
        case 'number':
            result = data !== data || data === 0
            break
        case 'string':
            const str = data.trim()
            const lower = str.toLower()
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
function getLength(data) {
    const type = getType(data)

    return ['array', 'string'].indexOf(type) !== -1 ? data.length : Object.keys(data).length
}

/**
 * 获取数据的类型，冗长版（能够识别我们认为的数据类型）
 *
 * @param {*} data
 * @returns {String}
 */
function typeofStr(data) {
    return Object.prototype.toString.call(data)
}

/**
 * 获取数据的类型，简洁版（能够识别我们认为的数据类型）
 *
 * 返回小写；能识别array、null
 *
 * @param {*} data
 * @returns {String}
 */
function getType(data) {
    const type = JW.typeofStr(data)

    return type.substring(type.lastIndexOf(' ') + 1, type.lastIndexOf(']')).toLower()
}

/**
 * 对象/数组深拷贝
 *
 * @param {(Object|Array)} data
 * @returns {(Object|Array)}
 */
function deepCopy(data) {
    let result = JW.getType(data) === 'object' ? {} : []
    for (let i in data) {
        if (JW.getType(data[i]) === 'object') {
            result[i] = deepCopy(data[i])
        } else {
            result[i] = data[i]
        }
    }

    return result
    // return JW.getType(data) === 'object' ? Object.assign({}, data) : Object.values(data)
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
    getLength,
    typeofStr,
    getType,
    deepCopy,
    toObject,
}