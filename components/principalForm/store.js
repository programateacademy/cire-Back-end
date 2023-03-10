const model = require('../../models/modelPrincipalForm');

function addPrincipal(form){
  const myForm = new model(form);
  myForm.save();
};

function getPrincipal(filterKid){
  let filter = {};
  return new Promise ((resolve, reject) => {
    if(filterKid !== null){
      filter = {kid: filterKid};
    };
    model.find(filter)
      .populate('kid', {name: true, age: true, sex: true, namAttendant: true, numAttendant:true})
      .exec((error, populated) => {
        if (error){
          reject(error);
          return false;
        };
        resolve(populated);
      });
  });
};

async function updatePrincipal(id, schoolDescription, schoolAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction){
  const foundPrincipal = await model.findById(id);
    foundPrincipal.coexistence.schoolBehavior.description = schoolDescription;
    foundPrincipal.coexistence.schoolBehavior.actionPlan = schoolAction;
    foundPrincipal.coexistence.relationships.description = relationDescription;
    foundPrincipal.coexistence.relationships.actionPlan = relationACtion;
    foundPrincipal.academic.workInClasses.description = workClassDescription;
    foundPrincipal.academic.workInClasses.actionPlan = workClassAction;
    foundPrincipal.academic.worksInCire.description = workCireDescription;
    foundPrincipal.academic.worksInCire.actionPlan = workCireAction;
    foundPrincipal.academic.workAtHome.description = workHomeDescription;
    foundPrincipal.academic.workAtHome.actionPlan = workHomeAction;
    foundPrincipal.familySupport.parentingGuidelines.description = parentDescription;
    foundPrincipal.familySupport.parentingGuidelines.actionPlan = parentAction;
    foundPrincipal.familySupport.accompaniment.description = accompanimentDescription;
    foundPrincipal.familySupport.accompaniment.actionPlan = accompanimentAction;
    const updatePrincipal = {
      schoolDescription,
      schoolAction,
      relationDescription,
      relationACtion,
      workClassDescription,
      workClassAction,
      workCireDescription,
      workCireAction,
      workHomeDescription,
      workHomeAction,
      parentDescription,
      parentAction,
      accompanimentDescription,
      accompanimentAction
    }
    const newPrincipal = await foundPrincipal.save(updatePrincipal)
    return newPrincipal;
};

async function removePrincipal(id){
  return await model.findByIdAndDelete(id);
};

module.exports = {
  add: addPrincipal,
  list: getPrincipal,
  update: updatePrincipal,
  remove: removePrincipal
}
