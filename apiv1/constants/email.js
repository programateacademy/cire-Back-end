"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emailHandler = void 0;
var _nodemailer = require("nodemailer");
require("dotenv/config");
const user = process.env.EMAIL_ADDRESS;
const pass = process.env.EMAIL_PASS;
const transporter = (0, _nodemailer.createTransport)({
  host: 'smtp.google.com',
  port: 465,
  secure: false,
  auth: {
    user,
    pass
  }
});
const emailHandler = async (options, res, next) => {
  try {
    const mailOptions = {
      ...options
    };
    let response = await transporter.sendMail(mailOptions);
    console.log(response);
    return response;
  } catch (error) {
    return next(error);
  }
};
exports.emailHandler = emailHandler;
