const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: "kid"
    },


    q1: {
      option: Number,

    },

    q2: {
      option: Number

    },

    q3: {
      option: Number

    },

    q4: {
      option: Number

    },

    q5: {
      option: Number

    },

    q6: {
      option: Number

    },

    q7: {
      option: Number

    },

    q8: {
      option: Number

    },

    q9: {
      option: Number

    },

    q10: {
      option: Number
    },

    q11: {
      option: Number
    },

    q12: {
      option: Number

    },

    q13: {
      option: Number
    },

    q14: {
      option: Number

    },

    q15:{
      option: Number
    },

    q16:{
      option: Number
    },

    q17:{
      option: Number
    },

    q18:{
      option: Number
    },

  },

  {
    timestamps: true
  }
)

const model = mongoose.model('affective', mySchema);

module.exports = model
