const service = require('../services/servicePsychoSocial');

function addPsychoSocial(needSupportTeacher, doesNotEasilyAdapt, bitesMistreats, maladjustment, cryAnything, doesNotExpressFeelings, doesNotPlayOther, doesNotInteractAdults){
  return new Promise ((resolve) => {
    const fullPsychoSocialForm = {
      he_needs_a_lot_of_support_from_his_teacher: needSupportTeacher,
      does_not_easily_adapt_to_new_different_situations_that_have_a_greater_degree_of_difficulty: doesNotEasilyAdapt,
      bites_or_mistreats_your_belongings_and_school_work: bitesMistreats,
      shows_prolonged_school_maladjustment: maladjustment,
      cry_for_anything: cryAnything,
      does_not_express_or_verbalize_his_feelings: doesNotExpressFeelings,
      does_not_play_with_other_children: doesNotPlayOther,
      does_not_interact_with_adults: doesNotInteractAdults
    };
    service.add(fullPsychoSocialForm);
    resolve(fullPsychoSocialForm);
  });
};

function getPsychoSocialForm(filterPsychoSocial){
  return new Promise((resolve) => {
    resolve(service.list(filterPsychoSocial));
  });
};

function updatePsychoSocialForm(id, needSupportTeacher, doesNotEasilyAdapt, bitesMistreats, maladjustment, cryAnything, doesNotExpressFeelings, doesNotPlayOther, doesNotInteractAdults){
  return new Promise ((resolve, reject) => {
    if(!id){
      reject('INVALID DATA');
    };
    const result = service.update(id, needSupportTeacher, doesNotEasilyAdapt, bitesMistreats, maladjustment, cryAnything, doesNotExpressFeelings, doesNotPlayOther, doesNotInteractAdults);
    resolve(result);
  });
};

function deletePsychoSocialForm(id){
  return new Promise ((resolve, reject) => {
    if (!id){
      reject('INVALID DATA');
    } else {
      service.remove(id)
        .then((data) => {
          if (!data){
            reject('Psycho social form not found, check id or already deleted');
          };
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    };
  });
};

module.exports ={
  addPsychoSocial,
  getPsychoSocialForm,
  updatePsychoSocialForm,
  deletePsychoSocialForm
};
