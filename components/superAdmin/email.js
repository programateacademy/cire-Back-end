const nodemailer = require('nodemailer');
require('dotenv').config();

/**
 * Envía correos electrónicos.
 *
 * @param { Object<string, string> } mail - Datos del correo electrónico.
 *
 * Ejemplo de de uso:
 *
 * ```
 * sendMail({
 *  subject: 'Subject from email',
 *  body: 'Content from email',
 *  to: 'destinatario@ejemplo.com'
 * });
 * ```
 *
 * @returns { Promise<void> }
 */
async function sendMail(mail) {
    const { subject, body, to } = mail;

    // Configurar el objeto transporter con los detalles del servidor SMTP
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD_MAIL
        }
    });

    // Configurar el contenido del correo electrónico
    const mailOptions = {
        from: process.env.FROM,
        to: to,
        subject: subject,
        text: body
    };

    // Enviar el correo electrónico utilizando el objeto transporter y mailOptions
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.warn(error);
        } else {
            console.log('Correo electrónico enviado: ' + info.response);
        }
    });
}

exports.modules = sendMail;

