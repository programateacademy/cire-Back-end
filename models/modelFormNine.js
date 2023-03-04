
const  Mongoose = require("mongoose");

const schema = Mongoose.Schema;

const mySchema = new schema(
  {
    name: String,
    age: Number,
    sex: String,
    NameRepresentative: String,
    schoolbehavior: String,
    behaviorhome: String,
    description: String,
    Actionplan: String

  },

  {
    timestamps: true
  }
);

const model = Mongoose.model('FormNine', mySchema);

module.exports = model;
