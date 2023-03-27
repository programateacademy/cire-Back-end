const validator = require('../validators/validatorRecommend');
const response = require('../helpers/response');

function getRecommendations(req, res) {
  let filterRecommend = req.query.id || null;
  validator.getRecommendations(filterRecommend)
    .then((formRecommendations) => {
      response.success(req, res, formRecommendations, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
};

function postRecommendations(req, res) {
  const {kid, guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionFamily, commitmentsObservationFamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionSchool, commitmentsObservationSchool, parentingGuidelinesOption, parentingGuidelinesObservation, studyHabitsAndRoutinesOptionCire, studyHabitsAndRoutinesObservationCire, accompanimentOptionCire, accompanimentObservationCire, rulesOption, rulesObservation, commitmentsOptionCire, commitmentsObservationCire} = req.body
  validator.addRecommendations(kid, guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionFamily, commitmentsObservationFamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionSchool, commitmentsObservationSchool, parentingGuidelinesOption, parentingGuidelinesObservation, studyHabitsAndRoutinesOptionCire, studyHabitsAndRoutinesObservationCire, accompanimentOptionCire, accompanimentObservationCire, rulesOption, rulesObservation, commitmentsOptionCire, commitmentsObservationCire)
    .then((recommendations) => {
      response.success(req, res, recommendations, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400, err);
    });
};


function putRecommendations(req, res) {
  const {guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionFamily, commitmentsObservationFamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionSchool, commitmentsObservationSchool, parentingGuidelinesOption, parentingGuidelinesObservation, studyHabitsAndRoutinesOptionCire, studyHabitsAndRoutinesObservationCire, accompanimentOptionCire, accompanimentObservationCire, rulesOption, rulesObservation, commitmentsOptionCire, commitmentsObservationCire} = req.body
  validator.updateRecommendations(req.params.id, guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionFamily, commitmentsObservationFamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionSchool, commitmentsObservationSchool, parentingGuidelinesOption, parentingGuidelinesObservation, studyHabitsAndRoutinesOptionCire, studyHabitsAndRoutinesObservationCire, accompanimentOptionCire, accompanimentObservationCire, rulesOption, rulesObservation, commitmentsOptionCire, commitmentsObservationCire)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
};

function deleteRecommendations(req, res) {
  let id = req.params.id;
  validator.deleteRecommendations(id)
    .then(() => {
        response.success(req, res, `Recommendations form ${req.params.id} deleted`, 200);
    })
    .catch(err => {
      response.error(req, res, `The Recommendations with id: ${req.params.id} was already deleted or does not exist`, 404, err);
    });
};

module.exports = {
  getRecommendations,
  postRecommendations,
  putRecommendations,
  deleteRecommendations
};
