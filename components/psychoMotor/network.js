const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/', function (req, res){
  const filterKid = req.query.kid || null;
  controller.getPsychoMotor(filterKid)
    .then((psychoMotorForm) => {
      response.success(req, res, psychoMotorForm, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', function (req,res){
  controller.addPsychoSocial(req.body.fallsEasily, req.body.walkWithDifficulty, req.body.feetRequiresSupport, req.body.stumblesOnObjects, req.body.cannotSwitchActionsEasily, req.body.useAllFingers, req.body.doesNotControlItsStrokes, req.body.doesNotTakeObjectsProperly, req.body.observations)
    .then((psychoSocialForm)=>{
      response.success(req, res, psychoSocialForm, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});

router.put('/:id', function (req, res) {
  controller.updatePsychoSocialForm(req.params.id, req.body.fallsEasily, req.body.walkWithDifficulty, req.body.feetRequiresSupport, req.body.stumblesOnObjects, req.body.cannotSwitchActionsEasily, req.body.useAllFingers, req.body.doesNotControlItsStrokes, req.body.doesNotTakeObjectsProperly, req.body.observations)
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
