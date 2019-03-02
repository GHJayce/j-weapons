
/**
 * 指定url设置参数
 *
 * @param {string} url
 * @param {string|number} key
 * @param {string} val
 */
function setQueryStr(url, key, val) {
    const firstSearch = url.indexOf('?')
    const firstHash = url.indexOf('#')
    const len = url.length - 1
    let result = firstSearch === -1 ? '?' : ((firstSearch < len & url.indexOf('=') !== -1) ? '&' : '')

    result = result + key + '=' + val

    return url.insert(result, firstHash !== -1 ? firstHash - 1 : len)
}

module.exports = setQueryStr