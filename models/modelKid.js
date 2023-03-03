const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    name: String,
    edad: Number,
    sexo: String,
    nomRepresentante: String,
    numRepresentante: Number,
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('kid', mySchema);

module.exports = model;
