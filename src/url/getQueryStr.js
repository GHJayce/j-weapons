
/**
 * 根据url获取参数
 *
 * @param {string} url
 * @param {string|number} key
 */
function getQueryStr(url, key) {
    const hashLocation = url.indexOf('#')
    const str = url.substring(url.indexOf('?') + 1, hashLocation !== -1 ? hashLocation : url.length)
    const query = str.split('&').map(function (v) {
        return v.split('=')
    }).reduce(function (acc, v) {
        acc[JW.urlDecode(v[0].trim())] = v[1] === undefined ? '' : JW.urlDecode(v[1].trim())

        return acc
    }, {})

    return query[key]
}

module.exports = getQueryStr