/* eslint-disable */
const mailServices = require('../src/services/mailServices');
const mail = new mailServices();
const assert = require('chai').assert;
const sinon = require('sinon');
describe('checking the get email method', function () {
    let results = { };
    let stub;
    before(function () {
        results = {
            rows: [
                { email: 'abhishekms@gmail.com' }
            ]
        };
        stub = sinon.stub(mail, 'dbOperations');
        stub.resolves(results);
    });
    
    it('should call dbOperations and return emails', function (done) {
        mail.getEmails().then((res) => {
            assert.equal(res, true);
        });
        done();
        //assert.equal(5, 6);
    })

    afterEach(function (){
        stub.restore();
    });
})