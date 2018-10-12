/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-10-10 08:55:50
 * @modify date 2018-10-10 08:55:50
 * @desc [description]
*/
const nodemailer = require('nodemailer');
const mailService = require('./src/services/mailServices');
const mail = new mailService();
let toMailAddress = [];
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    auth: {
        user: 'am.soulseeker@gmail.com',
        pass: 'Ams11@96.am'
    }
});
/**
 * scheduling a time interval to send emails at every 6 seconds
 */
setInterval(() => {
    /**
     * function for retrieving all the user emails from database
     */
    mail.getEmails().then((res) => {
        for(let i=0; i< res.rows.length; i++){
            toMailAddress[i] = res.rows[i].email;
            console.log(res.rows[i].email);
        }  
    }).catch((status) => {
        console.log(status);
    });
    console.log(toMailAddress);
    let mailOptions = {
        from: 'am.soulseeker@gmail.com', 
        to: toMailAddress,
        subject: 'Hello ✔',
        text: 'Hello world?', 
        html: '<b>Hello world?</b>'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    }); 
}, 6000);


