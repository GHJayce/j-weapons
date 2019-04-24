
/**
 * 获取指定url的所有参数
 *
 * @param {String} url
 * @returns {Object}
 */
function getQueryAll(url) {
    const hashLocation = url.indexOf('#')
    const str = url.substring(url.indexOf('?') + 1, hashLocation !== -1 ? hashLocation : url.length)

    return str.split('&').map(function (v) {
        return v.split('=')
    }).reduce(function (acc, v) {
        acc[JW.urlDecode(v[0].trim())] = v[1] === undefined ? '' : JW.urlDecode(v[1].trim())

        return acc
    }, {})
}

module.exports = getQueryAll