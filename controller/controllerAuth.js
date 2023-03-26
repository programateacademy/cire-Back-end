const User = require('../models/User');
const Professional = require('../models/modelProfessional');
const { hashPassword, checkPassword } = require('../services/password');
const { createToken, pResetToken } = require('../services/auth');
const { transporter, emailPort } = require('../helpers/email');
const auth = {};

auth.SignUP = async (req, res, next) => {
  try {
    let { name, age, phone, occupation, numberId, email, password, role } =
      req.body;

    let emailExist = await User.findOne({ email });

    if(emailExist){
      res.status(401).send({
        success: false,
        message: 'Ya existe un usuario con este correo',
      });
    }

    let hash = await hashPassword(password);
    password = hash;

    //Crear Profesional
    if (role === 'pro') {
      const professional = new Professional({
        name,
        age,
        phone,
        occupation,
        numberId,
        email,
        password,
        role
      });

      const proSaved = await professional.save();

      const user = new User({ email, password, role });

      const userSaved = await user.save();

      const token = createToken(userSaved);


      return res.status(201).send({ success: true, token, doc: proSaved });


    }



    //Crear usuario admin
    const user = new User({ email, password, role });

    const userSaved = await user.save();

    const token = createToken(userSaved);

    return res.status(201).send({ success: true, token, doc: userSaved });
  } catch (error) {
    next(error);
  }
};

auth.SignIn = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user)
      res.status(401).send({
        success: false,
        message: 'Usuario y/o contraseña, inválidos.',
      });

    const { isValid } = await checkPassword(password, user.password);

    if (!isValid)
      res.status(401).send({
        success: false,
        message: 'Usuario y/o contraseña, inválidos.',
      });

    const token = createToken(user);

    return res.status(200).send({ success: true, token, doc: user });
  } catch (error) {
    next(error);
  }
};

auth.forgotPassword = async (req, res, next) => {
  try {
    if (!req.body.email)
      return res
        .status(400)
        .send({ success: false, message: 'Se require un correo electrónico' });

    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(403)
        .send({ success: false, message: 'No existe la cuenta' });

    const token = pResetToken(user);

    user.updateOne({ resetPasswordToken: token });

    const mailOptions = {
      from: 'angeldesweb@gmail.com',
      to: `${user.email}`,
      subject: 'Enlace para recuperar contraseña',
      text: 'Reestablecer contraseña',
      html: `<a href="${emailPort}/reset/${user._id}/${token}">Link de recuperación</a>`,
    };

    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.log('Ha ocurrido un error', err);
        return next(err);
      } else {
        console.log(response);
        return res
          .status(200)
          .send({ success: true, message: 'Mensaje de recuperación enviado' });
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
