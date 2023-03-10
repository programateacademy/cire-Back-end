const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: "kid"
    },

    coexistence:{
      schoolBehavior:{
        description: String,
        actionPlan:String
      },
      relationships:{
        description: String,
        actionPlan:String

      }
    },

    academic:{
      workInClasses:{
        description: String,
        actionPlan:String
      },

      worksInCire:{
        description: String,
        actionPlan:String
      },

      workAtHome:{
        description: String,
        actionPlan:String
      },

    },

    familySupport:{
      parentingGuidelines:{
        description: String,
        actionPlan:String
      },

      accompaniment:{
        description: String,
        actionPlan:String
      },

    }

  },
  {
    timestamps: true
  }
  )

  const model = mongoose.model('formPrincipal', mySchema);

  module.exports = model;

