const express = require('express');
const router = express.Router();
const validator = require('../validators/validatorPsychoMotor');
const response = require('../helpers/response');

router.get('/', function (req, res){
  const filterPsychoMotor = req.query.id || null;
  validator.getPsychoMotor(filterPsychoMotor)
    .then((psychoMotorForm) => {
      response.success(req, res, psychoMotorForm, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', function (req,res){
  const {fallsEasily, walkWithDifficulty, feetRequiresSupport, stumblesOnObjects, cannotSwitchActionsEasily, useAllFingers, doesNotControlItsStrokes, doesNotTakeObjectsProperly, observations} = req.body
  validator.addPsychoSocial(fallsEasily, walkWithDifficulty, feetRequiresSupport, stumblesOnObjects, cannotSwitchActionsEasily, useAllFingers, doesNotControlItsStrokes, doesNotTakeObjectsProperly, observations)
    .then((psychoSocialForm)=>{
      response.success(req, res, psychoSocialForm, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});

router.put('/:id', function (req, res) {
  const {fallsEasily, walkWithDifficulty, feetRequiresSupport, stumblesOnObjects, cannotSwitchActionsEasily, useAllFingers, doesNotControlItsStrokes, doesNotTakeObjectsProperly, observations} = req.body
  validator.updatePsychoSocialForm(req.params.id, fallsEasily, walkWithDifficulty, feetRequiresSupport, stumblesOnObjects, cannotSwitchActionsEasily, useAllFingers, doesNotControlItsStrokes, doesNotTakeObjectsProperly, observations)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

router.delete('/:id', function (req, res) {
  let id = req.params.id;
  validator.deletePsychoMotor(id)
    .then(() => {
        response.success(req, res, `Psychomotor form ${req.params.id} deleted`, 200);
      })
    .catch((error) => {
      response.error(req, res, `Psychomotor form not found, check id or already deleted`, 404, error);
    })
});

module.exports = router;
