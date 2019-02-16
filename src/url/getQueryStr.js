
/**
 * 根据url获取参数
 *
 * @param {string} url
 * @param {string|number} key
 */
function getQueryStr(url, key) {
    const str = url.substring(url.indexOf('?') + 1)
    const query = str.split('&').map(function (v) {
        return v.split('=')
    }).reduce(function (acc, v) {
        acc[JW.urlDecode(v[0].trim())] = JW.urlDecode(v[1].trim())

        return acc
    }, {})

    return query[key]
}

module.exports = getQueryStr