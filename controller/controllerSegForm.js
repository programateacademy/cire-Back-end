const validator = require('../validators/validatorSegForm');
const response = require('../helpers/response');

function getSegForm(req, res){
  const filterSeg = req.query.id || null;
  validator.getSegForm(filterSeg)
    .then((segForm) => {
      response.success(req, res, segForm, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
};

function postSegForm(req,res){
  const {parentingOption, parentingObservations, followRulesClassOption, followRulesClassObservations, followRulesOutsideOption, followRulesOutsideObservations, hasHabitsRoutinesOption, hasHabitsRoutinesObservations, hasSchoolHabitsOption, hasSchoolHabitsObservations, reflectsCommitmentOption, reflectsCommitmentObservations, accompanimentClassesOption, accompanimentClassesObservations, homeSupportOption, homeSupportObservations} = req.body
  validator.addSegForm(parentingOption, parentingObservations, followRulesClassOption, followRulesClassObservations, followRulesOutsideOption, followRulesOutsideObservations, hasHabitsRoutinesOption, hasHabitsRoutinesObservations, hasSchoolHabitsOption, hasSchoolHabitsObservations, reflectsCommitmentOption, reflectsCommitmentObservations, accompanimentClassesOption, accompanimentClassesObservations, homeSupportOption, homeSupportObservations)
    .then((segForm)=>{
      response.success(req, res, segForm, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
};

function putSegForm(req, res) {
  const {parentingOption, parentingObservations, followRulesClassOption, followRulesClassObservations, followRulesOutsideOption, followRulesOutsideObservations, hasHabitsRoutinesOption, hasHabitsRoutinesObservations, hasSchoolHabitsOption, hasSchoolHabitsObservations, reflectsCommitmentOption, reflectsCommitmentObservations, accompanimentClassesOption, accompanimentClassesObservations, homeSupportOption, homeSupportObservations} = req.body
  validator.updateSegForm(req.params.id, parentingOption, parentingObservations, followRulesClassOption, followRulesClassObservations, followRulesOutsideOption, followRulesOutsideObservations, hasHabitsRoutinesOption, hasHabitsRoutinesObservations, hasSchoolHabitsOption, hasSchoolHabitsObservations, reflectsCommitmentOption, reflectsCommitmentObservations, accompanimentClassesOption, accompanimentClassesObservations, homeSupportOption, homeSupportObservations)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
};

function deleteSegForm(req, res) {
  let id = req.params.id;
  validator.deleteSegForm(id)
    .then(() => {
      response.success(req, res, `Seg form ${req.params.id} deleted`, 200);
    })
    .catch(err => {
      response.error(req, res, `Seg form not found, check id or already deleted`, 404, err);
    });
};

module.exports = {
  getSegForm,
  postSegForm,
  putSegForm,
  deleteSegForm
};
