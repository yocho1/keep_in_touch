const nodemailer = require('nodemailer')
const Users = require('../models/userModel')





    const sendMail =async (req,res)=>{

        const {email,subject,text}= req.body
        const user = Users.findOne({email: email})
        if(user){
    
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'companytest256@gmail.com',
                  pass: 'testTEST2021'
                }
              });
    
              var mailOptions = {
                from: 'companytest256@gmail.com',
                to: `${email}`,
                subject: `${subject}`,
                text: `${text}`
              };
    
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
                res.send('email sent')
        }else{
            console.log("Not send")
        }
        }
    

module.exports = sendMail