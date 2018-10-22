/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-10-12 17:34:19
 * @modify date 2018-10-12 17:34:19
 * @desc [description]
*/
const userEditServicesFile = require('../src/services/user/userEditServices');
const userEditServices = new userEditServicesFile();
const assert = require('chai').assert;
const sinon = require('sinon');

/**
 * negative unit test for updateAll function
 */
describe('checking the updateAll method in userEditServices file for negative responses', () =>{
    let results = { };
    let dbResults = {
        rowCount: 1
    };
    let stub;
    beforeEach( () => {
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
        stub = sinon.stub(userEditServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return a false response',()=> {
        return userEditServices.updateAll(results).then(() => {
            assert.equal(dbResults.rowCount, 1);
        }).catch((err) => {
            assert.equal(err, false);
        });
    });
    afterEach( () =>{
        stub.restore();
    });
});

/**
 * negative unit test for checkUsername function
 */
describe('checking the checkUsername method in userEditServices file for negative responses',  ()=> {
    let stub;
    beforeEach( () => {
        stub = sinon.stub(userEditServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return a false response',()=> {
        return userEditServices.checkUsername('abhi').then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err.stat, false);
        });
    });
    afterEach( () =>{
        stub.restore();
    });
});

/**
 * negative unit test for updateName function
 */
describe('checking the updateName method in userEditServices file for negative responses', ()=> {
    let stub;
    beforeEach( () => {
        stub = sinon.stub(userEditServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return a false response',()=> {
        return userEditServices.updateName(1,'abhi').then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err.stat, false);
        });
    });
    afterEach( () =>{
        stub.restore();
    });
});

/**
 * negative unit test for updateUname function
 */
describe('checking the updateUname method in userEditServices file for negative responses',  ()=> {
    let stub;
    beforeEach( () =>{
        stub = sinon.stub(userEditServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return a false response',()=> {
        return userEditServices.updateUname(1,'abhi').then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err.stat, false);
        });
    });
    afterEach( ()=>{
        stub.restore();
    });
});

/**
 * negative unit test for updateAddress function
 */
describe('checking the updateAddress method in userEditServices file for negative responses',  ()=> {
    let stub;
    beforeEach( ()=> {
        stub = sinon.stub(userEditServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return a false response',()=> {
        return userEditServices.updateAddress(1,'abhi').then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err.stat, false);
        });
    });
    afterEach( ()=>{
        stub.restore();
    });
});

/**
 * negative unit test for updateEmail function
 */
describe('checking the updateEmail method in userEditServices file for negative responses',  ()=> {
    let stub;
    beforeEach( ()=> {
        stub = sinon.stub(userEditServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return a false response',()=> {
        return userEditServices.updateEmail(1,'abhi').then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err.stat, false);
        });
    });
    afterEach( ()=>{
        stub.restore();
    });
});

/**
 * negative unit test for updatePassword function
 */
describe('checking the updatePassword method in userEditServices file for negative responses',  ()=> {
    let stub;
    beforeEach( ()=> {
        stub = sinon.stub(userEditServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return a false response',()=> {
        return userEditServices.updatePassword(1,'abhi').then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err.stat, false);
        });
    });
    afterEach( ()=>{
        stub.restore();
    });
});

/**
 * negative unit test for updatePhone function
 */
describe('checking the updatePhone method in userEditServices file for negative responses',  ()=> {
    let stub;
    beforeEach( () =>{
        stub = sinon.stub(userEditServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return a false response',()=> {
        return userEditServices.updatePhone(1,'abhi').then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err.stat, false);
        });
    });
    afterEach( ()=>{
        stub.restore();
    });
});