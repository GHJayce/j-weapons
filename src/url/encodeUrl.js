
/**
 * url编码
 *
 * @param {String} str
 * @returns {String}
 */
const encodeUrl = (str) => {
    return encodeURIComponent(str);
};

module.exports = encodeUrl;