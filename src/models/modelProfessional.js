const {Schema, model} = require('mongoose');

const mySchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true },
    occupation: { type: String, required: true },
    numberId: { type: Number, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true
  }
);


module.exports = model('professional', mySchema);

