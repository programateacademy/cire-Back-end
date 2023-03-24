const model = require('../models/modelPsychoMotor');

function addPsychoMotor(psychoMotorForm){
  const myPsychoMotorForm = new model(psychoMotorForm);
  myPsychoMotorForm.save();
};

function getPsychoMotor(filterPsychoMotor){
  let filter = {};
  return new Promise ((resolve, reject) => {
    if (filterPsychoMotor !== null){
      filter = {_id: filterPsychoMotor};
    };
    model.find(filter)
      .populate('kid', {name: true, age: true, sex: true, namAttendant: true, numAttendant: true})
      .exec((error, populated) => {
        if(error){
          reject(error);
          return false;
        };
        resolve(populated);
      });
  });
};

async function updatePsychoMotor(id, fallsEasily, walkWithDifficulty, feetRequiresSupport, stumblesOnObjects, cannotSwitchActionsEasily, useAllFingers, doesNotControlItsStrokes, doesNotTakeObjectsProperly, observations){

  const foundPsychoMotor = await model.findById(id);

  foundPsychoMotor.moves_awkwardly_and_falls_easily = fallsEasily;
  foundPsychoMotor.walk_and_run_with_difficulty = walkWithDifficulty;
  foundPsychoMotor.when_going_up_the_stairs_he_does_not_alternate_feet_requires_support = feetRequiresSupport;
  foundPsychoMotor.stumbles_on_objects_that_are_in_its_path = stumblesOnObjects;
  foundPsychoMotor.cannot_switch_from_one_action_or_activity_to_another_easily = cannotSwitchActionsEasily;
  foundPsychoMotor.use_all_fingers_to_grasp_or_lift_small_objects = useAllFingers;
  foundPsychoMotor.it_does_not_control_its_strokes_when_drawing_paths_marking_contours_joining_the_drawings_etc = doesNotControlItsStrokes;
  foundPsychoMotor.does_not_take_pencil_and_tools_properly = doesNotTakeObjectsProperly;
  foundPsychoMotor.observations = observations;

  const fullPsychoMotor = {
    fallsEasily,
    walkWithDifficulty,
    feetRequiresSupport,
    stumblesOnObjects,
    cannotSwitchActionsEasily,
    useAllFingers,
    doesNotControlItsStrokes,
    doesNotTakeObjectsProperly,
    observations
  };

  const newPsychoMotor = await foundPsychoMotor.save(fullPsychoMotor);
  return newPsychoMotor;
};

async function existDB(id){
  const exist = await model.exists({_id: id});
  return exist
}

async function removePsychoMotor(id){
  if (await existDB(id)){
    return await model.findByIdAndDelete(id);
  }
  return false;
};

module.exports = {
  add: addPsychoMotor,
  list: getPsychoMotor,
  update: updatePsychoMotor,
  remove: removePsychoMotor
}
