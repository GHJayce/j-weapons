
String.prototype.trim = function () {
    return this.replace(/^\s*|\s*$/g, '')
}

String.prototype.ltrim = function () {
    return this.replace(/^\s*/g, '')
}

String.prototype.rtrim = function () {
    return this.replace(/\s*$/g, '')
}

String.prototype.strtolower = function () {
    return this.toLocaleLowerCase()
}

String.prototype.strtoupper = function () {
    return this.toLocaleUpperCase()
}

String.prototype.insert = function (str, offset) {
    let str1 = this.substring(0, offset + 1)
    let str2 = this.substring(offset + 1)

    return str1 + str + str2
}

module.exports = {}