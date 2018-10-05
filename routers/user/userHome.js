/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-09-13 12:31:04
 * @modify date 2018-09-20 15:17:10
 * @desc [description]
*/
const express = require('express');
const userHomeRouter = express.Router();
const userhomeservices = require('../../services/user/userHomeServices');
const fs = require('fs');
const myEmitter = require('../../eventEmitter');

// code for creating service classes
const userhome = new userhomeservices();

//  code for user name details  request
userHomeRouter.post('/getdetails', (req, response) => {
    userhome.getDetails(req.body.id).then((res) => {
        response.send(res);
    }).catch((statusObj) => {
        response.send(statusObj);
    });
});

//  code for  user image upload  request
userHomeRouter.post('/uploadImage', (req, response) => {
    let id = req.body.id;
    let img = req.body.img;
    let path = './public/testimg/user_Image/' + id + '.jpg';
    let data = img.replace(/^data:image\/\w+;base64,/, '');
    let buf = new Buffer(data, 'base64');
    fs.writeFile(path, buf,()=>{});
    response.send(true);
    let message = ' user id = '+id+' updated the image';
    let timeStamp = new Date();
    myEmitter.emit('info', message, timeStamp);
});


module.exports = userHomeRouter;