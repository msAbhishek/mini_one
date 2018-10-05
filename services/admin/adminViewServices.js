/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-09-20 15:15:41
 * @modify date 2018-09-20 15:15:41
 * @desc [description]
*/
const database = require('../../dao');
const Promise = require('promise');
const myEmitter = require('../../eventEmitter');
class AdminViewServices extends database {
    /**
     * listall function for listing admins in admin page
     * @param {*} id 
     */
    listAll(id) {
        return new Promise((resolve, reject) => {
            let stat = false;
            let listAllQuery_select = 'SELECT * FROM employee WHERE usertype = $1 AND id != $2 ORDER BY name';
            let params = ['admin', id];
            this.dbOperations(listAllQuery_select, params).then((res) => {
                if (res.rows.length > 0) {
                    let resultObj = {
                        'count': res.rows.length,
                        'user': res.rows,
                        'stat': true
                    };
                    resolve(resultObj);
                }
                else {
                    reject(stat);
                }
            }).catch((err) => {
                if (err) {
                    let message = ' error in adminviewserivces file on listall function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(stat);
            });
        });
    }
    /**
     * listsingle function for detailing an admin in admin page
     * @param {*} id 
     */
    listSingle(id) {
        return new Promise((resolve, reject) => {
            let stat = false;
            let listsingleQuery_select = 'SELECT * FROM employee WHERE id = $1';
            let params = [id];
            this.dbOperations(listsingleQuery_select, params).then((res) => {
                if (res.rows.length > 0) {
                    let resultObj = {
                        'user': res.rows[0],
                        'stat': true
                    };
                    resolve(resultObj);
                }
                else {
                    reject(stat);
                }
            }).catch((err) => {
                if (err) {
                    let message = ' error in adminviewserivces file on listsingle function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(stat);
            });
        });
    }
}
module.exports = AdminViewServices;