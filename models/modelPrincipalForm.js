const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema(
  {
    kid: {
      type: Schema.Types.ObjectId,
      ref:'kid',
      required: true
    },
    coexistence:{
      schoolBehavior:{
        description: {
          type: String
        },
        actionPlan:{
          type: String
        }

      },

      behaviorAthome:{
        description: {
          type: String
        },
        actionPlan:{
          type: String
        }

      },

      relationships:{
        description: {
          type: String
        },
        actionPlan:{
          type: String
        }
      }
    },

    academic:{
      workInClasses:{
        description:{
          type: String
        },
        actionPlan:{
          type: String
        }
      },

      worksInCire:{
        description: {
          type: String
        },
        actionPlan:{
          type: String
        }
      },

      workAtHome:{
        description: {
          type: String
        },
        actionPlan:{
          type: String
        }
      },

    },

    familySupport:{
      parentingGuidelines:{
        description: {
          type: String
        },
        actionPlan:{
          type: String
        }
      },

      accompaniment:{
        description: {
          type: String
        },
        actionPlan:{
          type: String
        }
      },

    }

  },
  {
    timestamps: true
  }
  )

  const model = mongoose.model('principalForm', mySchema);

  module.exports = model;

