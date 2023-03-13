const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/', function (req, res){
  const filterKid = req.query.id || null;
  controller.getSegForm(filterKid)
    .then((segForm) => {
      response.success(req, res, segForm, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', function (req,res){
  controller.addSegForm(req.body.parentingOption, req.body.parentingObservations, req.body.followRulesClassOption, req.body.followRulesClassObservations, req.body.followRulesOutsideOption, req.body.followRulesOutsideObservations, req.body.hasHabitsRoutinesOption, req.body.hasHabitsRoutinesObservations, req.body.hasSchoolHabitsOption, req.body.hasSchoolHabitsObservations, req.body.reflectsCommitmentOption, req.body.reflectsCommitmentObservations, req.body.accompanimentClassesOption, req.body.accompanimentClassesObservations, req.body.homeSupportOption, req.body.homeSupportObservations)
    .then((segForm)=>{
      response.success(req, res, segForm, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});

router.put('/:id', function (req, res) {
  controller.updateSegForm(req.params.id, req.body.parentingOption, req.body.parentingObservations, req.body.followRulesClassOption, req.body.followRulesClassObservations, req.body.followRulesOutsideOption, req.body.followRulesOutsideObservations, req.body.hasHabitsRoutinesOption, req.body.hasHabitsRoutinesObservations, req.body.hasSchoolHabitsOption, req.body.hasSchoolHabitsObservations, req.body.reflectsCommitmentOption, req.body.reflectsCommitmentObservations, req.body.accompanimentClassesOption, req.body.accompanimentClassesObservations, req.body.homeSupportOption, req.body.homeSupportObservations)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

router.delete('/:id', function (req, res) {
  let id = req.params.id;
  controller.deleteSegForm(id)
    .then((deletedForm) => {
      if (deletedForm !== null){
        response.success(req, res, `Seg form ${req.params.id} deleted`, 200);
      } else{
        response.error(req, res, `The form with id: ${req.params.id} was already deleted or does not exist`);
      }
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

module.exports = router;
