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
 * unit test for list function
 */
describe('checking the list method in adminSearchServices file', () => {
    let results = { };
    let stub;
    beforeEach( () => {
        results = {
            rows: [
                { count: 1 }
            ]
        };
        stub = sinon.stub(adminSearchServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return adminSearchServices.list().then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return all user object',()=> {
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
