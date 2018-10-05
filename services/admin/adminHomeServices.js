/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-09-20 15:16:50
 * @modify date 2018-09-20 15:16:50
 * @desc [description]
*/
const database = require('../../dao');
const Promise = require('promise');
const myEmitter = require('../../eventEmitter');
class AdminHomeServices extends database {
    /**
     * listall function for listing admins in admin page
     */
    listAll() {
        return new Promise((resolve, reject) => {
            let stat = false;
            let listAllQuery_select = 'SELECT * FROM employee WHERE usertype = $1 ORDER BY name';
            let params = ['user'];
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
                    let message = ' error in adminhomeserivces file on listall function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(stat);
            });
        });
    }
    /**
     * listsingle function for detailing a user in admin page
     * @param {*} id 
     */
    listSingle(id) { // 
        return new Promise((resolve, reject) => {
            let stat = false;
            let listSingleQuery_select = 'SELECT * FROM employee WHERE id = $1';
            let params = [id];
            this.dbOperations(listSingleQuery_select, params).then((res) => {
                if (res.rows.length > 0) {
                    var resultObj = {
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
                    let message = ' error in adminhomeserivces file on listsingle function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(stat);
            });
        });
    }
    /**
     * makeadmin function for making a user as admin
     * @param {*} uname 
     */
    makeAdmin(uname) {
        return new Promise((resolve, reject) => {
            let stat = false;
            let makeAdminQuery_update = 'UPDATE employee SET  usertype = $1 WHERE uname =$2';
            let params = ['admin', uname];
            this.dbOperations(makeAdminQuery_update, params).then((res) => {
                if (res.rowCount > 0) {
                    resolve(res);
                }
                else {
                    reject(stat);
                }
            }).catch((err) => {
                if (err) {
                    let message = ' error in adminhomeserivces file on makeadmin function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(stat);
            });
        });
    }
    /**
     * deleteUser function for deleting a user
     * @param {*} uname 
     */
    deleteUser(uname) {
        return new Promise((resolve, reject) => {
            let stat = false;
            let deleteUserQuery_delete = 'DELETE FROM employee WHERE uname =$1';
            let params = [uname];
            this.dbOperations(deleteUserQuery_delete, params).then((res) => {
                if (res.rowCount > 0) {
                    resolve(res);
                }
                else {
                    reject(stat);
                }
            }).catch((err) => {
                if (err) {
                    let message = ' error in adminhomeserivces file on deleteuser function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(stat);
            });
        });
    }
}
module.exports = AdminHomeServices;