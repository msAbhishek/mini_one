/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-09-13 12:30:43
 * @modify date 2018-10-03 09:41:21
 * @desc [description]
*/

const express = require('express');
const app = express();
const logger = require('./loggerWinston');
const myEmitter = require('./eventEmitter');
const userHomeRouter = require('./src/routers/user/userHome');
const userEditRouter = require('./src/routers/user/userEdit');
const adminHomeRouter = require('./src/routers/admin/adminHome');
const adminViewRouter = require('./src/routers/admin/adminView');
const adminSearchRouter = require('./src/routers/admin/adminSearch');
const indexServices = require('./src/services/indexServices');
const { spawn } = require('child_process');
const { fork } = require('child_process');
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// code for forking email file and spawn batch file
fork('./email.js');
let myBatFilePath = 'D:\\mini_one\\myTestBatfile.bat';
const bat = spawn('cmd.exe',['/c',myBatFilePath]);
bat.stdout.on('data', (data) => {
    console.log(unescape(data));
});
//code for routing
app.use('/userhome', userHomeRouter);
app.use('/useredit', userEditRouter);
app.use('/adminhome', adminHomeRouter);
app.use('/adminview', adminViewRouter);
app.use('/adminsearch', adminSearchRouter);

// code for creating indexservices class
var regServe = new indexServices();

// code for new user regisration
app.post('/reg', (req, response) => {
    regServe.register(req).then((registerObj) => {
        response.send(registerObj);
        let message = 'new user is registered as' + req.body.uname;
        let timeStamp = new Date();
        myEmitter.emit('info', message, timeStamp);
    }).catch((errorObj) => { // eslint-disable-line
        response.send(false);
    });
});

// code for user login check
app.post('/log', (req, response) => {
    regServe.login(req.body.uname, req.body.password).then((loginObj) => {
        if (!loginObj.stat) {
            response.send(false);
            return;
        }
        response.send(loginObj);
        let message = ' user logined as = ' + req.body.uname;
        let timeStamp = new Date();
        myEmitter.emit('info', message, timeStamp);
    }).catch((errorObj) => {// eslint-disable-line
        response.send(false);
    });
});

// code for user name existance check
app.post('/checkusername', (req, response) => {
    var uname = req.body.uname;
    regServe.checkUsername(uname).then((checkUserNameObj) => {
        if (checkUserNameObj.stat) {
            response.send(checkUserNameObj);
        }
    }).catch((errorObj) => {
        response.send(errorObj);
    });
});

app.listen(3001, () => {
    logger.log({
        level: 'info',
        message: 'sever started on port 3001'
    });
});

