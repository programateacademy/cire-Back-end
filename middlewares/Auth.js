const { decode } = require('jwt-simple');

const secret = process.env.TOKEN;

const authAdmin = (req, res, next) => {
  if (!req.headers.authorization)
    return res
      .status(403)
      .send({ success: false, message: 'Sin cabeceras de autenticación' });

  const token = req.headers.authorization.split(' ')[1];
  const { sub, role } = decode(token, secret);

  if (role !== 'adm') {
    res.status(404).send({ success: false, error: 'No autorizado' });
    next();
  }

  req.user = sub;
  req.role = role;
  next();
};

module.exports = {
  authAdmin,
};
//sabe  o no si hay token
