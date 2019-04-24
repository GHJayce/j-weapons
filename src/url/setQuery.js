
/**
 * 给当前的url设置参数
 *
 * @param {String|Number|Object} key
 * @param {String} val
 * @returns {String}
 */
function setQuery(key, val) {
    return JW.setQueryStr(window.location.href, key, val)
}

module.exports = setQuery