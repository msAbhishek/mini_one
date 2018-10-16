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
 * unit test for listAll function
 */
describe('checking the listAll method in adminHomeServices file', () => {
    let results = { };
    let stub;
    beforeEach( () =>{
        results = {
            rows: [
                { count: 1 }
            ]
        };
        stub = sinon.stub(adminHomeServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return adminHomeServices.listAll().then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return all user object',()=> {
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
 * unit test for listSingle function
 */
describe('checking the listSingle method in adminHomeServices file', ()=> {
    let results = { };
    let stub;
    beforeEach( () =>{
        results = {
            rows: [
                { count: 1 }
            ]
        };
        stub = sinon.stub(adminHomeServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return adminHomeServices.listSingle(1).then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return a single object',()=> {
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
 * unit test for makeAdmin function
 */
describe('checking the makeAdmin method in adminHomeServices file', ()=> {
    let results = { };
    let stub;
    beforeEach( ()=> {
        results = {
            rowCount: 1 
        };
        stub = sinon.stub(adminHomeServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return adminHomeServices.makeAdmin('abhi').then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return a status  object',()=> {
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
 * unit test for deleteUser function
 */
describe('checking the deleteUser method in adminHomeServices file', ()=> {
    let results = { };
    let stub;
    beforeEach( () => {
        results = {
            rowCount: 1 
        };
        stub = sinon.stub(adminHomeServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return adminHomeServices.deleteUser('abhi').then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return a status  object',()=> {
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


