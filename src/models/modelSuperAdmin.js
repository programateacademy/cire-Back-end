const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    email: String,
    password: String
  },
  {
    timestamps: true
  }
);

mySchema.methods.generateAuthToken = function() {
  const superAdmin = this;
  const token = jwt.sign({
    _id: superAdmin._id.toString()},process.env.TOKEN);
  return token;
}

const model = mongoose.model('superAdmin', mySchema);

module.exports = {
  model: model,
  generateAuthToken: mySchema.methods.generateAuthToken
};
