"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forgotPassword = exports.SignUP = exports.SignIn = void 0;
var _User = _interopRequireDefault(require("../models/User"));
var _password = require("../services/password");
var _auth = require("../services/auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//import { emailHandler } from '../constants/email';

const SignUP = async (req, res, next) => {
  try {
    let {
      email,
      password,
      role
    } = req.body;
    let hash = await (0, _password.hashPassword)(password);
    password = hash;
    const user = new _User.default({
      email,
      password,
      role
    });
    const userSaved = await user.save();
    const token = (0, _auth.createToken)(userSaved);
    return res.status(200).send({
      success: true,
      token,
      doc: userSaved
    });
  } catch (error) {
    next(error);
  }
};
exports.SignUP = SignUP;
const SignIn = async (req, res, next) => {
  try {
    let {
      email,
      password
    } = req.body;
    let user = await _User.default.findOne({
      email
    });
    if (!user) res.status(401).send({
      success: false,
      message: 'Usuario y/o contraseña, inválidos.'
    });
    const {
      isValid
    } = await (0, _password.checkPassword)(password, user.password);
    if (!isValid) res.status(401).send({
      success: false,
      message: 'Usuario y/o contraseña, inválidos.'
    });
    const token = (0, _auth.createToken)(user);
    return res.status(200).send({
      success: true,
      token,
      doc: user
    });
  } catch (error) {
    next(error);
  }
};
exports.SignIn = SignIn;
const forgotPassword = async (req, res, next) => {
  try {
    if (!req.body.email) return res.status(400).send({
      success: false,
      message: "Se require un correo electrónico"
    });
    const user = await _User.default.findOne({
      email: req.body.email
    });
    if (!user) return res.status(403).send({
      success: false,
      message: "No existe la cuenta"
    });
    const token = (0, _auth.pResetToken)(user);
    user.updateOne({
      resetPasswordToken: token
    });
    return res.status(200).send({
      id: user._id,
      token
    });
  } catch (error) {
    next(error);
  }
};
exports.forgotPassword = forgotPassword;