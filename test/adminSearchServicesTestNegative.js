/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-10-15 10:23:01
 * @modify date 2018-10-15 10:23:01
 * @desc [description]
*/
const adminSearchServicesFile = require('../src/services/admin/adminSearchServices');
const adminSearchServices = new adminSearchServicesFile();
const assert = require('chai').assert;
const sinon = require('sinon');

/**
 * negative unit test for list function
 */
describe('checking the list method in adminSearchServices file for negative responses', () => {
    let stub;
    beforeEach( () => {
        stub = sinon.stub(adminSearchServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return false response',()=> {
        return adminSearchServices.list().then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err, false);
        });
    });
    afterEach( () =>{
        stub.restore();
    });
});
