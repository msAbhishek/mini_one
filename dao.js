/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-09-20 15:14:34
 * @modify date 2018-09-20 15:14:34
 * @desc [description]
*/
const myEmitter = require('./eventEmitter');
const pg = require('pg');
const Promise = require('promise');
class Databaseclass {
    constructor() {
        this.connection = new pg.Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'details',
            password: 'postgres',
            port: 5432,
        });
    }
    /**
     * function for executing database queries
     * @param {*} query 
     * @param {*} params 
     */
    dbOperations(query, params) {
        let con = this;
        return new Promise((resolve, reject) => {
            con.connection.query(query, params, (err, res) => {
                try {
                    if (res.rowCount) {
                        resolve(res);
                    }
                    else if (err) {
                        reject(err);
                        let message = 'database execution error';
                        let timeStamp = new Date();
                        myEmitter.emit('error', message, timeStamp, err);
                    }
                    else {
                        reject(false);
                    }
                }
                catch (err) {
                    let message = 'exception in query execution results';
                    let timeStamp = new Date();
                    myEmitter.emit('error', message, timeStamp, err);
                }
            });
        });
    }
}
module.exports = Databaseclass;
