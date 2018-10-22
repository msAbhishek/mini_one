/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-10-19 09:43:51
 * @modify date 2018-10-19 09:43:51
 * @desc [description]
*/
const mailServices = require('../src/services/mailServices');
const mail = new mailServices();
const assert = require('chai').assert;
const sinon = require('sinon');
/**
 * negative unit test for getEmail function
 */
describe('checking the getEmail method in mailServices file for negative responses',  () =>{
    let results = { };
    let stub;
    beforeEach( () =>{
        results = {
            rows: [
                { email: 'abhishekms@gmail.com' }
            ]
        };
        stub = sinon.stub(mail, 'dbOperations');
        stub.rejects(false);
    });
    it('should return false message',()=> {
        return mail.getEmails().then((res) => {
            assert.equal(res, results);
        }).catch((err) => {
            assert.equal(err, false);
        });
    });
    afterEach( ()=>{
        stub.restore();
    });
});