
const database = require('../../dao');
const Promise = require('promise');
const myEmitter = require('../../eventEmitter');
class MailServices extends database {
    getEmails() {
        return new Promise((resolve, reject) => {
            let getEmailQuery = 'SELECT email FROM employee';
            this.dbOperations(getEmailQuery).then((res) => {
                if (res.rows.length <= 0) {
                    reject(false);
                    return;
                }
                resolve(res);
            }).catch((err) => {
                if (err) {
                    let message = ' error in mailservices file on getmail function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(false);
            });
        });
    }
}
module.exports = MailServices;