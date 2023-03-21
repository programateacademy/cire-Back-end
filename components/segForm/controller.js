const store = require('./store');

function addSegForm(parentingOption, parentingObservations, followRulesClassOption, followRulesClassObservations, followRulesOutsideOption, followRulesOutsideObservations, hasHabitsRoutinesOption, hasHabitsRoutinesObservations, hasSchoolHabitsOption, hasSchoolHabitsObservations, reflectsCommitmentOption, reflectsCommitmentObservations, accompanimentClassesOption, accompanimentClassesObservations, homeSupportOption, homeSupportObservations){
  return new Promise((resolve) => {
    const fullSegForm = {
      does_The_Child_Have_Parenting_Guidelines: {
        option: parentingOption,
        observations: parentingObservations
      },

      does_The_child_Follow_rules_Within_the_Classroom: {
        option: followRulesClassOption,
        observations: followRulesClassObservations
      },

      the_Child_follows_Rules_outside_The_classroom: {
        option: followRulesOutsideOption,
        observations: followRulesOutsideObservations
      },

      the_Child_has_Habits_and_Routines: {
        option: hasHabitsRoutinesOption,
        observations: hasHabitsRoutinesObservations
      },

      the_Child_has_School_habits_And_routines: {
        option: hasSchoolHabitsOption,
        observations: hasSchoolHabitsObservations
      },

      the_Child_reflects_Commitment: {
        option: reflectsCommitmentOption,
        observations: reflectsCommitmentObservations
      },

      the_Child_has_Accompaniment_in_Classes: {
        option: accompanimentClassesOption,
        observations: accompanimentClassesObservations
      },

      does_The_Child_have_Support_at_Home: {
        option: homeSupportOption,
        observations: homeSupportObservations
      },
    };
    store.add(fullSegForm);
    resolve(fullSegForm);
  });
};

function getSegForm(filterSeg){
  return new Promise((resolve) => {
    resolve(store.list(filterSeg));
  });
};

function updateSegForm(id, parentingOption, parentingObservations, followRulesClassOption, followRulesClassObservations, followRulesOutsideOption, followRulesOutsideObservations, hasHabitsRoutinesOption, hasHabitsRoutinesObservations, hasSchoolHabitsOption, hasSchoolHabitsObservations, reflectsCommitmentOption, reflectsCommitmentObservations, accompanimentClassesOption, accompanimentClassesObservations, homeSupportOption, homeSupportObservations){
  return new Promise ((resolve, reject) => {
    if (!id){
      reject('INVALID DATA');
    };
    const result = store.update(id, parentingOption, parentingObservations, followRulesClassOption, followRulesClassObservations, followRulesOutsideOption, followRulesOutsideObservations, hasHabitsRoutinesOption, hasHabitsRoutinesObservations, hasSchoolHabitsOption, hasSchoolHabitsObservations, reflectsCommitmentOption, reflectsCommitmentObservations, accompanimentClassesOption, accompanimentClassesObservations, homeSupportOption, homeSupportObservations);
    resolve(result);
  });
};

function deleteSegForm(id){
  return new Promise((resolve, reject) => {
    if (!id){
      reject('INVALID DATA');
    } else {
      store.remove(id)
        .then((data) => {
          if(!data){
            reject('Seg form was not found, check id or already deleted');
          };
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    };
  });
};

module.exports = {
  addSegForm,
  getSegForm,
  updateSegForm,
  deleteSegForm
};
