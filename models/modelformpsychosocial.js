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
        option: String

      },

      Does_not_easily_adapt_to_new_different_situations_that_have_a_greater_degree_of_difficulty: {
        option: String
      },

      Bites_or_mistreats_your_belongings_and_school_work: {
        option: String
      },

      Shows_prolonged_school_maladjustment: {
        option: String
      },
      cry_for_anything: {
        option: String
      },

      Does_not_express_or_verbalize_his_feelings: {
        option: String
      },

      Does_not_play_with_other_children: {
        option: String
      },

      Does_not_interact_with_adults: {
        option: String
      },


    },
  },

  {
    timestamps: true
  }

);

const model = mongoose.model('formPsychosocial', mySchema);

module.exports = model;
