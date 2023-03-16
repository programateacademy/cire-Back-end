const store = require('./store')


function addRecommendations(guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionfamily, commitmentsObservationfamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionschool, commitmentsObservationschool, parentingGuidelinesOption, parentingGuidelinesObservation, studyHabitsAndRoutinesOptioncire, studyHabitsAndRoutinesObservationcire, accompanimentOptioncire, accompanimentObservationcire, rulesOption, rulesObservation, commitmentsOptioncire, commitmentsObservationcire
) {
  return new Promise((resolve) => {
    const fullRecommendations = {
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
          option: commitmentsOptionfamily,
          observation: commitmentsObservationfamily
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
          option: commitmentsOptionschool,
          observation: commitmentsObservationschool
        }

      },

      recommendationsCire: {
        ParentingGuidelines: {
          option: parentingGuidelinesOption,
          observation: parentingGuidelinesObservation

        },

        studyHabitsAndRoutines: {
          option: studyHabitsAndRoutinesOptioncire,
          observation: studyHabitsAndRoutinesObservationcire
        },

        accompaniment: {
          option: accompanimentOptioncire,
          observation: accompanimentObservationcire
        },

        rules: {
          option: rulesOption,
          observation: rulesObservation
        },

        commitments: {
          option: commitmentsOptioncire,
          observation: commitmentsObservationcire
        }

      }
    };
    store.add(fullRecommendations);
    resolve(fullRecommendations);
  });
};

function getRecommendations(filterKid) {
  return new Promise((resolve) => {
    resolve(store.list(filterKid));
  });
};
function updateRecommendations(id, guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionfamily, commitmentsObservationfamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionschool, commitmentsObservationschool, parentingGuidelinesOption, parentingGuidelinesObservation, studyHabitsAndRoutinesOptioncire, studyHabitsAndRoutinesObservationcire, accompanimentOptioncire, accompanimentObservationcire, rulesOption, rulesObservation, commitmentsOptioncire, commitmentsObservationcire) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('INVALID DATA');
    };

    const result = store.update(id, guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionfamily, commitmentsObservationfamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionschool, commitmentsObservationschool, parentingGuidelinesOption, parentingGuidelinesObservation, studyHabitsAndRoutinesOptioncire, studyHabitsAndRoutinesObservationcire, accompanimentOptioncire, accompanimentObservationcire, rulesOption, rulesObservation, commitmentsOptioncire, commitmentsObservationcire);
    resolve(result);
  });
};

function deleteRecommendations(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('INVALID DATA');
    } else {
      store.remove(id)
        .then(() => {
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

