const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: "kid"
    },


    have_felt_bothered_by_someone: {
      option: Number,

    },

    have_felt_lonely_or_distant_from_people: {
      option: Number

    },

    Have_youfelt_that_things_were_going_the_youwanted: {
      option: Number

    },

    you_felt_worried: {
      option: Number

    },

    He_felt_happy_to_have_good_friends_and_girlfriends: {
      option: Number

    },

    has_been_afraid_of_what_can_happen: {
      option: Number

    },

    You_have_felt_particularly_stimulated_or_interested_in_something: {
      option: Number

    },

    have_you_felt_depressed_or_very_happy: {
      option: Number

    },

    felt_full_of_energy: {
      option: Number

    },

    he_felt_very_tired: {
      option: Number
    },

    You_have_felt_so_restless_that_you_have_not_been_able_to_remain_seated_in_a_chair: {
      option: Number
    },

    I_know_that_it_was_fun_a_lot: {
      option: Number

    },

    You_have_felt_very_happy_or_happy: {
      option: Number
    },

    felt_likecrying: {
      option: Number

    },

    felt_euphoric:{
      option: Number
    },

    He_has_felt_secure_in_the_future:{
      option: Number
    },

    it_felt_boring:{
      option: Number
    },

    You_have_felt_happy_or_satisfied_for_having_achieved_something:{
      option: Number
    },

  },

  {
    timestamps: true
  }
)

const model = mongoose.model('FormAffective', mySchema);

module.exports = model
