const store = require('./store');

function addPsychoMotor(fallsEasily, walkWithDifficulty, feetRequiresSupport, stumblesOnObjects, cannotSwitchActionsEasily, useAllFingers, doesNotControlItsStrokes, doesNotTakeObjectsProperly, observations){

  return new Promise ((resolve) => {

    const fullPsychoMotor = {

      moves_awkwardly_and_falls_easily: fallsEasily,

      walk_and_run_with_difficulty: walkWithDifficulty,

      when_going_up_the_stairs_he_does_not_alternate_feet_requires_support: feetRequiresSupport,

      stumbles_on_objects_that_are_in_its_path: stumblesOnObjects,

      cannot_switch_from_one_action_or_activity_to_another_easily: cannotSwitchActionsEasily,

      use_all_fingers_to_grasp_or_lift_small_objects: useAllFingers,

      it_does_not_control_its_strokes_when_drawing_paths_marking_contours_joining_the_drawings_etc: doesNotControlItsStrokes,

      does_not_take_pencil_and_tools_properly: doesNotTakeObjectsProperly,

      observations: observations

    };
    store.add(fullPsychoMotor);
    resolve(fullPsychoMotor);
  });
};

function getPsychoMotor(filterPsychoMotor){
  return new Promise((resolve) => {
    resolve(store.list(filterPsychoMotor));
  });
};

function updatePsychoMotor(id, fallsEasily, walkWithDifficulty, feetRequiresSupport, stumblesOnObjects, cannotSwitchActionsEasily, useAllFingers, doesNotControlItsStrokes, doesNotTakeObjectsProperly, observations){
  return new Promise ((resolve, reject) => {
    if(!id){
      reject('INVALID DATA');
    };
    const result = store.update(id, fallsEasily, walkWithDifficulty, feetRequiresSupport, stumblesOnObjects, cannotSwitchActionsEasily, useAllFingers, doesNotControlItsStrokes, doesNotTakeObjectsProperly, observations);
    resolve(result);
  });
};

function deletePsychoMotor(id){
  return new Promise ((resolve, reject) => {
    if (!id){
      reject('INVALID DATA');
      return false;
    } else {
      store.remove(id)
        .then((data) => {
          if(!data){
            reject('PsychoMotor form not found, check id or already deleted')
          }
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    };
  });
};

module.exports ={
  addPsychoMotor,
  getPsychoMotor,
  updatePsychoMotor,
  deletePsychoMotor
};
