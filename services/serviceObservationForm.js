const model = require('../models/modelObservationForm')

function addObservation(Observation) {
  const myObservation = new model(Observation);
  myObservation.save();
};

function getObservation(filterObservation) {
  let filter = {};
  return new Promise((resolve, reject) => {
    if (filterObservation !== null) {
      filter = { _id: filterObservation };
    };
    model.find(filter)
      .populate('kid', { name: true, age: true, sex: true, namAttendant: true, numAttendant: true })
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        };
        resolve(populated);
      });
  });
};

async function updateObservation(id,  managesWeeksMonday, managesWeeksTuesday, managesWeeksWednesday, managesWeeksThursday, managesWeeksFriday, managesBehavior, beforeWeeksMonday, beforeWeeksTuesday, beforeWeeksWednesday, beforeWeeksThursday, beforeWeeksFriday, beforeBehavior, finishWeeksMonday, finishWeeksTuesday,finishWeeksWednesday, finishWeeksThursday, finishWeeksFriday, finishBehavior, runtimeWeeksMonday, runtimeWeeksTuesday, runtimeWeeksWednesday, runtimeWeeksThursday, runtimeWeeksFriday, runtimeBehavior, getsWeeksMonday, getsWeeksTuesday, getsWeeksWednesday, getsWeeksThursday, getsWeeksFriday, getsBehavior, requiresWeeksMonday, requiresWeeksTuesday, requiresWeeksWednesday, requiresWeeksThursday, requiresWeeksFriday, requiresBehavior, striveWeeksMonday, striveWeeksTuesday, striveWeeksWednesday, striveWeeksThursday, striveWeeksFriday, striveBehavior,makesWeeksMonday,makesWeeksTuesday, makesWeeksWednesday, makesWeeksThursday, makesWeeksFriday, makesBehavior, frustrationWeeksMonday, frustrationWeeksTuesday, frustrationWeeksWednesday, frustrationWeeksThursday, frustrationWeeksFriday, frustrationBehavior, ifWeeksMonday, ifWeeksTuesday, ifWeeksWednesday, ifWeeksThursday, ifWeeksFriday, ifBehavior, relatesWeeksMonday, relatesWeeksTuesday, relatesWeeksWednesday, relatesWeeksThursday,  relatesWeeksFriday, relatesBehavior, feelsWeeksMonday, feelsWeeksTuesday, feelsWeeksWednesday, feelsWeeksThursday, feelsWeeksFriday, feelsBehavior, includeWeeksMonday, includeWeeksTuesday, includeWeeksWednesday, includeWeeksThursday, includeWeeksFriday, includeBehavior, hourInitial, hourFinal,
  observation) {
  const foundObservation = await model.findById(id);
  foundObservation.manages_to_classify_The_step_by_step_To_develop_The_task.monday = managesWeeksMonday;
  foundObservation.manages_to_classify_The_step_by_step_To_develop_The_task.tuesday = managesWeeksTuesday;
  foundObservation.manages_to_classify_The_step_by_step_To_develop_The_task.wednesday = managesWeeksWednesday;
  foundObservation.manages_to_classify_The_step_by_step_To_develop_The_task.thursday = managesWeeksThursday;
  foundObservation.manages_to_classify_The_step_by_step_To_develop_The_task.friday = managesWeeksFriday;
  foundObservation.before_Starting_the_Task_prepare_The_material_That_you_Will_use.monday = beforeWeeksMonday;
  foundObservation.before_Starting_the_Task_prepare_The_material_That_you_Will_use.tuesday = beforeWeeksTuesday;
  foundObservation.before_Starting_the_Task_prepare_The_material_That_you_Will_use.wednesday = beforeWeeksWednesday;
  foundObservation.before_Starting_the_Task_prepare_The_material_That_you_Will_use.thursday = beforeWeeksThursday;
  foundObservation.before_Starting_the_Task_prepare_The_material_That_you_Will_use.friday = beforeWeeksFriday;
  foundObservation.finish_the_task_I_started.monday = finishWeeksMonday;
  foundObservation.finish_the_task_I_started.tuesday = finishWeeksTuesday;
  foundObservation.finish_the_task_I_started.wednesday = finishWeeksWednesday;
  foundObservation.finish_the_task_I_started.thursday = finishWeeksThursday;
  foundObservation.finish_the_task_I_started.friday = finishWeeksFriday;
  foundObservation.runtime_is_adequate_for_the_task.monday = runtimeWeeksMonday;
  foundObservation.runtime_is_adequate_for_the_task.tuesday = runtimeWeeksTuesday;
  foundObservation.runtime_is_adequate_for_the_task.wednesday = runtimeWeeksWednesday;
  foundObservation.runtime_is_adequate_for_the_task.thursday = runtimeWeeksThursday;
  foundObservation.runtime_is_adequate_for_the_task.friday = runtimeWeeksFriday;
  foundObservation.gets_distracted_while_performing_the_task.monday = getsWeeksMonday;
  foundObservation.gets_distracted_while_performing_the_task.tuesday = getsWeeksTuesday;
  foundObservation.gets_distracted_while_performing_the_task.wednesday = getsWeeksWednesday;
  foundObservation.gets_distracted_while_performing_the_task.thursday = getsWeeksThursday;
  foundObservation.gets_distracted_while_performing_the_task.friday = getsWeeksFriday;
  foundObservation.requires_reinforcement_in_the_execution_of_an_instruction.monday = requiresWeeksMonday;
  foundObservation.requires_reinforcement_in_the_execution_of_an_instruction.tuesday = requiresWeeksTuesday;
  foundObservation.requires_reinforcement_in_the_execution_of_an_instruction.wednesday = requiresWeeksWednesday;
  foundObservation.requires_reinforcement_in_the_execution_of_an_instruction.thursday = requiresWeeksThursday;
  foundObservation.requires_reinforcement_in_the_execution_of_an_instruction.friday = requiresWeeksFriday;
  foundObservation.strive_to_hand_in_homework_with_good_presentation.monday = striveWeeksMonday;
  foundObservation.strive_to_hand_in_homework_with_good_presentation.tuesday = striveWeeksTuesday;
  foundObservation.strive_to_hand_in_homework_with_good_presentation.wednesday = striveWeeksWednesday;
  foundObservation.strive_to_hand_in_homework_with_good_presentation.thursday = striveWeeksThursday;
  foundObservation.strive_to_hand_in_homework_with_good_presentation.friday = striveWeeksFriday;
  foundObservation.makes_adequate_use_of_the_space_stipulated_for_the_task.monday = makesWeeksMonday;
  foundObservation.makes_adequate_use_of_the_space_stipulated_for_the_task.tuesday = makesWeeksTuesday;
  foundObservation.makes_adequate_use_of_the_space_stipulated_for_the_task.wednesday = makesWeeksWednesday;
  foundObservation.makes_adequate_use_of_the_space_stipulated_for_the_task.thursday = makesWeeksThursday;
  foundObservation.makes_adequate_use_of_the_space_stipulated_for_the_task.friday = makesWeeksFriday;
  foundObservation.frustration_tolerance_or_recognition_of_success_is_evident.monday = frustrationWeeksMonday;
  foundObservation.frustration_tolerance_or_recognition_of_success_is_evident.tuesday = frustrationWeeksTuesday;
  foundObservation.frustration_tolerance_or_recognition_of_success_is_evident.wednesday = frustrationWeeksWednesday;
  foundObservation.frustration_tolerance_or_recognition_of_success_is_evident.thursday = frustrationWeeksThursday;
  foundObservation.frustration_tolerance_or_recognition_of_success_is_evident.friday = frustrationWeeksFriday;
  foundObservation.if_you_are_from_the_province_keep_your_dialect.monday = ifWeeksMonday;
  foundObservation.if_you_are_from_the_province_keep_your_dialect.tuesday = ifWeeksTuesday;
  foundObservation.if_you_are_from_the_province_keep_your_dialect.wednesday = ifWeeksWednesday;
  foundObservation.if_you_are_from_the_province_keep_your_dialect.thursday = ifWeeksThursday;
  foundObservation.if_you_are_from_the_province_keep_your_dialect.friday = ifWeeksFriday;
  foundObservation.relates_to_other_children_with_notable_differences.monday = relatesWeeksMonday;
  foundObservation.relates_to_other_children_with_notable_differences.tuesday = relatesWeeksTuesday;
  foundObservation.relates_to_other_children_with_notable_differences.wednesday = relatesWeeksWednesday;
  foundObservation.relates_to_other_children_with_notable_differences.thursday = relatesWeeksThursday;
  foundObservation.relates_to_other_children_with_notable_differences.friday = relatesWeeksFriday;
  foundObservation.feels_included_accepted_and_loved_with_peers.monday = feelsWeeksMonday;
  foundObservation.feels_included_accepted_and_loved_with_peers.tuesday = feelsWeeksTuesday;
  foundObservation.feels_included_accepted_and_loved_with_peers.wednesday = feelsWeeksWednesday;
  foundObservation.feels_included_accepted_and_loved_with_peers.thursday = feelsWeeksThursday;
  foundObservation.feels_included_accepted_and_loved_with_peers.friday = feelsWeeksFriday;
  foundObservation.include_accept_and_show_love_for_your_peers.monday = includeWeeksMonday;
  foundObservation.include_accept_and_show_love_for_your_peers.tuesday = includeWeeksTuesday;
  foundObservation.include_accept_and_show_love_for_your_peers.wednesday = includeWeeksWednesday;
  foundObservation.include_accept_and_show_love_for_your_peers.thursday = includeWeeksThursday;
  foundObservation.include_accept_and_show_love_for_your_peers.friday = includeWeeksFriday;
  foundObservation.hour.initial = hourInitial;
  foundObservation.hour.final = hourFinal;
  foundObservation.observations = observation;

  const updateObservation = {
    managesWeeksMonday,
    managesWeeksTuesday,
    managesWeeksWednesday,
    managesWeeksThursday,
    managesWeeksFriday,
    managesBehavior,
    beforeWeeksMonday,
    beforeWeeksTuesday,
    beforeWeeksWednesday,
    beforeWeeksThursday,
    beforeWeeksFriday,
    beforeBehavior,
    finishWeeksMonday,
    finishWeeksTuesday,
    finishWeeksWednesday,
    finishWeeksThursday,
    finishWeeksFriday,
    finishBehavior,
    runtimeWeeksMonday,
    runtimeWeeksTuesday,
    runtimeWeeksWednesday,
    runtimeWeeksThursday,
    runtimeWeeksFriday,
    runtimeBehavior,
    getsWeeksMonday,
    getsWeeksTuesday,
    getsWeeksWednesday,
    getsWeeksThursday,
    getsWeeksFriday,
    getsBehavior,
    requiresWeeksMonday,
    requiresWeeksTuesday,
    requiresWeeksWednesday,
    requiresWeeksThursday,
    requiresWeeksFriday,
    requiresBehavior,
    striveWeeksMonday,
    striveWeeksTuesday,
    striveWeeksWednesday,
    striveWeeksThursday,
    striveWeeksFriday,
    striveBehavior,
    makesWeeksMonday,
    makesWeeksTuesday,
    makesWeeksWednesday,
    makesWeeksThursday,
    makesWeeksFriday,
    makesBehavior,
    frustrationWeeksMonday,
    frustrationWeeksTuesday,
    frustrationWeeksWednesday,
    frustrationWeeksThursday,
    frustrationWeeksFriday,
    frustrationBehavior,
    ifWeeksMonday,
    ifWeeksTuesday,
    ifWeeksWednesday,
    ifWeeksThursday,
    ifWeeksFriday,
    ifBehavior,
    relatesWeeksMonday,
    relatesWeeksTuesday,
    relatesWeeksWednesday,
    relatesWeeksThursday,
    relatesWeeksFriday,
    relatesBehavior,
    feelsWeeksMonday,
    feelsWeeksTuesday,
    feelsWeeksWednesday,
    feelsWeeksThursday,
    feelsWeeksFriday,
    feelsBehavior,
    includeWeeksMonday,
    includeWeeksTuesday,
    includeWeeksWednesday,
    includeWeeksThursday,
    includeWeeksFriday,
    includeBehavior,
    hourInitial,
    hourFinal,
    observation
  }

  const newObservation = await foundObservation.save(updateObservation)
  return newObservation;
};

async function existDB(id){
  const exist = await model.exists({_id: id});
  return exist
};

async function removeObservation(id){
  if (await existDB(id)){
    return await model.findByIdAndDelete(id);
  }
  return false;
};


module.exports = {
  add: addObservation,
  updateObservation: updateObservation,
  remove: removeObservation,
  list: getObservation
}

