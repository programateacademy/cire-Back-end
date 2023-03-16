const model = require('../../models/modelObservationForm')

function addObservation(Observation) {
  const myObservation = new model(Observation);
  myObservation.save();
};

function getObservation(filterKid) {
  let filter = {};
  return new Promise((resolve, reject) => {
    if (filterKid !== null) {
      filter = { kid: filterKid };
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

async function updateObservation(id,  managesWeeksMonday, managesWeeksTuesday, managesWeeksWednesday, managesWeeksThursday, managesWeeksFriday, managesBehavior, beforeWeeksMonday, beforeWeeksTuesday, beforeWeeksWednesday, beforeWeeksThursday, beforeWeeksFriday, beforeBehavior, finishWeeksMonday, finishWeeksTuesday,finishWeeksWednesday, finishWeeksThursday, finishWeeksFriday, finishBehavior, runtimeWeeksMonday, runtimeWeeksTuesday, runtimeWeeksWednesday, runtimeWeeksThursday, runtimeWeeksFriday, runtimeBehavior, getsWeeksMonday, getsWeeksTuesday, getsWeeksWednesday, getsWeeksThursday, getsWeeksFriday, getsBehavior, requiresWeeksMonday, requiresWeeksTuesday, requiresWeeksWednesday, requiresWeeksThursday, requiresWeeksFriday, requiresBehavior, striveWeeksMonday, striveWeeksTuesday, striveWeeksWednesday, striveWeeksThursday, striveWeeksFriday, striveBehavior,makesWeeksMonday,makesWeeksTuesday, makesWeeksWednesday, makesWeeksThursday, makesWeeksFriday, makesBehavior, frustrationWeeksMonday, frustrationWeeksTuesday, frustrationWeeksWednesday, frustrationWeeksThursday, frustrationWeeksFriday, frustrationBehavior, ifWeeksMonday, ifWeeksTuesday, ifWeeksWednesday, ifWeeksThursday, ifWeeksFriday, ifBehavior, relatesWeeksMonday, relatesWeeksTuesday, relatesWeeksWednesday, relatesWeeksThursday,  relatesWeeksFriday, relatesBehavior, feelsWeeksMonday, feelsWeeksTuesday, feelsWeeksWednesday, feelsWeeksThursday, feelsWeeksFriday, feelsBehavior, includeWeeksMonday, includeWeeksTuesday, includeWeeksWednesday, includeWeeksThursday, includeWeeksFriday, includeBehavior, hourInital, hourFinal,
  observation) {
  const foundObservation = await model.findById(id);
  foundObservation.planning.before_Starting_the_Task_prepare_The_material_That_you_Will_use.monday = managesWeeksMonday;
  foundObservation.planning.manages_to_classify_The_step_by_step_To_develop_The_task.tuesday = managesWeeksTuesday;
  foundObservation.planning.manages_to_classify_The_step_by_step_To_develop_The_task.wednesday = managesWeeksWednesday;
  foundObservation.planning.manages_to_classify_The_step_by_step_To_develop_The_task.thursday = managesWeeksThursday;
foundObservation.planning.manages_to_classify_The_step_by_step_To_develop_The_task.friday = managesWeeksFriday;
  foundObservation.planning.
  manages_to_classify_The_step_by_step_To_develop_The_task.description.behavior = managesBehavior;
  foundObservation.planning.before_Starting_the_Task_prepare_The_material_That_you_Will_use.monday = beforeWeeksMonday;
  foundObservation.planning.before_Starting_the_Task_prepare_The_material_That_you_Will_use.tuesday = beforeWeeksTuesday;
  foundObservation.planning.before_Starting_the_Task_prepare_The_material_That_you_Will_use.wednesday = beforeWeeksWednesday;
  foundObservation.planning.before_Starting_the_Task_prepare_The_material_That_you_Will_use.thursday = beforeWeeksThursday
  foundObservation.planning.before_Starting_the_Task_prepare_The_material_That_you_Will_use.friday = beforeWeeksFriday
  foundObservation.planning.before_Starting_the_Task_prepare_The_material_That_you_Will_use.description.behavior = beforeBehavior;
  foundObservation.planning.finish_the_task_I_started.monday = finishWeeksMonday;
  foundObservation.planning.finish_the_task_I_started.tuesday = finishWeeksTuesday;
  foundObservation.planning.finish_the_task_I_started.wednesday = finishWeeksWednesday;
  foundObservation.planning.finish_the_task_I_started.thursday = finishWeeksThursday;
  foundObservation.planning.finish_the_task_I_started.friday = finishWeeksFriday;
  foundObservation.planning.finish_the_task_I_started.description.behavior = finishBehavior;
  foundObservation.planning.runtime_is_adequate_for_the_task.monday = runtimeWeeksMonday;
  foundObservation.planning.runtime_is_adequate_for_the_task.tuesday = runtimeWeeksTuesday;
  foundObservation.planning.runtime_is_adequate_for_the_task.wednesday = runtimeWeeksWednesday;
  foundObservation.planning.runtime_is_adequate_for_the_task.thursday = runtimeWeeksThursday;
  foundObservation.planning.runtime_is_adequate_for_the_task.friday = runtimeWeeksFriday;
  foundObservation.planning.runtime_is_adequate_for_the_task.description.behavior = runtimeBehavior;
  foundObservation.planning.gets_distracted_while_performing_the_task.monday = getsWeeksMonday;
  foundObservation.planning.gets_distracted_while_performing_the_task.tuesday = getsWeeksTuesday;
  foundObservation.planning.gets_distracted_while_performing_the_task.wednesday = getsWeeksWednesday;
  foundObservation.planning.gets_distracted_while_performing_the_task.thursday = getsWeeksThursday;
  foundObservation.planning.gets_distracted_while_performing_the_task.friday = getsWeeksFriday;
  foundObservation.planning.gets_distracted_while_performing_the_task.description.behavior = getsBehavior;
  foundObservation.planning.requires_reinforcement_in_the_execution_of_an_instruction.monday = requiresWeeksMonday;
  foundObservation.planning.requires_reinforcement_in_the_execution_of_an_instruction.tuesday = requiresWeeksTuesday;
  foundObservation.planning.requires_reinforcement_in_the_execution_of_an_instruction.wednesday = requiresWeeksWednesday;
  foundObservation.planning.requires_reinforcement_in_the_execution_of_an_instruction.thursday = requiresWeeksThursday;
  foundObservation.planning.requires_reinforcement_in_the_execution_of_an_instruction.friday = requiresWeeksFriday;
  foundObservation.planning.requires_reinforcement_in_the_execution_of_an_instruction.description.behavior = requiresBehavior;
  foundObservation.planning.strive_to_hand_in_homework_with_good_presentation.monday = striveWeeksMonday;
  foundObservation.planning.strive_to_hand_in_homework_with_good_presentation.tuesday = striveWeeksTuesday;
  foundObservation.planning.strive_to_hand_in_homework_with_good_presentation.wednesday = striveWeeksWednesday;
  foundObservation.planning.strive_to_hand_in_homework_with_good_presentation.thursday = striveWeeksThursday;
  foundObservation.planning.strive_to_hand_in_homework_with_good_presentation.friday = striveWeeksFriday;
  foundObservation.planning.strive_to_hand_in_homework_with_good_presentation.description.behavior = striveBehavior;
  foundObservation.planning.makes_adequate_use_of_the_space_stipulated_for_the_task.monday = makesWeeksMonday;
  foundObservation.planning.makes_adequate_use_of_the_space_stipulated_for_the_task.tuesday = makesWeeksTuesday;
  foundObservation.planning.makes_adequate_use_of_the_space_stipulated_for_the_task.wednesday = makesWeeksWednesday;
  foundObservation.planning.makes_adequate_use_of_the_space_stipulated_for_the_task.thursday = makesWeeksThursday;
  foundObservation.planning.makes_adequate_use_of_the_space_stipulated_for_the_task.friday = makesWeeksFriday;
  foundObservation.planning.makes_adequate_use_of_the_space_stipulated_for_the_task.description.behavior = makesBehavior;
  foundObservation.planning.frustration_tolerance_or_recognition_of_success_is_evident.monday = frustrationWeeksMonday;
  foundObservation.planning.frustration_tolerance_or_recognition_of_success_is_evident.tuesday = frustrationWeeksTuesday;
  foundObservation.planning.frustration_tolerance_or_recognition_of_success_is_evident.wednesday = frustrationWeeksWednesday;
  foundObservation.planning.frustration_tolerance_or_recognition_of_success_is_evident.thursday = frustrationWeeksThursday;
  foundObservation.planning.frustration_tolerance_or_recognition_of_success_is_evident.friday = frustrationWeeksFriday;
  foundObservation.planning.frustration_tolerance_or_recognition_of_success_is_evident.description.behavior = frustrationBehavior;
  foundObservation.planning.if_you_are_from_the_province_keep_your_dialect.monday = ifWeeksMonday;
  foundObservation.planning.if_you_are_from_the_province_keep_your_dialect.tuesday = ifWeeksTuesday;
  foundObservation.planning.if_you_are_from_the_province_keep_your_dialect.wednesday = ifWeeksWednesday;
  foundObservation.planning.if_you_are_from_the_province_keep_your_dialect.thursday = ifWeeksThursday;
  foundObservation.planning.if_you_are_from_the_province_keep_your_dialect.friday = ifWeeksFriday;
  foundObservation.planning.if_you_are_from_the_province_keep_your_dialect.description.behavior = ifBehavior;
  foundObservation.planning.relates_to_other_children_with_notable_differences.monday = relatesWeeksMonday;
  foundObservation.planning.relates_to_other_children_with_notable_differences.tuesday = relatesWeeksTuesday;
  foundObservation.planning.relates_to_other_children_with_notable_differences.wednesday = relatesWeeksWednesday;
  foundObservation.planning.relates_to_other_children_with_notable_differences.thursday = relatesWeeksThursday;
  foundObservation.planning.relates_to_other_children_with_notable_differences.friday = relatesWeeksFriday;
  foundObservation.planning.relates_to_other_children_with_notable_differences.description.behavior = relatesBehavior;
  foundObservation.planning.feels_included_accepted_and_loved_with_peers.monday = feelsWeeksMonday;
  foundObservation.planning.feels_included_accepted_and_loved_with_peers.tuesday = feelsWeeksTuesday;
  foundObservation.planning.feels_included_accepted_and_loved_with_peers.wednesday = feelsWeeksWednesday;
  foundObservation.planning.feels_included_accepted_and_loved_with_peers.thursday = feelsWeeksThursday;
  foundObservation.planning.feels_included_accepted_and_loved_with_peers.friday = feelsWeeksFriday;
  foundObservation.planning.feels_included_accepted_and_loved_with_peers.description.behavior = feelsBehavior;
  foundObservation.planning.include_accept_and_show_love_for_your_peers.monday = includeWeeksMonday;
  foundObservation.planning.include_accept_and_show_love_for_your_peers.tuesday = includeWeeksTuesday;
  foundObservation.planning.include_accept_and_show_love_for_your_peers.wednesday = includeWeeksWednesday;
  foundObservation.planning.include_accept_and_show_love_for_your_peers.thursday = includeWeeksThursday;
  foundObservation.planning.include_accept_and_show_love_for_your_peers.friday = includeWeeksFriday;
  foundObservation.planning.include_accept_and_show_love_for_your_peers.description.behavior = includeBehavior;
  foundObservation.planning.hour.initial = hourInital;
  foundObservation.planning.hour.final = hourFinal;
  foundObservation.planning.observations = observation
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
    makesWeeksWednesday, makesWeeksThursday,
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
      hourInital,
       hourFinal,
       observation
  }

  const newObservation = await foundObservation.save(updateObservation)
  return newObservation;
};

async function removeObservation(id){
  return await model.findByIdAndDelete(id);
};


module.exports = {
  add: addObservation,
  updateObservation: updateObservation,
   remove: removeObservation,
  list: getObservation
}

