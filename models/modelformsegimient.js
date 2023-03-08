const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: "kid"
    },

    followup: {
      does_The_Child_Have_Parenting_Guidelines: {
        yes: String,
        not: String,
        observations: String

      },

      does_The_child_Follow_rules_Within_the_Classroom: {
        yes: String,
        not: String,
        observations: String
      },

      the_Child_follows_Rules_outside_The_classroom: {
        yes: String,
        not: String,
        observations: String
      },

      the_Child_has_Habits_and_Routines: {
        yes: String,
        not: String,
        observations: String
      },

      the_Child_has_School_habits_And_routines: {
        yes: String,
        not: String,
        observations: String

      },

      the_Child_reflects_Commitment: {
        yes: String,
        not: String,
        observations: String

      },

      the_Child_has_Accompaniment_in_Classes: {
        yes: String,
        not: String,
        observations: String

      },

      does_The_Child_have_Support_at_Home: {
        yes: String,
        not: String,
        observations: String

      },

    }
  },
  {
    timestamps: true
  }
)

const model = mongoose.model('FormSegimient', mySchema);

module.exports = model
