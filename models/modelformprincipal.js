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
        Description: String,
        accionPlan:String
      },
      relationships:{
        Description: String,
        accionPlan:String

      }
    },

    Academic:{
      workInclasses:{
        Description: String,
        accionPlan:String
      },

      worksIncire:{
        Description: String,
        accionPlan:String
      },

      Workathome:{
        Description: String,
        accionPlan:String
      },

    },

    Familysupport:{
      ParentingGuidelines:{
        Description: String,
        accionPlan:String
      },

      Accompaniment:{
        Description: String,
        accionPlan:String
      },

    }

  }
  )

  const model = mongoose.model('FormPrincipal', mySchema);

  module.exports = model;

