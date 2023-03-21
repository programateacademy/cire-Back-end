const store = require('./store')


function addRecommendations(kid, guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionFamily, commitmentsObservationFamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionSchool, commitmentsObservationSchool, parentingGuidelinesOption, parentingGuidelinesObservation, studyHabitsAndRoutinesOptionCire, studyHabitsAndRoutinesObservationCire, accompanimentOptionCire, accompanimentObservationCire, rulesOption, rulesObservation, commitmentsOptionCire, commitmentsObservationCire
) {
  return new Promise((resolve) => {
    const fullRecommendations = {
      kid: kid,
      familyRecommendations: {
        parentingGuidelines: {
          option: guidelinesOption,
          observation: guidelinesObservation
        },
        habitsAndRoutines: {
          option: habitsAndRoutinesOption,
          observation: habitsAndRoutinesObservation
        },

        studyHabitsAndRoutines: {
          option: studyHabitsAndRoutinesOption,
          observation: studyHabitsAndRoutinesObservation
        },

        commitments: {
          option: commitmentsOptionFamily,
          observation: commitmentsObservationFamily
        },

      },

      schoolRecommendations: {
        rulesWithinTheClassroom: {
          option: rulesWithinTheClassroomOption,
          observation: rulesWithinTheClassroomObservation
        },
        rulesOutsideTheClassroom: {
          option: rulesOutsideTheClassroomOPtion,
          observation: rulesOutsideTheClassroomObservation
        },

        accompaniment: {
          option: accompanimentOption,
          observation: accompanimentObservation
        },

        commitments: {
          option: commitmentsOptionSchool,
          observation: commitmentsObservationSchool
        }

      },

      recommendationsCire: {
        ParentingGuidelines: {
          option: parentingGuidelinesOption,
          observation: parentingGuidelinesObservation

        },

        studyHabitsAndRoutines: {
          option: studyHabitsAndRoutinesOptionCire,
          observation: studyHabitsAndRoutinesObservationCire
        },

        accompaniment: {
          option: accompanimentOptionCire,
          observation: accompanimentObservationCire
        },

        rules: {
          option: rulesOption,
          observation: rulesObservation
        },

        commitments: {
          option: commitmentsOptionCire,
          observation: commitmentsObservationCire
        }

      }
    };
    store.add(fullRecommendations);
    resolve(fullRecommendations);
  });
};

function getRecommendations(filterRecommend) {
  return new Promise((resolve) => {
    resolve(store.list(filterRecommend));
  });
};
function updateRecommendations(id, guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionFamily, commitmentsObservationFamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionSchool, commitmentsObservationSchool, parentingGuidelinesOption, parentingGuidelinesObservation, studyHabitsAndRoutinesOptionCire, studyHabitsAndRoutinesObservationCire, accompanimentOptionCire, accompanimentObservationCire, rulesOption, rulesObservation, commitmentsOptionCire, commitmentsObservationCire) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('INVALID DATA');
    };

    const result = store.update(id, guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionFamily, commitmentsObservationFamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionSchool, commitmentsObservationSchool, parentingGuidelinesOption, parentingGuidelinesObservation, studyHabitsAndRoutinesOptionCire, studyHabitsAndRoutinesObservationCire, accompanimentOptionCire, accompanimentObservationCire, rulesOption, rulesObservation, commitmentsOptionCire, commitmentsObservationCire);
    resolve(result);
  });
};

function deleteRecommendations(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('INVALID DATA');
    } else {
      store.remove(id)
        .then((data) => {
          if (!data) {
            reject('Recommendation form not found, check ir or already deleted')
          }
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    };
  });
};

module.exports = {
  addRecommendations,
  getRecommendations,
  updateRecommendations,
  deleteRecommendations
};

