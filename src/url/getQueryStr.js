
/**
 * 获取指定url的指定参数
 *
 * @param {String} url
 * @param {String|Number|Undefined} key
 * @returns {String|Object}
 */
function getQueryStr(url, key) {
    const params = JW.getQueryAll(url)

    return key === undefined ? params : params[key]
}

module.exports = getQueryStr