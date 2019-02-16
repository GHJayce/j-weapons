
/**
 * 获取当前url的参数
 *
 * @param {string|number} key
 */
function getQuery(key) {
    return JW.getQueryStr(window.location.search, key)
}

module.exports = getQuery