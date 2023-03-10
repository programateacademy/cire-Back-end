const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: "kid"
    },

    familyRecommendations: {
      parentingGuidelines: {
        option: String,
        observation: String
      },
      habitsAndRoutines: {
        option: String,
        observation: String
      },

      studyHabitsAndRoutines: {
        option: String,
        observation: String
      },

      commitments: {
        option: String,
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
        option: String,
        observation: String
      },

      accompaniment: {
        option: String,
        observation: String
      },

      commitments: {
        option: String,
        observation: String
      }

    },

    recommendationsCire: {
      ParentingGuidelines: {
        option: String,
        observation: String

      },

      studyHabitsAndRoutines: {
        option: String,
        observation: String
      },

      accompaniment: {
        option: String,
        observation: String
      },

      rules: {
        option: String,
        observation: String
      },

      commitments: {
        option: String,
        observation: String
      }

    }
  },
  {
    timestamps: true
  }
)

const model = mongoose.model('formRecomendation', mySchema);

module.exports = model;
