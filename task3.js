var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'praveenkurma672@gmail.com',
        pass:'Kuhfhjdjx23!'
    }
});
    var mailOptions={
        from:'praveenkurma672@gmail.com',
        to:'pravin.consensus@gmail.com',
        subject:'sending from 21A25A0413',
        text:'good Afternoon sir'
    };
    transporter.sendMail(mailOptions,function(error,info){
        if(error)
        {
            console.log(error);
        }
        else{
            console.log('email sents'+info.response);
        }
    });