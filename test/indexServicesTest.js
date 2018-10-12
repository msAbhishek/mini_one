/* eslint-disable */
const indexServicesFile = require('../src/services/indexServices');
const indexServices = new indexServicesFile();
const assert = require('chai').assert;
const sinon = require('sinon');
describe('checking the checkusername method in indexservices', function () {
    let results = { };
    let stub;
    beforeEach(function () {
        results = {
            rows: [
                { count: 1 }
            ]
        };
        stub = sinon.stub(indexServices, 'dbOperations');
        stub.resolves(results);
    });
    it('should call dbOperations',()=> {
        return indexServices.checkUsername('abhi').then((res) => {
            assert(stub.calledOnce);
        }).catch((err) => {
            assert(stub.calledOnce);
        });
    });
    it('should return status object',()=> {
        return indexServices.checkUsername('abhi').then((res) => {
            assert.equal(res.stat, true);
        }).catch((err) => {
            assert.equal(err.stat, false);
        });
    });
    afterEach(function (){
        stub.restore();
    });
})

// describe('checking the login method in indexservices', function () {
//     let results = { };
//     let stub;
//     let userPassword = 'Abhi@123';
//     let userName = 'abhi';
//     beforeEach(function () {
//         results = {
//             rows: [
//                 { id: 1 },
//                 { uname: 'abhi' },
//                 { password: '$2a$10$12fLWGaBkFbRMYkdqKCOD.n13iJj1bdP9AIWYjHJq5vB810P/2bu.' },
//                 { usertype: 'user' }
//             ]
//         };
//         stub = sinon.stub(indexServices, 'dbOperations');
//         stub.resolves(results);
//     });
//     it('should call dbOperations',()=> {
//         return indexServices.login(userName,userPassword).then((res) => {
//             assert(stub.calledOnce);
//         }).catch((err) => {
//             assert(stub.calledOnce);
//         });
//     });
//     it('should return user object ',()=> {
//         return indexServices.checkUsername('abhi').then((res) => {
//             assert.equal(res.stat, true);
//         }).catch((err) => {
//             assert.equal(err.stat, false);
//         });
//     });
//     afterEach(function (){
//         stub.restore();
//     });
// })