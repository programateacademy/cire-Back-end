const model = require('../../models/modelPrincipalForm');

async function addPrincipal(form){
  const myForm = new model(form);
  await myForm.save();

};

function getPrincipal(filterPrincipal){
  let filter = {};
  return new Promise ((resolve, reject) => {
    if(filterPrincipal !== null){
      filter = {_id: filterPrincipal};
    };
    model.find(filter)
      .populate('kid', {name: true, age: true, sex: true, namAttendant: true, numAttendant:true})
      .exec((error, populated) => {
        if (error){
          reject(error);
          return false;
        };
        resolve(populated)
      });
  });
};

async function updatePrincipal(id, schoolDescription, schoolAction, behaviorDescription, behaviorAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction){
  const foundPrincipal = await model.findById(id);
    foundPrincipal.coexistence.schoolBehavior.description = schoolDescription;
    foundPrincipal.coexistence.schoolBehavior.actionPlan = schoolAction;
    foundPrincipal.coexistence.behaviorAtHome.description = behaviorDescription;
    foundPrincipal.coexistence.behaviorAtHome.actionPlan = behaviorAction;
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
      behaviorDescription,
      behaviorAction,
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

async function existDB(id) {
  const exist = await model.exists({
    _id: id
  });
  return exist
};

async function removePrincipal(id){
  if (await existDB(id)){
    return await model.findByIdAndDelete(id);
  }
  return false;
};

module.exports = {
  add: addPrincipal,
  list: getPrincipal,
  update: updatePrincipal,
  remove: removePrincipal
}
