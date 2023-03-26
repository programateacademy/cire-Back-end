const { createTransport } = require('nodemailer');

const user = process.env.EMAIL_ADDRESS;
const pass = process.env.EMAIL_PASS;

const transporter = createTransport({
    service: 'aspmx.l.google.com',
    port:465,
    auth: {
        user,
        pass
    }
})

const emailPort = `aspmx.l.google.com${process.env.PORT}` || 3000;

const emailHandler = async ({from,to,subject,text,html},res,next) => {
    const mailOptions = {
        from,
        to,
        subject,
        text,
        html
    }
    transporter.sendMail(mailOptions,(err,response) => {
        if(err) {
            console.log('Ha ocurrido un error', err);
            return next(err);
        } else {
            console.log(response);
            return res.status(200).send({success:true,message:"Mensaje de recuperación enviado"})
        }
    });
}

module.exports = {
  emailHandler,
  transporter,
  emailPort
}
