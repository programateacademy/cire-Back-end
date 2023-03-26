const { Schema, model } = require('mongoose');

const User = new Schema({
  name: { type: String },
  age: { type: Number },
  phone: { type: String },
  occupation: { type: String },
  numberId: { type: String },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['adm', 'pro'], required: true },
});

module.exports = model('User', User);
