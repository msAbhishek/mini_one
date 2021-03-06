/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-10-19 09:43:42
 * @modify date 2018-10-19 09:43:42
 * @desc [description]
*/
const mailServices = require('../src/services/mailServices');
const mail = new mailServices();
const assert = require('chai').assert;
const sinon = require('sinon');
/**
 * unit test for getEmail function
 */
describe('checking the getEmail method in mailServices file',  () =>{
    let results = { };
    let stub;
    beforeEach( () =>{
        results = {
            rows: [
                { email: 'abhishekms@gmail.com' }
            ]
        };
        stub = sinon.stub(mail, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return mail.getEmails().then(() => { 
            assert(stub.calledOnce);
        }).catch((err) => {
            assert.equal(err, false);
        });
    });
    it('should return emails',()=> {
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