const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: "kid"
    },

    familyRecommendations: {
      ParentingGuidelines: {
        yes: String,
        not: String,
        observation: String
      },
      habitsAndRoutines: {
        yes: String,
        not: String,
        observation: String
      },

      studyHabitsAndRoutines: {
        yes: String,
        not: String,
        observation: String
      },

      commitments: {
        yes: String,
        not: String,
        observation: String
      },

    },

    schoolRecommendations: {
      rulesWithinTheClassroom: {
        yes: String,
        not: String,
        observation: String
      },
      rulesOutsideTheClassroom: {
        yes: String,
        not: String,
        observation: String
      },

      accompaniment: {
        yes: String,
        not: String,
        observation: String
      },

      commitments: {
        yes: String,
        not: String,
        observation: String
      }

    },

    recommendationsCire: {
      ParentingGuidelines: {
        yes: String,
        not: String,
        observation: String

      },

      studyHabitsAndRoutines: {
        yes: String,
        not: String,
        observation: String
      },

      accompaniment: {
        yes: String,
        not: String,
        observation: String
      },

      rules: {
        yes: String,
        not: String,
        observation: String
      },

      commitments: {
        yes: String,
        not: String,
        observation: String
      }

    }
  }
)

const model = mongoose.model('FormRecomendation', mySchema);

module.exports = model;
