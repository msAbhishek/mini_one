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
 * unit test for getDetails function
 */
describe('checking the getDetails method in userHomeServices file', function () {
    let results = { };
    let stub;
    beforeEach(function () {
        results = {
            rows: [
                { id: 1 },
                { uname: 'abhi' },
                { name: 'abhi' },
                { password: '$2a$10$12fLWGaBkFbRMYkdqKCOD.n13iJj1bdP9AIWYjHJq5vB810P/2bu.' },
                { email: 'abhi' },
                { phone: 99999999999 },
                { address: 'abhi' },
                { usertype: 'user' }
            ]
        };
        stub = sinon.stub(userHomeServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return userHomeServices.getDetails(1).then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return user object',()=> {
        return userHomeServices.getDetails(1).then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err.stat, false);
        });
    });
    afterEach(function (){
        stub.restore();
    });
});
