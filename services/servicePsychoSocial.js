const model = require('../models/modelPsychoSocial');

function addPsychoSocial(psychoSocialForm){
  const myPsychoSocialForm = new model(psychoSocialForm);
  myPsychoSocialForm.save();
};

function getPsychoSocial(filterPsychoSocial){
  let filter = {};
  return new Promise ((resolve,reject) => {
    if(filterPsychoSocial !== null){
      filter = {_id: filterPsychoSocial};
    };
    model.find(filter)
      .populate('kid', {name: true, age: true, sex: true, namAttendant: true, numAttendant: true})
      .exec((error, populated) => {
        if (error){
          reject(error);
          return false;
        };
        resolve(populated);
      });
  });
};

async function updatePsychoSocial(id, needSupportTeacher, doesNotEasilyAdapt, bitesMistreats, maladjustment, cryAnything, doesNotExpressFeelings, doesNotPlayOther, doesNotInteractAdults){
  const foundPsychoSocial = await model.findById(id);
  foundPsychoSocial.he_needs_a_lot_of_support_from_his_teacher = needSupportTeacher;
  foundPsychoSocial.does_not_easily_adapt_to_new_different_situations_that_have_a_greater_degree_of_difficulty = doesNotEasilyAdapt;
  foundPsychoSocial.bites_or_mistreats_your_belongings_and_school_work = bitesMistreats;
  foundPsychoSocial.shows_prolonged_school_maladjustment = maladjustment;
  foundPsychoSocial.cry_for_anything = cryAnything;
  foundPsychoSocial.does_not_express_or_verbalize_his_feelings = doesNotExpressFeelings;
  foundPsychoSocial.does_not_play_with_other_children = doesNotPlayOther;
  foundPsychoSocial.does_not_interact_with_adults = doesNotInteractAdults;
  const updatePsychoSocial = {
    needSupportTeacher,
    doesNotEasilyAdapt,
    bitesMistreats,
    maladjustment,
    cryAnything,
    doesNotExpressFeelings,
    doesNotPlayOther,
    doesNotInteractAdults
  };
  const newPsychoSocial = await foundPsychoSocial.save(updatePsychoSocial);
  return newPsychoSocial;
}

async function existDB(id){
  const exist = await model.exists({_id: id});
  return exist;
};

async function removePsychoSocial(id){
  if (await existDB(id)){
    return await model.findByIdAndDelete(id);
  }
  return false;
};

module.exports = {
  add: addPsychoSocial,
  list: getPsychoSocial,
  remove: removePsychoSocial,
  update: updatePsychoSocial
};
