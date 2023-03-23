"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashPassword = exports.checkPassword = void 0;
var _bcryptjs = require("bcryptjs");
const hashPassword = async password => {
  try {
    const salt = await (0, _bcryptjs.genSalt)(10);
    const hashedPass = await (0, _bcryptjs.hash)(password, salt);
    return hashedPass;
  } catch (error) {
    throw error;
  }
};
exports.hashPassword = hashPassword;
const checkPassword = async (password, hash) => {
  try {
    const isValid = await (0, _bcryptjs.compare)(password, hash);
    return {
      isValid
    };
  } catch (error) {
    throw error;
  }
};
exports.checkPassword = checkPassword;