/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-10-12 17:02:02
 * @modify date 2018-10-12 17:02:02
 * @desc [description]
*/
const userHomeServicesFile = require('../src/services/user/userHomeServices');
const userHomeServices = new userHomeServicesFile();
const assert = require('chai').assert;
const sinon = require('sinon');

/**
 * negative unit test for getDetails function
 */
describe('checking the getDetails method in userHomeServices file for negative responses',  ()=> {
    let stub;
    beforeEach( () => {
        stub = sinon.stub(userHomeServices, 'dbOperations');
        stub.rejects(false);
    });
    it('should return false message',()=> {
        return userHomeServices.getDetails(1).then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err.stat, false);
        });
    });
    afterEach( ()=>{
        stub.restore();
    });
});
