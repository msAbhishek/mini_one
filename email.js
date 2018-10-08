const nodemailer = require('nodemailer');
process.on('message', (msg) => {
    console.log('Message from parent:', msg);
});
setInterval(() => {
}, 5000);
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    auth: {
        user: 'abhishekmsams54@gmail.com',
        pass: 'abhishekms@96.am'
    }
});
let mailOptions = {
    from: 'abhishekmsams54@gmail.com', 
    to: 'abhishekmsam54@gmail.com',
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

