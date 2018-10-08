/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-09-20 15:15:19
 * @modify date 2018-09-20 15:15:19
 * @desc [description]
*/
const database = require('../../../dao');
const Promise = require('promise');
const myEmitter = require('../../../eventEmitter');
class UserHomeServices extends database {
    /**
     * getdetails function for listing user in user home page
     * @param {*} id 
     */
    getDetails(id) {
        return new Promise((resolve, reject) => {
            let getDetailsQuery_select = 'SELECT * FROM employee WHERE id = $1';
            let params = id;
            let resultFalseObj = { 'id': 'null', 'stat': false };
            this.dbOperations(getDetailsQuery_select, [params]).then((res) => {
                if (res.rows.length <= 0) {
                    reject(resultFalseObj);
                    return;
                }
                let resultObj = {
                    'id': res.rows[0].id,
                    'name': res.rows[0].name,
                    'uname': res.rows[0].uname,
                    'address': res.rows[0].address,
                    'email': res.rows[0].email,
                    'phone': res.rows[0].phone,
                    'password': res.rows[0].password,
                    'stat': true,
                };
                resolve(resultObj);
            }).catch((err) => {
                if (err) {
                    let message = ' error in userhomeservices file on getdetails function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(resultFalseObj);
            });
        });
    }
}
module.exports = UserHomeServices;