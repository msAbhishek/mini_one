/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-09-20 15:15:47
 * @modify date 2018-09-20 15:15:47
 * @desc [description]
*/
const database = require('../../dao');
const Promise = require('promise');
const myEmitter = require('../../eventEmitter');
class AdminSearchServices extends database {
    /**
     * list function for searching
     * @param {*} id 
     * @param {*} uname 
     */
    list(id, uname) {
        return new Promise((resolve, reject) => {
            let stat = false;
            let listQuery_select = 'SELECT * FROM employee WHERE uname LIKE $1 AND id != $2 ORDER BY name';
            let params = [uname, id];
            this.dbOperations(listQuery_select, params).then((res) => {
                if (res.rows.length > 0) {
                    let searchObj = {
                        'user': res.rows,
                        'stat': true
                    };
                    resolve(searchObj);
                }
                else {
                    reject(stat);
                }
            }).catch((err) => {
                if (err) {
                    let message = ' error in adminsearchserivces file on list function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(stat);
            });
        });
    }
}
module.exports = AdminSearchServices;