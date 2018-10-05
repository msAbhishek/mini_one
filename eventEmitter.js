/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-10-04 11:26:46
 * @modify date 2018-10-04 11:26:46
 * @desc [description]
*/
const EventEmitter = require('events');
const logger = require('./loggerWinston');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('info', (message,timeStamp) => {
    logger.log({
        level: 'info',
        message: message,
        'timestamp': timeStamp
    });
});
myEmitter.on('warn', (message,timeStamp,err) => {
    logger.log({
        level: 'warn',
        message: message,
        'timestamp': timeStamp,
        'exception': err
    });
});
myEmitter.on('error', (message,timeStamp,err) => {
    logger.log({
        level: 'error',
        message: message,
        'timestamp': timeStamp,
        'exception': err
    });
});
module.exports = myEmitter;