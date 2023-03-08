const mongoose = require
('mongoose');

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

const model = mongoose.model('superAdmin', mySchema);

module.exports = model;
