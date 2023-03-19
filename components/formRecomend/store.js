const model = require('../../models/modelRecommendations')

function addRecommendations(recommend) {
  const myRecommend = new model(recommend);
  myRecommend.save();
};

function getRecommendations(filterKid) {
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

async function updateRecommendations(id, guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionFamily, commitmentsObservationFamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionSchool, commitmentsObservationSchool, parentingGuidelinesOption, parentingGuidelinesObservation, studyHabitsAndRoutinesOptionCire, studyHabitsAndRoutinesObservationCire, accompanimentOptionCire, accompanimentObservationCire, rulesOption, rulesObservation, commitmentsOptionCire, commitmentsObservationCire) {
  const foundRecommendations = await model.findById(id);
  foundRecommendations.familyRecommendations.parentingGuidelines.option = guidelinesOption;
  foundRecommendations.familyRecommendations.parentingGuidelines.observation = guidelinesObservation;
  foundRecommendations.familyRecommendations.habitsAndRoutines.option = habitsAndRoutinesOption;
  foundRecommendations.familyRecommendations.habitsAndRoutines.observation = habitsAndRoutinesObservation;
  foundRecommendations.familyRecommendations.studyHabitsAndRoutines.option = studyHabitsAndRoutinesOption;
  foundRecommendations.familyRecommendations.studyHabitsAndRoutines.observation = studyHabitsAndRoutinesObservation;
  foundRecommendations.familyRecommendations.commitments.option = commitmentsOptionFamily;
  foundRecommendations.familyRecommendations.commitments.observation = commitmentsObservationFamily;
  foundRecommendations.schoolRecommendations.rulesWithinTheClassroom.option = rulesWithinTheClassroomOption;
  foundRecommendations.schoolRecommendations.rulesWithinTheClassroom.observation = rulesWithinTheClassroomObservation;
  foundRecommendations.schoolRecommendations.rulesOutsideTheClassroom.option = rulesOutsideTheClassroomOPtion;
  foundRecommendations.schoolRecommendations.rulesOutsideTheClassroom.observation = rulesOutsideTheClassroomObservation;
  foundRecommendations.schoolRecommendations.accompaniment.option = accompanimentOption;
  foundRecommendations.schoolRecommendations.accompaniment.observation = accompanimentObservation;
  foundRecommendations.schoolRecommendations.commitments.option = commitmentsOptionSchool;
  foundRecommendations.schoolRecommendations.commitments.observation = commitmentsObservationSchool;
  foundRecommendations.recommendationsCire.ParentingGuidelines.option = parentingGuidelinesOption;
  foundRecommendations.recommendationsCire.ParentingGuidelines.observation = parentingGuidelinesObservation;
  foundRecommendations.recommendationsCire.studyHabitsAndRoutines.option = studyHabitsAndRoutinesOptionCire;
  foundRecommendations.recommendationsCire.studyHabitsAndRoutines.observation = studyHabitsAndRoutinesObservationCire;
  foundRecommendations.recommendationsCire.accompaniment.option = accompanimentOptionCire;
  foundRecommendations.recommendationsCire.accompaniment.observation = accompanimentObservationCire;
  foundRecommendations.recommendationsCire.rules.option =
    rulesOption;
  foundRecommendations.recommendationsCire.rules.observation = rulesObservation;
  foundRecommendations.recommendationsCire.commitments.option = commitmentsOptionCire
  foundRecommendations.recommendationsCire.commitments.observation = commitmentsObservationCire
  const updateRecommendations = {
    guidelinesOption,
    guidelinesObservation,
    habitsAndRoutinesOption,
    habitsAndRoutinesObservation,
    studyHabitsAndRoutinesOption,
    studyHabitsAndRoutinesObservation,
    commitmentsOptionFamily,
    commitmentsObservationFamily,
    rulesWithinTheClassroomOption,
    rulesWithinTheClassroomObservation,
    rulesOutsideTheClassroomOPtion,
    rulesOutsideTheClassroomObservation,
    accompanimentOption,
    accompanimentObservation,
    commitmentsOptionSchool,
    commitmentsObservationSchool,
    parentingGuidelinesOption,
    parentingGuidelinesObservation,
    studyHabitsAndRoutinesOptionCire,
    studyHabitsAndRoutinesObservationCire,
    accompanimentOptionCire,
    accompanimentObservationCire,
    rulesOption,
    rulesObservation,
    commitmentsOptionCire,
    commitmentsObservationCire
  }
  const newRecommendations = await foundRecommendations.save(updateRecommendations)
  return newRecommendations;
};
async function removeRecommendations(id) {
  return await model.findByIdAndDelete(id);
};

module.exports = {
  add: addRecommendations,
  update: updateRecommendations,
  remove: removeRecommendations,
  list: getRecommendations
}


