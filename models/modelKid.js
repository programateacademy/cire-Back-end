const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    name: String,
    age: Number,
    sex: String,
<<<<<<< HEAD
    NameRepresentative: String,
    numberRepresentative: Number,
=======
    namAttendant: String,
    numAttendant: Number,
>>>>>>> 24453da2915434caad8f81ae189557a5b68f0d7e
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('kid', mySchema);

module.exports = model;
