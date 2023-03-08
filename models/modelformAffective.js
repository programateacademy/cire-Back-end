const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: "kid"
    },


    have_felt_bothered_by_someone: {
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number

    },

    have_felt_lonely_or_distant_from_people: {
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number

    },

    Have_youfelt_that_things_were_going_the_youwanted: {
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number

    },

    you_felt_worried: {
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number

    },

    He_felt_happy_to_have_good_friends_and_girlfriends: {
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number

    },

    has_been_afraid_of_what_can_happen: {
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number

    },

    You_have_felt_particularly_stimulated_or_interested_in_something: {
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number

    },

    have_you_felt_depressed_or_very_happy: {
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number

    },

    felt_full_of_energy: {
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number

    },

    he_felt_very_tired: {
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number

    },

    You_have_felt_so_restless_that_you_have_not_been_able_to_remain_seated_in_a_chair: {
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number

    },

    I_know_that_it_was_fun_a_lot: {
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number

    },

    You_have_felt_very_happy_or_happy: {
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number
    },

    felt_likecrying: {
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number

    },

    felt_euphoric:{
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number
    },

    He_has_felt_secure_in_the_future:{
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number
    },

    it_felt_boring:{
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number
    },

    You_have_felt_happy_or_satisfied_for_having_achieved_something:{
      little_or_never: Number,
      sometimes: Number,
      usually_or_a_lot: Number
    },

  },

  {
    timestamps: true
  }
)

const model = mongoose.model('FormAffective', mySchema);

module.exports = model
