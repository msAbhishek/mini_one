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
 * negative unit test for checkUsername function
 */
describe('checking the checkusername method in indexservices file for negative responses',  ()=> {
    let stub;
    beforeEach(function () {
        stub = sinon.stub(indexServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return false',()=> {
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
 * negative unit test for login function
 */
describe('checking the login method in indexservices file for negative responses ',  ()=> {
    let stub;
    let userPassword = 'Abhi@123';
    let userName = 'abhi';
    beforeEach(function () {
        stub = sinon.stub(indexServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return false ',()=> {
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

/**
 * negative unit test for register function
 */
describe('checking the register method in indexservices file for negative responses',  () => {
    let results = { };
    let stub;
    let tempStub;
    beforeEach(()=> {
        results = {
            body: {
                id: 1 ,
                uname: 'abhi' ,
                name: 'abhi' ,
                password: 'Abhi@123' ,
                email: 'abhi' ,
                phone: 99999999999 ,
                address: 'abhi' ,
                usertype: 'user' 
            }
        };
        stub = sinon.stub(indexServices, 'dbOperations');
        stub.rejects(false);
        tempStub = sinon.stub(indexServices, 'defaultImageQuery');
        tempStub.rejects(false);
    });
    it('should return false',()=> {
        return indexServices.register(results).then((res) => {
            assert.equal(res, true);
        }).catch((err) => {
            assert.equal(err, false);
        });
    });
    afterEach( () => {
        stub.restore();
    });
});

