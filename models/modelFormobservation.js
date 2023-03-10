const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: "kid"
    },

    psychoEducationalAspects: {
      planning: {
        manages_to_classify_The_step_by_step_To_develop_The_task: {
          monday: {
          option: String
          },
          tuesday: {
            option: String
          },
          wednesday: {
            option: String
          },
          thursday: {
            option: String
          },
          friday: {
            option: String
          },

          description: {
            behavior: String
          }
        },

        before_Starting_the_Task_prepare_The_material_That_you_Will_use: {
          monday: {
            option: String
          },
          tuesday: {
            option: String
          },
          wednesday: {
            option: String
          },
          thursday: {
            option: String
          },
          friday: {
            option: String
          },

          description: {
            behavior: String
          }
        },

        finish_the_task_I_started:{
          monday: {
            option: String
          },
          tuesday: {
            option: String
          },
          wednesday: {
            option: String
          },
          thursday: {
            option: String
          },
          friday: {
            option: String
          },

          description: {
            behavior: String
          }
        },

        runtime_is_adequate_for_the_task:{
          monday: {
            option: String
          },
          tuesday: {
            option: String
          },
          wednesday: {
            option: String
          },
          thursday: {
            option: String
          },
          friday: {
            option: String
          },

          description: {
            behavior: String
          }
        },

        gets_distracted_while_performing_the_task:{
          monday: {
            option: String
          },
          tuesday: {
            option: String
          },
          wednesday: {
            option: String
          },
          thursday: {
            option: String
          },
          friday: {
            option: String
          },

          description: {
            behavior: String
          }
        },

        requires_reinforcement_in_the_execution_of_an_instruction:{
          monday: {
          option:String
          },
          tuesday: {
            option:String
          },
          wednesday: {
            option:String
          },
          thursday: {
            option:String
          },
          friday: {
            option:String
          },

          description: {
            behavior: String
          }
        },

        strive_to_hand_in_homework_with_good_presentation:{
          monday: {
            option:String
          },
          tuesday: {
            option:String
          },
          wednesday: {
            option:String
          },
          thursday: {
            option:String
          },
          friday: {
            option:String
          },

          description: {
            behavior: String
          }
        },

        makes_adequate_use_of_the_space_stipulated_for_the_task:{
          monday: {
            option:String
          },
          tuesday: {
            option:String
          },
          wednesday: {
            option:String
          },
          thursday: {
            option:String
          },
          friday: {
            option:String
          },

          description: {
            behavior: String
          }
        },

        frustration_tolerance_or_recognition_of_success_is_evident:{
          monday: {
            option:String
          },
          tuesday: {
            option:String
          },
          wednesday: {
            option:String
          },
          thursday: {
            option:String
          },
          friday: {
            option:String
          },

          description: {
            behavior: String
          }
        },

        if_you_are_from_the_province_keep_your_dialect:{
          monday: {
            option:String
          },
          tuesday: {
            option:String
          },
          wednesday: {
            yes: String,
            not: String
          },
          thursday: {
            option:String
          },
          friday: {
            option:String
          },

          description: {
            behavior: String
          }
        },

        relates_to_other_children_with_notable_differences:{
          monday: {
            option:String
          },
          tuesday: {
            option:String
          },
          wednesday: {
            option:String
          },
          thursday: {
            option:String
          },
          friday: {
            option:String
          },

          description: {
            behavior: String
          }
        },

        feels_included_accepted_and_loved_with_peers:{
          monday: {
            option:String
          },
          tuesday: {
            option:String
          },
          wednesday: {
            option:String
          },
          thursday: {
            option:String
          },
          friday: {
            option:String
          },

          description: {
            behavior: String
          }
        },

        include_accept_and_show_love_for_your_peers:{
          monday: {
            option:String
          },
          tuesday: {
            option:String
          },
          wednesday: {
            option:String
          },
          thursday: {
            option:String
          },
          friday: {
            option:String
          },

          description: {
            behavior: String
          },

          hour:{
            initial: Number,
            final: Number
          }
        },

        observations: String

      }

      }


    },
  {
    timestamps: true
  }
);

const model = mongoose.model('FormObservation', mySchema);

module.exports = model;
