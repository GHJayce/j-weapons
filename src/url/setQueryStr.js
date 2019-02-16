
/**
 * 指定url设置参数
 *
 * @param {string} url
 * @param {string|number} key
 * @param {string} val
 */
function setQueryStr(url, key, val) {
    const len = url.length - 1
    let offset = url.indexOf('?')
    let result = offset === -1 ? '?' : ''

    result = result + key + '=' + val + (offset !== -1 && offset < len ? '&' : '')

    return url.insert(result, offset !== -1 ? offset : len)
}

module.exports = setQueryStr