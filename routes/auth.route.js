const { Router } = require('express');
const router = Router();

const {
  SignIn,
  SignUP,
  forgotPassword,
} = require('../controller/controllerAuth');
const { authAdmin } = require('../middlewares/Auth');

router.post('/login', SignIn);
router.post('/register',authAdmin, SignUP);
router.post('/forgot', forgotPassword);



module.exports = router;

