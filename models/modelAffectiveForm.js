const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: "kid"
    },
    q1: Number,
    q2: Number,
    q3: Number,
    q4: Number,
    q5: Number,
    q6: Number,
    q7: Number,
    q8: Number,
    q9: Number,
    q10: Number,
    q11: Number,
    q12: Number,
    q13: Number,
    q14: Number,
    q15: Number,
    q16: Number,
    q17: Number,
    q18: Number
  },

  {
    timestamps: true
  }
)

const model = mongoose.model('affective', mySchema);

module.exports = model
