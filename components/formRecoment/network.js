const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/', function (req, res){
  controller.getRecommendations()
    .then((formRecommendations) => {
      response.success(req, res, formRecommendations, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', function (req,res){
  controller.addRecommendations(req.body.guidelinesOption, req.body.guidelinesObservation, req.body.habitsAndRoutinesOption, req.body.habitsAndRoutinesObservation, req.body.studyHabitsAndRoutinesOption, req.body.studyHabitsAndRoutinesObservation, req.body.commitmentsOptionfamily, req.body.commitmentsObservationfamily, req.body.rulesWithinTheClassroomOption, req.body.rulesWithinTheClassroomObservation, req.body.rulesOutsideTheClassroomOPtion, req.body.rulesOutsideTheClassroomObservation, req.body.accompanimentOption, req.body.accompanimentObservation, req.body.commitmentsOptionschool, req.body.commitmentsObservationschool, req.body.parentingGuidelinesOption, req.body.parentingGuidelinesObservation, req.body.studyHabitsAndRoutinesOptioncire, req.body.studyHabitsAndRoutinesObservationcire, req.body.accompanimentOptioncire, req.body.accompanimentObservationcire, req.body.rulesOption, req.body.rulesObservation, req.body.commitmentsOptioncire, req.body.commitmentsObservationcire)
    .then((recommendations)=>{
      response.success(req, res, recommendations, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});


router.put('/:id', function (  req, res) {
  controller.updateRecommendations( req.body.guidelinesOption, req.body.guidelinesObservation, req.body.habitsAndRoutinesOption, req.body.habitsAndRoutinesObservation, req.body.studyHabitsAndRoutinesOption, req.body.studyHabitsAndRoutinesObservation, req.body.commitmentsOptionfamily, req.body.commitmentsObservationfamily, req.body.rulesWithinTheClassroomOption, req.body.rulesWithinTheClassroomObservation, req.body.rulesOutsideTheClassroomOPtion, req.body.rulesOutsideTheClassroomObservation, req.body.accompanimentOption, req.body.accompanimentObservation, req.body.commitmentsOptionschool, req.body.commitmentsObservationschool, req.body.parentingGuidelinesOption, req.body.parentingGuidelinesObservation, req.body.studyHabitsAndRoutinesOptioncire, req.body.studyHabitsAndRoutinesObservationcire, req.body.accompanimentOptioncire, req.body.accompanimentObservationcire, req.body.rulesOption, req.body.rulesObservation, req.body.commitmentsOptioncire, req.body.commitmentsObservationcire )
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
    .then((deleteRecommendations) => {
      if (deleteRecommendations !== null){
        response.success(req, res, `Recommendations form ${req.params.id} deleted`, 200);
      } else{
        response.error(req, res, `The Recommendations with id: ${req.params.id} was already deleted or does not exist`);
      }
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

module.exports = router;
