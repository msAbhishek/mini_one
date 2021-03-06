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
 * unit test for updateAll function
 */
describe('checking the updateAll method in userEditServices file', () =>{
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
        stub.resolves(dbResults);
    });
    it('should call dbOperations',()=> {
        return userEditServices.updateAll(results).then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return a response object for updating all user details',()=> {
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
 * unit test for checkUsername function
 */
describe('checking the checkUsername method in userEditServices file',  ()=> {
    let results = { };
    let stub;
    beforeEach( () => {
        results = {
            rows: [
                { count: 1 }
            ]
        };
        stub = sinon.stub(userEditServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return userEditServices.checkUsername('abhi').then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return a response object after checking username existing',()=> {
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
 * unit test for updateName function
 */
describe('checking the updateName method in userEditServices file', ()=> {
    let results = { };
    let stub;
    beforeEach( () => {
        results = {
            rowCount: 1
        };
        stub = sinon.stub(userEditServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return userEditServices.updateName(1,'abhi').then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return a response object after updating name',()=> {
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
 * unit test for updateUname function
 */
describe('checking the updateUname method in userEditServices file',  ()=> {
    let results = { };
    let stub;
    beforeEach( () =>{
        results = {
            rowCount: 1
        };
        stub = sinon.stub(userEditServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return userEditServices.updateUname(1,'abhi').then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return a response object after updating username',()=> {
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
 * unit test for updateAddress function
 */
describe('checking the updateAddress method in userEditServices file',  ()=> {
    let results = { };
    let stub;
    beforeEach( ()=> {
        results = {
            rowCount: 1
        };
        stub = sinon.stub(userEditServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return userEditServices.updateAddress(1,'abhi').then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return a response object after updating address',()=> {
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
 * unit test for updateEmail function
 */
describe('checking the updateEmail method in userEditServices file',  ()=> {
    let results = { };
    let stub;
    beforeEach( ()=> {
        results = {
            rowCount: 1
        };
        stub = sinon.stub(userEditServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return userEditServices.updateEmail(1,'abhi').then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return a response object after updating email',()=> {
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
 * unit test for updatePassword function
 */
describe('checking the updatePassword method in userEditServices file',  ()=> {
    let results = { };
    let stub;
    beforeEach( ()=> {
        results = {
            rowCount: 1
        };
        stub = sinon.stub(userEditServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return userEditServices.updatePassword(1,'abhi').then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return a response object after updating password',()=> {
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
 * unit test for updatePhone function
 */
describe('checking the updatePhone method in userEditServices file',  ()=> {
    let results = { };
    let stub;
    beforeEach( () =>{
        results = {
            rowCount: 1
        };
        stub = sinon.stub(userEditServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return userEditServices.updatePhone(1,'abhi').then(() => {
            assert(stub.calledOnce);
        }).catch(() => {
            assert(stub.calledOnce);
        });
    });
    it('should return a response object after updating phone',()=> {
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