const model = require('../../models/modelSegForm');

function addSegForm(segForm){
  const mySegForm = new model(segForm);
  mySegForm.save();
};

function getSegForm(filterKid){
  let filter = {};
  return new Promise((resolve, reject) => {
    if (filterKid !== null){
      filter = {kid: filterKid};
    };
    model.find(filter)
      .populate('kid', {name: true, age: true, sex:true, namAttendant: true, numAttendant: true})
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
};

async function updateSegForm(id, parentingOption, parentingObservations, followRulesClassOption, followRulesClassObservations, followRulesOutsideOption, followRulesOutsideObservations, hasHabitsRoutinesOption, hasHabitsRoutinesObservations, hasSchoolHabitsOption, hasSchoolHabitsObservations, reflectsCommitmentOption, reflectsCommitmentObservations, accompanimentClassesOption, accompanimentClassesObservations, homeSupportOption, homeSupportObservations){
  const foundSegForm = await model.findById(id);

  foundSegForm.does_The_Child_Have_Parenting_Guidelines.option = parentingOption;
  foundSegForm.does_The_Child_Have_Parenting_Guidelines.observations = parentingObservations;
  foundSegForm.does_The_child_Follow_rules_Within_the_Classroom.option = followRulesClassOption;
  foundSegForm.does_The_child_Follow_rules_Within_the_Classroom.observations = followRulesClassObservations;
  foundSegForm.the_Child_follows_Rules_outside_The_classroom.option = followRulesOutsideOption;
  foundSegForm.the_Child_follows_Rules_outside_The_classroom.observations = followRulesOutsideObservations;
  foundSegForm.the_Child_has_Habits_and_Routines.option = hasHabitsRoutinesOption;
  foundSegForm.the_Child_has_Habits_and_Routines.observations = hasHabitsRoutinesObservations;
  foundSegForm.the_Child_has_School_habits_And_routines.option = hasSchoolHabitsOption;
  foundSegForm.the_Child_has_School_habits_And_routines.observations = hasSchoolHabitsObservations;
  foundSegForm.the_Child_reflects_Commitment.option = reflectsCommitmentOption;
  foundSegForm.the_Child_reflects_Commitment.observations = reflectsCommitmentObservations;
  foundSegForm.the_Child_has_Accompaniment_in_Classes.option = accompanimentClassesOption,
  foundSegForm.the_Child_has_Accompaniment_in_Classes.observations = accompanimentClassesObservations;
  foundSegForm.does_The_Child_have_Support_at_Home.option
  = homeSupportOption;
  foundSegForm.does_The_Child_have_Support_at_Home.observations = homeSupportObservations;
  const fullSegForm = {
    parentingOption,
    parentingObservations, followRulesClassOption, followRulesClassObservations, followRulesOutsideOption, followRulesOutsideObservations, hasHabitsRoutinesOption, hasHabitsRoutinesObservations, hasSchoolHabitsOption, hasSchoolHabitsObservations, reflectsCommitmentOption, reflectsCommitmentObservations, accompanimentClassesOption, accompanimentClassesObservations, homeSupportOption,
    homeSupportObservations
  }
  const newSegForm = await foundSegForm.save(fullSegForm);
  return newSegForm;
};

async function removeSegForm(id){
  return await model.findByIdAndDelete(id);
};

module.exports = {
  add: addSegForm,
  list: getSegForm,
  update: updateSegForm,
  remove: removeSegForm
};
