/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-10-12 16:57:05
 * @modify date 2018-10-12 16:57:05
 * @desc [description]
*/
const adminHomeServicesFile = require('../src/services/admin/adminHomeServices');
const adminHomeServices = new adminHomeServicesFile();
const assert = require('chai').assert;
const sinon = require('sinon');

/**
 * negative unit test for listAll function
 */
describe('checking the listAll method in adminHomeServices file for negative responses', () => {
    let stub;
    beforeEach( () =>{
        stub = sinon.stub(adminHomeServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return false',()=> {
        return adminHomeServices.listAll().then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err, false);
        });
    });
    afterEach( () =>{
        stub.restore();
    });
});

/**
 * negative unit test for listSingle function
 */
describe('checking the listSingle method in adminHomeServices file for negative responses', ()=> {
    let stub;
    beforeEach( () =>{
        stub = sinon.stub(adminHomeServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return false',()=> {
        return adminHomeServices.listSingle(1).then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err, false);
        });
    });
    afterEach(()=>{
        stub.restore();
    });
});

/**
 * negative unit test for makeAdmin function
 */
describe('checking the makeAdmin method in adminHomeServices file for negative responses', ()=> {
    let stub;
    beforeEach( ()=> {
        stub = sinon.stub(adminHomeServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return false',()=> {
        return adminHomeServices.makeAdmin('abhi').then((res) => {
            assert.equal(res.rowCount, 1);
        }).catch((err) => {
            assert.equal(err, false);
        });
    });
    afterEach( ()=>{
        stub.restore();
    });
});

/**
 * negative unit test for deleteUser function
 */
describe('checking the deleteUser method in adminHomeServices file for negative responses', ()=> {
    let stub;
    beforeEach( () => {
        stub = sinon.stub(adminHomeServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return false',()=> {
        return adminHomeServices.deleteUser('abhi').then((res) => {
            assert.equal(res.rowCount, 1);
        }).catch((err) => {
            assert.equal(err, false);
        });
    });
    afterEach( () =>{
        stub.restore();
    });
});


