const model = require ('../../models/modelRecommendations')

function addRecommendations(recomment){
   const myRecomment = new model(recomment);
  myRecomment.save();
 };

 function getRecommendations(filterKid){
  let filter = {};
   return new Promise ((resolve, reject) => {
     if(filterKid !== null){
       filter = {kid: filterKid};
    };
     model.find(filter)
      .populate('kid', {name: true, age: true, sex: true, namAttendant: true, numAttendant:true})
      .exec((error, populated) => {
        if (error){
          reject(error);
          return false;
        };
        resolve(populated);
      });
  });
 };

 async function updateRecommendations(id, guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionfamily, commitmentsObservationfamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionschool, commitmentsObservationschool, parentingGuidelinesOption, parentingGuidelinesObservation,studyHabitsAndRoutinesOptioncire, studyHabitsAndRoutinesObservationcire, accompanimentOptioncire, accompanimentObservationcire, rulesOption, rulesObservation, commitmentsOptioncire, commitmentsObservationcire){
  const foundRecommendations = await model.findById(id);
foundRecommendations.familyRecommendations.parentingGuidelines.option = guidelinesOption;
foundRecommendations.familyRecommendations.parentingGuidelines.observation = guidelinesObservation;
foundRecommendations.familyRecommendations.habitsAndRoutines.option = habitsAndRoutinesOption;
foundRecommendations.familyRecommendations.habitsAndRoutines.observation = habitsAndRoutinesObservation;
foundRecommendations.familyRecommendations.studyHabitsAndRoutines.option = studyHabitsAndRoutinesOption;
foundRecommendations.familyRecommendations.studyHabitsAndRoutines.observation = studyHabitsAndRoutinesObservation;
foundRecommendations.familyRecommendations.commitments.option = commitmentsOptionfamily;
foundRecommendations.familyRecommendations.commitments.observation = commitmentsObservationfamily;
foundRecommendations.schoolRecommendations.rulesWithinTheClassroom.option = rulesWithinTheClassroomOption;
foundRecommendations.schoolRecommendations.rulesWithinTheClassroom.observation = rulesWithinTheClassroomObservation;
foundRecommendations.schoolRecommendations.rulesOutsideTheClassroom.option = rulesOutsideTheClassroomOPtion;
foundRecommendations.schoolRecommendations.rulesOutsideTheClassroom.observation = rulesOutsideTheClassroomObservation;
foundRecommendations.schoolRecommendations.accompaniment.option = accompanimentOption;
foundRecommendations.schoolRecommendations.accompaniment.observation = accompanimentObservation;
foundRecommendations.schoolRecommendations.commitments.option = commitmentsOptionschool;
foundRecommendations.schoolRecommendations.commitments.observation = commitmentsObservationschool;
foundRecommendations.recommendationsCire.ParentingGuidelines.option = parentingGuidelinesOption;
foundRecommendations.recommendationsCire.ParentingGuidelines.observation = parentingGuidelinesObservation;
foundRecommendations.recommendationsCire.studyHabitsAndRoutines.option = studyHabitsAndRoutinesOptioncire;
foundRecommendations.recommendationsCire.studyHabitsAndRoutines.observation = studyHabitsAndRoutinesObservationcire;
foundRecommendations.recommendationsCire.accompaniment.option = accompanimentOptioncire;
foundRecommendations.recommendationsCire.accompaniment.observation = accompanimentObservationcire;
foundRecommendations.recommendationsCire.rules.option =
rulesOption;
foundRecommendations.recommendationsCire.rules.observation = rulesObservation;
foundRecommendations.recommendationsCire.commitments.option = commitmentsOptioncire
foundRecommendations.recommendationsCire.commitments.observation = commitmentsObservationcire
const  updateRecommendations = {
  guidelinesOption,
  guidelinesObservation,
  habitsAndRoutinesOption,
  habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionfamily,
  commitmentsObservationfamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation,
  accompanimentOption,
  accompanimentObservation,
  commitmentsOptionschool,
   commitmentsObservationschool, parentingGuidelinesOption, parentingGuidelinesObservation,studyHabitsAndRoutinesOptioncire, studyHabitsAndRoutinesObservationcire, accompanimentOptioncire,
   accompanimentObservationcire,
   rulesOption, rulesObservation,
   commitmentsOptioncire,
    commitmentsObservationcire
}
const newRecommendations = await foundRecommendations.save(updateRecommendations)
  return newRecommendations;

 };
 async function removeRecommendations(id){
  return await model.findByIdAndDelete(id);
};

module.exports = {
  add: addRecommendations,
  update: updateRecommendations,
   remove: removeRecommendations,
  list: getRecommendations
}


