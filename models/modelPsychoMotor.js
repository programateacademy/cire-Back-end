const mongoose = require('mongoose');

const schema = mongoose.Schema;


const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: 'kid'
    },

    psychomotorDomain: {
      moves_awkwardly_and_falls_easily: {
      option: String
      },

      walk_and_run_with_difficulty:{
        option: String
      },

      when_going_up_the_stairs_he_does_not_alternate_feet_requires_support:{
        option: String
      },

      stumbles_on_objects_that_are_in_its_path:{
        option: String
      },

      cannot_switch_from_one_action_or_activity_to_another_easily:{
        option: String
      },

      use_all_fingers_to_grasp_or_lift_small_objects:{
        option: String
      },

      it_does_not_control_its_strokes_when_drawing_paths_marking_contours_joining_the_drawings_etc: {
        option: String
      },

      does_not_take_pencil_and_tools_properly:{
        option: String
      },

    },

    observations: String
  },

  {
    timestamps: true
  }

);

const model = mongoose.model('formPsychomotor', mySchema);

module.exports = model;
