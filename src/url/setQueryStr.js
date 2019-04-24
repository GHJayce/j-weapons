
/**
 * 给指定url设置参数
 *
 * @param {String} url
 * @param {String|Number|Object} key
 * @param {String} val
 * @returns {String}
 */
function setQueryStr(url, key, val) {
    function main(url, key, val) {
        const firstSearch = url.indexOf('?')
        const firstHash = url.indexOf('#')
        const len = url.length - 1
        let result = firstSearch === -1 ? '?' : ((firstSearch < len & url.indexOf('=') !== -1) ? '&' : '')

        result = result + key + '=' + val

        return url.insert(result, firstHash !== -1 ? firstHash : len + 1)
    }

    if (JW.getType(key) === 'object') {
        val = val || undefined
        for (let i in key) {
            url = main(url, i, key[i])
        }
    } else {
        url = main(url, key, val)
    }

    return url
}

module.exports = setQueryStr