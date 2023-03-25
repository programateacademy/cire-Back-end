const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    name: String,
    age: Number,
    sex: String,
    namAttendant: String,
    numAttendant: Number,
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('kid', mySchema);

module.exports = model;
