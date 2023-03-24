const { Router } = require('express');
const { SignIn, SignUP} = require('./controllers/users');

const api = Router();

api.post('/login',SignIn);
api.post('/register',SignUP);

module.exports = {
  api
}
