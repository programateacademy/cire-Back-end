const bcrypt = require('bcryptjs');

// creo una  variable  que llama a la biblioteca y llama el texto plano y lo encripta
const encrypt = async (textPlain) => {
  const hash = await bcrypt.hash(textPlain,10)
  return hash
}

// desencripta la contraseña
const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword)
}

module.exports ={
  encrypt,
  compare
}
