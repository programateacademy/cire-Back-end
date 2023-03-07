const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    name: String,
    age: Number,
    sex: String,
    NameRepresentative: String,
    descriptionhome: String,
    descriptionscholl: String,
    Actionplan: String
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('Formkisd', mySchema);

module.exports = model;
