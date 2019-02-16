
/**
 * 设置当前url的参数
 *
 * @param {string|number} key
 * @param {string} val
 */
function setQuery(key, val) {
    return JW.setQueryStr(window.location.href, key, val)
}

module.exports = setQuery