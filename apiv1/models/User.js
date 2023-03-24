"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = require("mongoose");
const User = new _mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['adm', 'pro'],
    required: true
  },
  resetPasswordToken: {
    type: String
  }
});
var _default = (0, _mongoose.model)('User', User);
exports.default = _default;