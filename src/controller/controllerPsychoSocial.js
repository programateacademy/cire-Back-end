const express = require('express');
const router = express.Router();
const validator = require('../validators/validatorPsychoSocial');
const response = require('../helpers/response');

router.get('/', function (req, res){
  const filterPsychoSocial = req.query.id || null;
  validator.getPsychoSocialForm(filterPsychoSocial)
    .then((psychoSocialForm) => {
      response.success(req, res, psychoSocialForm, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', function (req,res){
  const {needSupportTeacher, doesNotEasilyAdapt, bitesMistreats, maladjustment, cryAnything, doesNotExpressFeelings, doesNotPlayOther, doesNotInteractAdults} = req.body
  validator.addPsychoSocial(needSupportTeacher, doesNotEasilyAdapt, bitesMistreats, maladjustment, cryAnything, doesNotExpressFeelings, doesNotPlayOther, doesNotInteractAdults)
    .then((psychoSocialForm)=>{
      response.success(req, res, psychoSocialForm, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});

router.put('/:id', function (req, res) {
  const {needSupportTeacher, doesNotEasilyAdapt, bitesMistreats, maladjustment, cryAnything, doesNotExpressFeelings, doesNotPlayOther, doesNotInteractAdults} = req.body
  validator.updatePsychoSocialForm(req.params.id, needSupportTeacher, doesNotEasilyAdapt, bitesMistreats, maladjustment, cryAnything, doesNotExpressFeelings, doesNotPlayOther, doesNotInteractAdults)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

router.delete('/:id', function (req, res) {
  let id = req.params.id;
  validator.deletePsychoSocialForm(id)
    .then(() => {
      response.success(req, res, `Psychosocial form ${req.params.id} deleted`, 200);
    })
    .catch(err => {
      response.error(req, res, `Psychosocial form not found, check id or already deleted`, 404, err);
    });
});

module.exports = router;
