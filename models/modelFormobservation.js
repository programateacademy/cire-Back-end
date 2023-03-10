const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: "kid"
    },

    psychoeducationalAspects: {
      planning: {
        Manages_to_classify_The_step_by_step_To_develop_The_task: {
          Monday: {
           option: String
          },
          Tuesday: {
            option: String
          },
          Wednesday: {
            option: String
          },
          Thursday: {
            option: String
          },
          Friday: {
            option: String
          },

          Description: {
            behavior: String
          }
        },

        before_Starting_the_Task_prepare_The_material_That_you_Will_use: {
          Monday: {
            option: String
          },
          Tuesday: {
            option: String
          },
          Wednesday: {
            option: String
          },
          Thursday: {
            option: String
          },
          Friday: {
            option: String
          },

          Description: {
            behavior: String
          }
        },

        Finish_the_task_I_started:{
          Monday: {
            option: String
          },
          Tuesday: {
            option: String
          },
          Wednesday: {
            option: String
          },
          Thursday: {
            option: String
          },
          Friday: {
            option: String
          },

          Description: {
            behavior: String
          }
        },

        Runtime_is_adequate_for_the_task:{
          Monday: {
            option: String
          },
          Tuesday: {
            option: String
          },
          Wednesday: {
            option: String
          },
          Thursday: {
            option: String
          },
          Friday: {
            option: String
          },

          Description: {
            behavior: String
          }
        },

        Gets_distracted_while_performing_the_task:{
          Monday: {
            option: String
          },
          Tuesday: {
            option: String
          },
          Wednesday: {
            option: String
          },
          Thursday: {
            option: String
          },
          Friday: {
            option: String
          },

          Description: {
            behavior: String
          }
        },

        Requires_reinforcement_in_the_execution_of_an_instruction:{
          Monday: {
           option:String
          },
          Tuesday: {
            option:String
          },
          Wednesday: {
            option:String
          },
          Thursday: {
            option:String
          },
          Friday: {
            option:String
          },

          Description: {
            behavior: String
          }
        },

        Strive_to_hand_in_homework_with_good_presentation:{
          Monday: {
            option:String
          },
          Tuesday: {
            option:String
          },
          Wednesday: {
            option:String
          },
          Thursday: {
            option:String
          },
          Friday: {
            option:String
          },

          Description: {
            behavior: String
          }
        },

        Makes_adequate_use_of_the_space_stipulated_for_the_task:{
          Monday: {
            option:String
          },
          Tuesday: {
            option:String
          },
          Wednesday: {
            option:String
          },
          Thursday: {
            option:String
          },
          Friday: {
            option:String
          },

          Description: {
            behavior: String
          }
        },

        Frustration_tolerance_or_recognition_of_success_is_evident:{
          Monday: {
            option:String
          },
          Tuesday: {
            option:String
          },
          Wednesday: {
            option:String
          },
          Thursday: {
            option:String
          },
          Friday: {
            option:String
          },

          Description: {
            behavior: String
          }
        },

        If_you_are_from_the_province_keep_your_dialect:{
          Monday: {
            option:String
          },
          Tuesday: {
            option:String
          },
          Wednesday: {
            yes: String,
            not: String
          },
          Thursday: {
            option:String
          },
          Friday: {
            option:String
          },

          Description: {
            behavior: String
          }
        },

        Relates_to_other_children_with_notable_differences:{
          Monday: {
            option:String
          },
          Tuesday: {
            option:String
          },
          Wednesday: {
            option:String
          },
          Thursday: {
            option:String
          },
          Friday: {
            option:String
          },

          Description: {
            behavior: String
          }
        },

        Feels_included_accepted_and_loved_with_peers:{
          Monday: {
            option:String
          },
          Tuesday: {
            option:String
          },
          Wednesday: {
            option:String
          },
          Thursday: {
            option:String
          },
          Friday: {
            option:String
          },

          Description: {
            behavior: String
          }
        },

        Include_accept_and_show_love_for_your_peers:{
          Monday: {
            option:String
          },
          Tuesday: {
            option:String
          },
          Wednesday: {
            option:String
          },
          Thursday: {
            option:String
          },
          Friday: {
            option:String
          },

          Description: {
            behavior: String
          },

          hour:{
            initial: Number,
            final: Number
          }
        },

        Observations: String

      }

      }


    },
  {
    timestamps: true
  }
);

const model = mongoose.model('FormObservation', mySchema);

module.exports = model;
