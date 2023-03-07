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
            yes: String,
            not: String
          },
          Tuesday: {
            yes: String,
            not: String
          },
          Wednesday: {
            yes: String,
            not: String
          },
          Thursday: {
            yes: String,
            not: String
          },
          Friday: {
            yes: String,
            not: String
          },

          Description: {
            Conduct: String
          }
        },

        before_Starting_the_Task_prepare_The_material_That_you_Will_use: {
          Monday: {
            yes: String,
            not: String
          },
          Tuesday: {
            yes: String,
            not: String
          },
          Wednesday: {
            yes: String,
            not: String
          },
          Thursday: {
            yes: String,
            not: String
          },
          Friday: {
            yes: String,
            not: String
          },

          Description: {
            Conduct: String
          }
        },

        Finish_the_task_I_started:{
          Monday: {
            yes: String,
            not: String
          },
          Tuesday: {
            yes: String,
            not: String
          },
          Wednesday: {
            yes: String,
            not: String
          },
          Thursday: {
            yes: String,
            not: String
          },
          Friday: {
            yes: String,
            not: String
          },

          Description: {
            Conduct: String
          }
        },

        Runtime_is_adequate_for_the_task:{
          Monday: {
            yes: String,
            not: String
          },
          Tuesday: {
            yes: String,
            not: String
          },
          Wednesday: {
            yes: String,
            not: String
          },
          Thursday: {
            yes: String,
            not: String
          },
          Friday: {
            yes: String,
            not: String
          },

          Description: {
            Conduct: String
          }
        },

        Gets_distracted_while_performing_the_task:{
          Monday: {
            yes: String,
            not: String
          },
          Tuesday: {
            yes: String,
            not: String
          },
          Wednesday: {
            yes: String,
            not: String
          },
          Thursday: {
            yes: String,
            not: String
          },
          Friday: {
            yes: String,
            not: String
          },

          Description: {
            Conduct: String
          }
        },

        Requires_reinforcement_in_the_execution_of_an_instruction:{
          Monday: {
            yes: String,
            not: String
          },
          Tuesday: {
            yes: String,
            not: String
          },
          Wednesday: {
            yes: String,
            not: String
          },
          Thursday: {
            yes: String,
            not: String
          },
          Friday: {
            yes: String,
            not: String
          },

          Description: {
            Conduct: String
          }
        },

        Strive_to_hand_in_homework_with_good_presentation:{
          Monday: {
            yes: String,
            not: String
          },
          Tuesday: {
            yes: String,
            not: String
          },
          Wednesday: {
            yes: String,
            not: String
          },
          Thursday: {
            yes: String,
            not: String
          },
          Friday: {
            yes: String,
            not: String
          },

          Description: {
            Conduct: String
          }
        },

        Makes_adequate_use_of_the_space_stipulated_for_the_task:{
          Monday: {
            yes: String,
            not: String
          },
          Tuesday: {
            yes: String,
            not: String
          },
          Wednesday: {
            yes: String,
            not: String
          },
          Thursday: {
            yes: String,
            not: String
          },
          Friday: {
            yes: String,
            not: String
          },

          Description: {
            Conduct: String
          }
        },

        Frustration_tolerance_or_recognition_of_success_is_evident:{
          Monday: {
            yes: String,
            not: String
          },
          Tuesday: {
            yes: String,
            not: String
          },
          Wednesday: {
            yes: String,
            not: String
          },
          Thursday: {
            yes: String,
            not: String
          },
          Friday: {
            yes: String,
            not: String
          },

          Description: {
            Conduct: String
          }
        },

        If_you_are_from_the_province_keep_your_dialect:{
          Monday: {
            yes: String,
            not: String
          },
          Tuesday: {
            yes: String,
            not: String
          },
          Wednesday: {
            yes: String,
            not: String
          },
          Thursday: {
            yes: String,
            not: String
          },
          Friday: {
            yes: String,
            not: String
          },

          Description: {
            Conduct: String
          }
        },

        Relates_to_other_children_with_notable_differences:{
          Monday: {
            yes: String,
            not: String
          },
          Tuesday: {
            yes: String,
            not: String
          },
          Wednesday: {
            yes: String,
            not: String
          },
          Thursday: {
            yes: String,
            not: String
          },
          Friday: {
            yes: String,
            not: String
          },

          Description: {
            Conduct: String
          }
        },

        Feels_included_accepted_and_loved_with_peers:{
          Monday: {
            yes: String,
            not: String
          },
          Tuesday: {
            yes: String,
            not: String
          },
          Wednesday: {
            yes: String,
            not: String
          },
          Thursday: {
            yes: String,
            not: String
          },
          Friday: {
            yes: String,
            not: String
          },

          Description: {
            Conduct: String
          }
        },

        Include_accept_and_show_love_for_your_peers:{
          Monday: {
            yes: String,
            not: String
          },
          Tuesday: {
            yes: String,
            not: String
          },
          Wednesday: {
            yes: String,
            not: String
          },
          Thursday: {
            yes: String,
            not: String
          },
          Friday: {
            yes: String,
            not: String
          },

          Description: {
            Conduct: String
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
