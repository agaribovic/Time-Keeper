import sender from '../../src/mailer'
import config from '../config'

const create = ( req, res ) => {
    console.log(req.body)
   var mailOptions = {
       to: config.userMail,
       subject: 'Contact us Form',
       text: ' Name: ' + req.body.name + '\n Email: ' + req.body.email + '\n Phone: ' + req.body.phone + '\n Message: ' + req.body.message  
       
   }
   sender(mailOptions)
}
export default { create };