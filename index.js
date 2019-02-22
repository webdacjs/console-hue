const {log} = require('console')
const exportFns = {}
const getColorMsg = require('./colormsg.js')
const msgTypes = require('./msgTypes')()

function logMsg (type) {
    return function (msg) {
        log(getColorMsg(type, msg))
    }
}

Object.keys(msgTypes).map(k => exportFns[k] = logMsg(k))

module.exports = exportFns
