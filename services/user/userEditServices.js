/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-09-20 15:15:26
 * @modify date 2018-09-20 15:15:26
 * @desc [description]
*/
const database = require('../../dao');
const Promise = require('promise');
const bcrypt = require('bcryptjs');
const myEmitter = require('../../eventEmitter');
class UserEditServices extends database {
    /**
     * updateall function for updating all user details
     * @param {*} userObj 
     */
    updateAll(userObj) {
        let self = this;
        return new Promise((resolve, reject) => {
            let stat = false;
            bcrypt.genSalt(10,(err, salt) => {
                bcrypt.hash(userObj.body.password,salt,(err,hash) => {
                    let updateAllQuery_update = 'UPDATE employee SET  name=$1, uname=$2, address=$3, email=$4, password=$5, phone=$6 WHERE id=$7';
                    let params = [userObj.body.name, userObj.body.uname, userObj.body.address, userObj.body.email, hash, userObj.body.phone, userObj.body.id];
                    self.dbOperations(updateAllQuery_update, params).then((res) => {
                        if (res.rowCount <= 0) {
                            reject(stat);
                            return;
                        }
                        resolve(res);
                    }).catch((err) => {
                        if (err) {
                            let message = 'error in usereditservices file on updateall function';
                            let timeStamp = new Date();
                            myEmitter.emit('error', message, timeStamp, err);
                        }
                        reject(stat);
                    });
                });
            });
        });
    }
    /**
     * function for username existance check
     * @param {*} uname 
     */
    checkUsername(uname) {
        return new Promise((resolve, reject) => {
            let checkUserNameQuery_select = 'SELECT count(*) FROM employee WHERE uname = $1';
            let params = uname;
            let resultObj = {
                'stat': false
            };
            this.dbOperations(checkUserNameQuery_select, [params]).then((res) => {
                if (res.rows[0].count > 0) {
                    reject(resultObj);
                    return;
                }
                resultObj.stat = true;
                resolve(resultObj);
            }).catch((err) => {
                if (err) {
                    let message = 'error in usereditservices file on checkusername function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(resultObj);
            });
        });
    }
    /**
     * function for name update 
     * @param {*} id 
     * @param {*} name 
     */
    updateName(id, name) {
        return new Promise((resolve, reject) => {
            let updateNameQuery_update = 'UPDATE employee SET  name=$1 WHERE id=$2';
            let params = [name, id];
            let resultObj = {
                'stat': false
            };
            this.dbOperations(updateNameQuery_update, params).then((res) => {
                if (res.rowCount <= 0) {
                    reject(resultObj);
                    return;
                }
                resultObj.stat = true;
                resolve(resultObj);
            }).catch((err) => {
                if (err) {
                    let message = 'error in usereditservices file on updatename function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(resultObj);
            });
        });
    }
    /**
     * function for username update
     * @param {*} id 
     * @param {*} uname 
     */
    updateUname(id, uname) {
        return new Promise((resolve, reject) => {
            let updateUnameQuery_update = 'UPDATE employee SET  uname=$1 WHERE id=$2';
            let params = [uname, id];
            let resultObj = {
                'stat': false
            };
            this.dbOperations(updateUnameQuery_update, params).then((res) => {
                if (res.rowCount <= 0) {
                    reject(resultObj);
                    return;
                }
                resultObj.stat = true;
                resolve(resultObj);
            }).catch((err) => {
                if (err) {
                    let message = 'error in usereditservices file on updateuname function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(resultObj);
            });
        });
    }
    /**
     * function for address update
     * @param {*} id 
     * @param {*} address 
     */
    updateAddress(id, address) {
        return new Promise((resolve, reject) => {
            let updateAddressQuery_update = 'UPDATE employee SET  address=$1 WHERE id=$2';
            let params = [address, id];
            let resultObj = {
                'stat': false
            };
            this.dbOperations(updateAddressQuery_update, params).then((res) => {
                if (res.rowCount <= 0) {
                    reject(resultObj);
                    return;
                }
                resultObj.stat = true;
                resolve(resultObj);
            }).catch((err) => {
                if (err) {
                    let message = 'error in usereditservices file on updateaddress function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(resultObj);
            });
        });
    }
    /**
     * function for email update
     * @param {*} id 
     * @param {*} email 
     */
    updateEmail(id, email) {
        return new Promise((resolve, reject) => {
            let updateEmailQuery_update = 'UPDATE employee SET  email=$1 WHERE id=$2';
            let params = [email, id];
            let resultObj = {
                'stat': false
            };
            this.dbOperations(updateEmailQuery_update, params).then((res) => {
                if (res.rowCount <= 0) {
                    reject(resultObj);
                    return;
                }
                resultObj.stat = true;
                resolve(resultObj);
            }).catch((err) => {
                if (err) {
                    let message = 'error in usereditservices file on updateemail function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(resultObj);
            });
        });
    }
    /**
     * function for password update
     * @param {*} id 
     * @param {*} password 
     */
    updatePassword(id, password) {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    let updatePasswordQuery_update = 'UPDATE employee SET  password=$1 WHERE id=$2';
                    let params = [hash, id];
                    let resultObj = {
                        'stat': false
                    };
                    this.dbOperations(updatePasswordQuery_update, params).then((res) => {
                        if (res.rowCount <= 0) {
                            reject(resultObj);
                            return;
                        }
                        resultObj.stat = true;
                        resolve(resultObj);
                    }).catch((err) => {
                        if (err) {
                            let message = 'error in usereditservices file on updatepassword function';
                            let timeStamp = new Date();
                            myEmitter.emit('error', message, timeStamp, err);
                        }
                        reject(resultObj);
                    });
                });
            });
        });
    }
    /**
     * function for phone update
     * @param {*} id 
     * @param {*} phone 
     */
    updatePhone(id, phone) {
        return new Promise((resolve, reject) => {
            let updatePhoneQuery_update = 'UPDATE employee SET  phone=$1 WHERE id=$2';
            let params = [phone, id];
            let resultObj = {
                'stat': false
            };
            this.dbOperations(updatePhoneQuery_update, params).then((res) => {
                if (res.rowCount <= 0) {
                    reject(resultObj);
                    return;
                }
                resultObj.stat = true;
                resolve(resultObj);
            }).catch((err) => {
                if (err) {
                    let message = 'error in usereditservices file on updatephone function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(resultObj);
            });
        });
    }
}
module.exports = UserEditServices;