const nodemailer=require('nodemailer');
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'devadathme@gmail.com',
        pass:''
    }
});

const mailOptions={
    from:'devadathme@gmail.com',
    to:'lekshmijskishor@gmail.com',
    subject:'testing',
    text:'This email is sent using Node.js Nodemailer service.'
};

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log("Error occurred:",error);
    }else{
        console.log("Email sent succesfully!");
        console.log("Response:",info.response);
    }
});