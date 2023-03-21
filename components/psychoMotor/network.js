const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/', function (req, res){
  const filterPsychoMotor = req.query.id || null;
  controller.getPsychoMotor(filterPsychoMotor)
    .then((psychoMotorForm) => {
      response.success(req, res, psychoMotorForm, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', function (req,res){
  const {fallsEasily, walkWithDifficulty, feetRequiresSupport, stumblesOnObjects, cannotSwitchActionsEasily, useAllFingers, doesNotControlItsStrokes, doesNotTakeObjectsProperly, observations} = req.body
  controller.addPsychoSocial(fallsEasily, walkWithDifficulty, feetRequiresSupport, stumblesOnObjects, cannotSwitchActionsEasily, useAllFingers, doesNotControlItsStrokes, doesNotTakeObjectsProperly, observations)
    .then((psychoSocialForm)=>{
      response.success(req, res, psychoSocialForm, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});

router.put('/:id', function (req, res) {
  const {fallsEasily, walkWithDifficulty, feetRequiresSupport, stumblesOnObjects, cannotSwitchActionsEasily, useAllFingers, doesNotControlItsStrokes, doesNotTakeObjectsProperly, observations} = req.body
  controller.updatePsychoSocialForm(fallsEasily, walkWithDifficulty, feetRequiresSupport, stumblesOnObjects, cannotSwitchActionsEasily, useAllFingers, doesNotControlItsStrokes, doesNotTakeObjectsProperly, observations)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

router.delete('/:id', function (req, res) {
  let id = req.params.id;
  controller.deletePsychoMotor(id)
    .then((deletedForm) => {
      if (deletedForm !== null){
        response.success(req, res, `Psychomotor form ${req.params.id} deleted`, 200);
      } else{
        response.error(req, res, `The form with id: ${req.params.id} was already deleted or does not exist`);
      }
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

module.exports = router;
