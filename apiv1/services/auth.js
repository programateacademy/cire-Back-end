"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pResetToken = exports.createToken = void 0;
var _jwtSimple = require("jwt-simple");
require("dotenv/config");
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Para manejo de fechas;

const secret = process.env.SECRET;
const createToken = user => {
  const payload = {
    sub: user._id,
    role: user.role,
    email: user.email,
    iat: (0, _dayjs.default)(),
    exp: (0, _dayjs.default)().add(1, 'hour')
  };
  const token = (0, _jwtSimple.encode)(payload, secret);
  return token;
};
exports.createToken = createToken;
const pResetToken = user => {
  const payload = {
    sub: user._id,
    iat: (0, _dayjs.default)(),
    exp: (0, _dayjs.default)().add(10, 'minutes')
  };
  const token = (0, _jwtSimple.encode)(payload, secret);
  return token;
};
exports.pResetToken = pResetToken;