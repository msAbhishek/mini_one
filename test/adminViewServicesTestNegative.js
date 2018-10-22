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
 * negative unit test for listAll function
 */
describe('checking the listAll method in adminViewServices file for negative responses', () => {
    let stub;
    beforeEach( () =>{
        stub = sinon.stub(adminViewServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return false response',()=> {
        return adminViewServices.listAll().then((res) => {
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
describe('checking the listSingle method in adminViewServices file for negative responses', () => {
    let stub;
    beforeEach( () => {
        stub = sinon.stub(adminViewServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return false',()=> {
        return adminViewServices.listSingle(1).then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err, false);
        });
    });
    afterEach( () =>{
        stub.restore();
    });
});
