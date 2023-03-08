const mongoose = require('mongoose');

const schema = mongoose.Schema;


const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: 'kid'
    },

    psychosocialField: {
      He_needs_a_lot_of_support_from_his_teacher: {
        yes: String,
        Not: String

      },

      Does_not_easily_adapt_to_new_different_situations_that_have_a_greater_degree_of_difficulty: {
        yes: String,
        Not: String
      },

      Bites_or_mistreats_your_belongings_and_school_work: {
        yes: String,
        Not: String
      },

      Shows_prolonged_school_maladjustment: {
        yes: String,
        Not: String
      },
      cry_for_anything: {
        yes: String,
        Not: String
      },

      Does_not_express_or_verbalize_his_feelings: {
        yes: String,
        Not: String
      },

      Does_not_play_with_other_children: {
        yes: String,
        Not: String
      },

      Does_not_interact_with_adults: {
        yes: String,
        Not: String
      },


    },
  },

  {
    timestamps: true
  }

);

const model = mongoose.model('formPsychosocial', mySchema);

module.exports = model;
