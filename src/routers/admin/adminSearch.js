/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-09-13 12:34:10
 * @modify date 2018-09-20 15:17:41
 * @desc [description]
*/
const express = require('express');
const adminSearchRouter = express.Router();
const adninsearchServices = require('../../services/admin/adminSearchServices');

//  code for creating service classes
var adminSearch = new adninsearchServices();

// code for  search 
adminSearchRouter.post('/list', (req, response) => {
    let uname = req.body.uname;
    let id = req.body.id;
    uname += '%';
    adminSearch.list(id, uname).then((res) => {
        response.send(res);
    }).catch((status) => {
        response.send(status);
    });
});

module.exports = adminSearchRouter;