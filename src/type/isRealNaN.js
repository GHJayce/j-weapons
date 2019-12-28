
import getType from '../type/getType';

const isRealNaN = (data) => {
    return getType(data) === 'number'
        && data !== data;
};

module.exports = isRealNaN;