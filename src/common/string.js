
String.prototype.trim = function () {
    return this.replace(/^\s*|\s*$/g, '')
}

String.prototype.trimL = function () {
    return this.replace(/^\s*/g, '')
}

String.prototype.trimR = function () {
    return this.replace(/\s*$/g, '')
}

String.prototype.toLower = function () {
    return this.toLocaleLowerCase()
}

String.prototype.toUpper = function () {
    return this.toLocaleUpperCase()
}

String.prototype.insert = function (str, offset) {
    let str1 = this.substring(0, offset)
    let str2 = this.substring(offset)

    return str1 + str + str2
}

module.exports = {}