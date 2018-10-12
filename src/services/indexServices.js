/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-09-20 15:15:09
 * @modify date 2018-10-03 09:47:20
 * @desc [description]
*/
const database = require('../../dao');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const Promise = require('promise');
const myEmitter = require('../../eventEmitter');
class IndexServices extends database {
    /**
     * register function for registering new user
     * @param {*} registerObj 
     */
    register(userObj) {
        let self = this;
        return new Promise((resolve, reject) => {
            let type = 'user';
            let password = userObj.body.password;
            let stat = true;
            let params = [userObj.body.name, userObj.body.uname, userObj.body.address, userObj.body.email, userObj.body.password, userObj.body.phone, type];
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    params[4] = hash;
                    let registerQuery_insert = 'INSERT INTO employee(name,uname,address,email,password,phone,usertype) values($1,$2,$3,$4,$5,$6,$7)';
                    self.dbOperations(registerQuery_insert, params).then(() => {
                        let registerQuery_select = 'SELECT * FROM employee WHERE uname =$1';
                        let params = userObj.body.uname;
                        return self.dbOperations(registerQuery_select, [params]);
                    }).then((res) => {
                        resolve(stat);
                        fs.createReadStream('./public/testimg/avatarmen.jpg').pipe(fs.createWriteStream('./public/testimg/user_Image/' + res.rows[0].id + '.jpg'));
                    }).catch((err) => {
                        if (err) {
                            let message = ' error in indexservice file on register function';
                            let timeStamp = new Date();
                            myEmitter.emit('error', message, timeStamp, err);
                        }
                        reject(false);
                    });
                });
            });
        });
    }
    /**
     * login function
     * @param {*} uname 
     * @param {*} password 
     */
    login(uname, password) {
        return new Promise((resolve, reject) => {
            let loginQuery_select = 'SELECT * FROM employee WHERE uname =$1';
            let Params = uname;
            this.dbOperations(loginQuery_select, [Params]).then((res) => {
                if (res.rows.length <= 0) {
                    reject(false);
                    return;
                }
                bcrypt.compare(password, res.rows[0].password, (err, responseObj) => {
                    if (!responseObj) {
                        reject(false);
                        return;
                    }
                    let resultTrueObj = {
                        'id': res.rows[0].id,
                        'type': res.rows[0].usertype,
                        'stat': true,
                        'name': res.rows[0].uname
                    };
                    resolve(resultTrueObj);
                });

            }).catch((err) => {
                if (err) {
                    let message = 'error in indexservice file on login function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(false);
            });
        });
    }
    /**
     * function for checking username existance
     * @param {*} uname 
     */
    checkUsername(uname) {
        return new Promise((resolve, reject) => {
            let resultObj = {
                'stat': false
            };
            let checkUserNameQuery_select = 'SELECT count(*) FROM employee WHERE uname = $1';
            this.dbOperations(checkUserNameQuery_select, [uname]).then((res) => {
                if (res.rows[0].count <= 0) {
                    reject(resultObj);
                    return;
                }
                resultObj.stat = true;
                resolve(resultObj);
            }).catch((err) => {
                if (err) {
                    let message = ' error in indexservice file on checkusername function';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
                reject(resultObj);
            });
        });
    }
}
module.exports = IndexServices;