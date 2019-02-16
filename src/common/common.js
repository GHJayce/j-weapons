
/**
 * 判断是否为空
 *
 * @param {*} data
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
 * @param {(array|string|object)} data
 */
function length(data) {
    const type = getType(data)

    return ['array', 'string'].indexOf(type) !== -1 ? data.length : Object.keys(data).length
}

/**
 * 获取数据类型的字符串格式
 *
 * @param {*} data
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
 */
function getType(data) {
    const type = JW.typeofStr(data)

    return type.substring(type.lastIndexOf(' ') + 1, type.lastIndexOf(']')).strtolower()
}

/**
 * 对象深拷贝
 *
 * @param {object} obj
 */
function deepCopy(obj) {
    let newObj = {}

    for (let i in obj) {
        newObj[i] = obj[i]
    }

    return newObj
}

module.exports = {
    isEmpty,
    length,
    typeofStr,
    getType,
    deepCopy,
}