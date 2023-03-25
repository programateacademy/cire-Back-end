const { encode } = require('jwt-simple');
const dayjs = require('dayjs'); // Para manejo de fechas;

const secret = process.env.TOKEN;

const createToken = (user) => {
    const payload = {
        sub: user._id,
        role: user.role,
        email: user.email,
        iat: dayjs(),
        exp: dayjs().add(1,'hour')
    }

    const token = encode(payload,secret);
    return token;
}

const pResetToken = (user) => {
    const payload = {
        sub: user._id,
        iat: dayjs(),
        exp: dayjs().add(10,'minutes')
    }

    const token = encode(payload,secret);
    return token;
}

module.exports = {
  pResetToken,
  createToken
}
