const mongoose = require
('mongoose');

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

const model = mongoose.model('professional', mySchema);

module.exports = model;
