/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-09-13 12:34:07
 * @modify date 2018-09-20 15:17:48
 * @desc [description]
*/
const express = require('express');
const adminHomeRouter = express.Router();
const adminhomeServices = require('../../services/admin/adminHomeServices');

//  code for creating service class 
const adminHome = new adminhomeServices();


// code for listing all the users in admin page
adminHomeRouter.post('/listall', (req, response) => {
    adminHome.listAll().then((res) => {
        response.send(res);
    }).catch((status) => {
        response.send(status);
    });
});


// code for listing a single user in admin page
adminHomeRouter.post('/listsingle', (req, response) => {
    adminHome.listSingle(req.body.id).then((res) => {
        response.send(res);
    }).catch((status) => {
        response.send(status);
    });
});

// code for making a  user as admin
adminHomeRouter.post('/makeasadmin', (req, response) => {
    let stat = false;
    adminHome.makeAdmin(req.body.uname).then((res) => {
        if (res.rowCount > 0) {
            response.send(true);
        }
        else {
            response.send(stat);
        }
    }).catch((status) => {
        if(!status){
            response.send(stat);
        }
    });
});

// code for deleting a  user by admin
adminHomeRouter.post('/deleteuser', (req, response) => {
    let stat = false;
    adminHome.deleteUser(req.body.uname).then((res) => {
        if (res.rowCount > 0) {
            response.send(true);
        }
        else {
            response.send(stat);
        }
    }).catch((status) => {
        if(!status){
            response.send(stat);
        }
    });
});

module.exports = adminHomeRouter;