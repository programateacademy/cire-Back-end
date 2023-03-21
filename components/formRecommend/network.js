const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/', function (req, res) {
  let filterRecommend = req.query.id || null;
  controller.getRecommendations(filterRecommend)
    .then((formRecommendations) => {
      response.success(req, res, formRecommendations, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', function (req, res) {
  const {kid, guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionFamily, commitmentsObservationFamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionSchool, commitmentsObservationSchool, parentingGuidelinesOption, parentingGuidelinesObservation, studyHabitsAndRoutinesOptionCire, studyHabitsAndRoutinesObservationCire, accompanimentOptionCire, accompanimentObservationCire, rulesOption, rulesObservation, commitmentsOptionCire, commitmentsObservationCire} = req.body
  controller.addRecommendations(kid, guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionFamily, commitmentsObservationFamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionSchool, commitmentsObservationSchool, parentingGuidelinesOption, parentingGuidelinesObservation, studyHabitsAndRoutinesOptionCire, studyHabitsAndRoutinesObservationCire, accompanimentOptionCire, accompanimentObservationCire, rulesOption, rulesObservation, commitmentsOptionCire, commitmentsObservationCire)
    .then((recommendations) => {
      response.success(req, res, recommendations, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400, err);
    });
});


router.put('/:id', function (req, res) {
  const {guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionFamily, commitmentsObservationFamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionSchool, commitmentsObservationSchool, parentingGuidelinesOption, parentingGuidelinesObservation, studyHabitsAndRoutinesOptionCire, studyHabitsAndRoutinesObservationCire, accompanimentOptionCire, accompanimentObservationCire, rulesOption, rulesObservation, commitmentsOptionCire, commitmentsObservationCire} = req.body
  controller.updateRecommendations(req.params.id, guidelinesOption, guidelinesObservation, habitsAndRoutinesOption, habitsAndRoutinesObservation, studyHabitsAndRoutinesOption, studyHabitsAndRoutinesObservation, commitmentsOptionFamily, commitmentsObservationFamily, rulesWithinTheClassroomOption, rulesWithinTheClassroomObservation, rulesOutsideTheClassroomOPtion, rulesOutsideTheClassroomObservation, accompanimentOption, accompanimentObservation, commitmentsOptionSchool, commitmentsObservationSchool, parentingGuidelinesOption, parentingGuidelinesObservation, studyHabitsAndRoutinesOptionCire, studyHabitsAndRoutinesObservationCire, accompanimentOptionCire, accompanimentObservationCire, rulesOption, rulesObservation, commitmentsOptionCire, commitmentsObservationCire)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

router.delete('/:id', function (req, res) {
  let id = req.params.id;
  controller.deleteRecommendations(id)
    .then(() => {
        response.success(req, res, `Recommendations form ${req.params.id} deleted`, 200);
    })
    .catch(err => {
      response.error(req, res, `The Recommendations with id: ${req.params.id} was already deleted or does not exist`, 404, err);
    });
});

module.exports = router;
