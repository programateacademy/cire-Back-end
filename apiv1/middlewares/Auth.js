"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Auth = void 0;
var _jwtSimple = require("jwt-simple");
require("dotenv/config");
const secret = process.env.SECRET;
const Auth = (req, res, next) => {
  if (!req.headers.authorization) return res.status(403).send({
    success: false,
    message: 'Sin cabeceras de autenticación'
  });
  const token = req.headers.authorization.split(' ')[1];
  const {
    sub,
    role
  } = (0, _jwtSimple.decode)(token, secret);
  req.user = sub;
  req.role = role;
  next();
};
exports.Auth = Auth;