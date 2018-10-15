const mailServices = require('../src/services/mailServices');
const mail = new mailServices();
const assert = require('chai').assert;
const sinon = require('sinon');
describe('checking the get email method in mailServices file',  () =>{
    let results = { };
    let stub;
    beforeEach(function () {
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
    afterEach(function (){
        stub.restore();
    });
});