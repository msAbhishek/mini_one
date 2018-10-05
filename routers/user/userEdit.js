/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-09-13 12:31:11
 * @modify date 2018-09-20 15:17:19
 * @desc [description]
*/
const express = require('express');
const userEditRouter = express.Router();
const usereditServices = require('../../services/user/userEditServices');
const myEmitter = require('../../eventEmitter');

// code for creating service class
const userEdit = new usereditServices();

// code for user name existance check
userEditRouter.post('/checkusername', (req, response) => {
    let uname = req.body.uname;
    userEdit.checkUsername(uname).then((res) => {
        if (res.stat) {
            response.send(true);
        }
        else{
            response.send(false);
        }
    }).catch((statusObj) => {
        if (!statusObj.stat) {
            response.send(false);
        }
    });
});

//  code for user all details update  request
userEditRouter.post('/updateall', (req, response) => {
    userEdit.updateAll(req).then((res) => {
        if (res.rowCount>0) {
            response.send(true);
            let message = 'user id = '+req.body.id+' is updated all details';
            let timeStamp = new Date();
            myEmitter.emit('info', message, timeStamp);
        }
        else{
            response.send(false);
        }
    }).catch((statusObj) => {
        if(!statusObj){
            response.send(false);
        }
    }); 
});


//  code for  name update  request
userEditRouter.post('/updatename', (req, response) => {
    userEdit.updateName(req.body.id,req.body.name).then((res) => {
        if (res.stat) {
            response.send(true);
            let message = 'user id = '+req.body.id+' is updated name';
            let timeStamp = new Date();
            myEmitter.emit('info', message, timeStamp);
        }
        else{
            response.send(false);
        }
    }).catch((statusObj) => {
        if(!statusObj){
            response.send(false);
        }
    }); 
});

//  code for  username update  request
userEditRouter.post('/updateuname', (req, response) => {
    userEdit.updateUname(req.body.id,req.body.uname).then((res) => {
        if (res.stat) {
            response.send(true);
            let message = 'user id = '+req.body.id+' is updated uname';
            let timeStamp = new Date();
            myEmitter.emit('info', message, timeStamp);
        }
        else{
            response.send(false);
        }
    }).catch((statusObj) => {
        if(!statusObj.stat){
            response.send(false);
        }
    }); 
});

//  code for  address update  request
userEditRouter.post('/updateaddress', (req, response) => {
    userEdit.updateAddress(req.body.id,req.body.address).then((res) => {
        if (res.stat) {
            response.send(true);
            let message = 'user id = '+req.body.id+' is updated address';
            let timeStamp = new Date();
            myEmitter.emit('info', message, timeStamp);
        }
        else{
            response.send(false);
        }
    }).catch((statusObj) => {
        if(!statusObj.stat){
            response.send(false);
        }
    }); 
});

//  code for  email update  request
userEditRouter.post('/updateemail', (req, response) => {
    userEdit.updateEmail(req.body.id,req.body.email).then((res) => {
        if (res.stat) {
            response.send(true);
            let message = 'user id = '+req.body.id+' is updated email';
            let timeStamp = new Date();
            myEmitter.emit('info', message, timeStamp);
        }
        else{
            response.send(false);
        }
    }).catch((statusObj) => {
        if(!statusObj.stat){
            response.send(false);
        }
    });  
});

//  code for  password update  request
userEditRouter.post('/updatepassword', (req, response) => {
    userEdit.updatePassword(req.body.id,req.body.password).then((res) => {
        if (res.stat) {
            response.send(true);
            let message = 'user id = '+req.body.id+' is updated password';
            let timeStamp = new Date();
            myEmitter.emit('info', message, timeStamp);
        }
        else{
            response.send(false);
        }
    }).catch((statusObj) => {
        if(!statusObj.stat){
            response.send(false);
        }
    });  
});

//  code for  phone update  request
userEditRouter.post('/updatephone', (req, response) => {
    userEdit.updatePhone(req.body.id,req.body.phone).then((res) => {
        if (res.stat) {
            response.send(true);
            let message = 'user id = '+req.body.id+' is updated phone number';
            let timeStamp = new Date();
            myEmitter.emit('info', message, timeStamp);
        }
        else{
            response.send(false);
        }
    }).catch((statusObj) => {
        if(!statusObj.stat){
            response.send(false);
        }
    }); 
});

module.exports = userEditRouter;