/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-10-12 16:57:05
 * @modify date 2018-10-12 16:57:05
 * @desc [description]
*/
const indexServicesFile = require('../src/services/indexServices');
const indexServices = new indexServicesFile();
const assert = require('chai').assert;
const sinon = require('sinon');

/**
 * unit test for checkUsername function
 */
describe('checking the checkusername method in indexservices file',  ()=> {
    let results = { };
    let stub;
    beforeEach(function () {
        results = {
            rows: [
                { count: 1 }
            ]
        };
        stub = sinon.stub(indexServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return indexServices.checkUsername('abhi').then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return status object',()=> {
        return indexServices.checkUsername('abhi').then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err.stat, false);
        });
    });
    afterEach(function (){
        stub.restore();
    });
});

/**
 * unit test for login function
 */
describe('checking the login method in indexservices file',  ()=> {
    let results = { };
    let stub;
    let userPassword = 'Abhi@123';
    let userName = 'abhi';
    beforeEach(function () {
        results = {
            rows: [
                { id: 1 },
                { uname: 'abhi' },
                { password: '$2a$10$12fLWGaBkFbRMYkdqKCOD.n13iJj1bdP9AIWYjHJq5vB810P/2bu.' },
                { usertype: 'user' }
            ]
        };
        stub = sinon.stub(indexServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return indexServices.login(userName,userPassword).then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return user object ',()=> {
        return indexServices.login(userName,userPassword).then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err, false);
        });
    });
    afterEach(function (){
        stub.restore();
    });
});
