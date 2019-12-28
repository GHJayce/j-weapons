
/**
 * 是否为浮点型
 *
 * @param {Number} number
 * @returns {Boolean}
 */
const isFloat = (number) => {
    return number % 1 != 0;
};

module.exports = isFloat;