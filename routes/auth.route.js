const { Router } = require('express');
const router = Router();

const {
  SignIn,
  SignUP,
  updateUser,
  getUser,
  getUsers,
} = require('../controller/auth.controller');
const { authAdmin } = require('../middlewares/Auth');

router.post('/login', SignIn);
router.post('/register', authAdmin, SignUP);
router.get('/user', getUsers);
router.put('/user/:id', updateUser);
router.get('/user/:id', getUser);

module.exports = router;
