const mongoose = require('mongoose');

const schema = mongoose.Schema;


const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: 'kid'
    },

    he_needs_a_lot_of_support_from_his_teacher: String,

    does_not_easily_adapt_to_new_different_situations_that_have_a_greater_degree_of_difficulty: String,

    bites_or_mistreats_your_belongings_and_school_work: String,

    shows_prolonged_school_maladjustment: String,

    cry_for_anything: String,

    does_not_express_or_verbalize_his_feelings: String,

    does_not_play_with_other_children: String,

    does_not_interact_with_adults: String,
  },

  {
    timestamps: true
  }

);

const model = mongoose.model('psychoSocialForm', mySchema);

module.exports = model;
