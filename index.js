const {log} = require('console')
const exportFns = {}
const shouldStringify = ['Object', 'Array']

const msgTypes = {
    error: '\x1b[31m',
    success: '\x1b[32m',
    warn: '\x1b[33m',
    debug: '\x1b[36m',
    log: '\x1b[37m',
    // Colors:
    blue: '\x1b[34m',
    pink: '\x1b[35m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
}

function getStr (msg) {
    return shouldStringify.includes(msg.constructor.name)
        ? JSON.stringify(msg)
        : msg
}

function logMsg (type) {
    return (msg) => {
        log(`${msgTypes[type]}${getStr(msg)}${msgTypes['log']}`)
    }
}

Object.keys(msgTypes).map(k => exportFns[k] = logMsg(k))

module.exports = exportFns
