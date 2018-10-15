/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-10-15 10:23:01
 * @modify date 2018-10-15 10:23:01
 * @desc [description]
*/
const adminViewServicesFile = require('../src/services/admin/adminViewServices');
const adminViewServices = new adminViewServicesFile();
const assert = require('chai').assert;
const sinon = require('sinon');

/**
 * unit test for listAll function
 */
describe('checking the listAll method in adminViewServices file', () => {
    let results = { };
    let stub;
    beforeEach(function () {
        results = {
            rows: [
                { count: 1 }
            ]
        };
        stub = sinon.stub(adminViewServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return adminViewServices.listAll().then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return all user object',()=> {
        return adminViewServices.listAll().then((res) => {
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
 * unit test for listSingle function
 */
describe('checking the listSingle method in adminViewServices file', () => {
    let results = { };
    let stub;
    beforeEach(function () {
        results = {
            rows: [
                { count: 1 }
            ]
        };
        stub = sinon.stub(adminViewServices, 'dbOperations');
        stub.rejects(results);
    });
    it('should call dbOperations',()=> {
        return adminViewServices.listSingle(1).then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return all user object',()=> {
        return adminViewServices.listSingle(1).then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err, false);
        });
    });
    afterEach(function (){
        stub.restore();
    });
});
