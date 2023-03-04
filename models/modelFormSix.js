const mongoose = require ("mongoose")

const schema = mongoose.Schema;

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

const model = mongoose.model('FromSix', mySchema);

module.exports = model;
