const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const schema = mongoose.Schema;

const mySchema = new schema(
  {
    name: String,
    age: Number,
    phone: String,
    occupation: String,
    email: String,
    password: String,
    numberId: String
  },
  {
    timestamps: true
  }
);

mySchema.methods.generateAuthToken = function () {
  const professional = this;
  const token = jwt.sign({
  _id: professional._id.toString()}, process.env.TOKEN);
  return token;
};

const model = mongoose.model('professional', mySchema);

module.exports = {
  model,
  generateAuthToken: mySchema.methods.generateAuthToken
};
