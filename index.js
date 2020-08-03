const debug = require('debug')('printann');

const printMessage = function (str) {
    console.log(`Hello -- ${str}`);
}

const printHello = function () {
    console.log('Hello');
}

module.exports = {
    printMessage,
    printHello
}

