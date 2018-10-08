/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-09-13 12:34:16
 * @modify date 2018-09-20 15:17:34
 * @desc [description]
*/
const express = require('express');
const adminViewRouter = express.Router();
const adminvieServices = require('../../services/admin/adminViewServices');

// code for creating serive class
const adminView = new adminvieServices();

// code for listing all the admins in admin page
adminViewRouter.post('/listall', (req, response) => {
    adminView.listAll(req.body.id).then((res) => {
        response.send(res);
    }).catch((status) => {
        response.send(status);
    });
});


// code for listing a single admin in admin page
adminViewRouter.post('/listsingle', (req, response) => {
    adminView.listSingle(req.body.id).then((res) => {
        response.send(res);
    }).catch((status) => {
        response.send(status);
    });
});
module.exports = adminViewRouter;