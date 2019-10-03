import config from '../src/config'
import nodemailer from 'nodemailer'

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
   user: config.userMail,
   pass: config.userPassword
 }
});

var sender = (mailOptions) => {
   transporter.sendMail(mailOptions, function(error, info){
       if (error) {
         console.log(error);
       } else {
         console.log('Email sent: ' + info.response);
       }
   })
}

export default sender

