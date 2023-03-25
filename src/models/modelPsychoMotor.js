const mongoose = require('mongoose');

const schema = mongoose.Schema;


const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: 'kid',
      required: true
    },

    moves_awkwardly_and_falls_easily: String,

    walk_and_run_with_difficulty: String,

    when_going_up_the_stairs_he_does_not_alternate_feet_requires_support: String,

    stumbles_on_objects_that_are_in_its_path: String,

    cannot_switch_from_one_action_or_activity_to_another_easily: String,

    use_all_fingers_to_grasp_or_lift_small_objects: String,

    it_does_not_control_its_strokes_when_drawing_paths_marking_contours_joining_the_drawings_etc: String,

    does_not_take_pencil_and_tools_properly: String,

    observations: String
  },
  {
    timestamps: true
  }

);

const model = mongoose.model('psychoMotorForm', mySchema);

module.exports = model;
