
import isRealNaN from './isRealNaN';

const isSet = (data) => {
    return data !== undefined
        && data !== null
        && !isRealNaN(data)
        && data !== false;
};

module.exports = isSet;