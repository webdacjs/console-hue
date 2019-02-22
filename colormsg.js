const shouldStringify = ['Object', 'Array']
const msgTypes = require('./msgTypes')()

function getStr (msg) {
    return shouldStringify.includes(msg.constructor.name)
        ? JSON.stringify(msg)
        : msg
}

module.exports = function (type, msg) {
    return `${msgTypes[type]}${getStr(msg)}${msgTypes['log']}`
}
