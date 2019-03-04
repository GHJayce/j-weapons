
/**
 * 获取当前url的参数
 *
 * @param {String|Number} key
 * @returns {String}
 */
function getQuery(key) {
    return JW.getQueryStr(window.location.search, key)
}

module.exports = getQuery