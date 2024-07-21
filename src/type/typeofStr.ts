
/**
 * 获取数据的类型，冗长版（能够识别我们认为的数据类型）
 */
export const typeofStr = (needle: any): string => {
    return Object.prototype.toString.call(needle);
};
