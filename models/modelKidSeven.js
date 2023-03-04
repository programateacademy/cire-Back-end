const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: 'kid'
    }
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('kidSeven', mySchema);

module.exports = model;
