
function Mail(){
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vhnm17@gmail.com',
    pass: 'Brutaldead789'
  }
});

var mailOptions = {
  from: 'vhnm17@gmail.com',
  to: 'vhnm17@hotmail.com',
  subject: 'Notification',
  text: 'User IN!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}