
/**
 * url解码
 *
 * @param {String} str
 * @returns {String}
 */
const decodeUrl = (str) => {
    return decodeURIComponent(str);
};

module.exports = decodeUrl;