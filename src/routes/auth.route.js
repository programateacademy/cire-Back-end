const { Router } = require('express');
const router = Router();

const {
  SignIn,
  SignUP,
  forgotPassword,
} = require('../controller/auth.controller');
const { authAdmin } = require('../middlewares/Auth');

router.post('/login', authAdmin, SignIn);
router.post('/register', SignUP);
router.post('/forgot', forgotPassword);

router.get('/test', authAdmin, (req, res) => {
  return res
    .status(200)
    .send({ message: 'Bienvenido', user: req.user, role: req.role });
});

module.exports = router;
