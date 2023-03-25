const service = require('../services/servicePrincipalForm');

function addPrincipal(kid, schoolDescription, schoolAction, behaviorDescription, behaviorAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction){
  return new Promise ((resolve) => {
    const fullPrincipal = {
      kid: kid,
      coexistence:{
        schoolBehavior:{
          description: schoolDescription,
          actionPlan:schoolAction
        },

        behaviorAtHome:{
          description: behaviorDescription,
          actionPlan:behaviorAction
        },


        relationships:{
          description: relationDescription,
          actionPlan: relationACtion

        }
      },

      academic:{
        workInClasses:{
          description: workClassDescription,
          actionPlan: workClassAction
        },

        worksInCire:{
          description: workCireDescription,
          actionPlan: workCireAction
        },

        workAtHome:{
          description: workHomeDescription,
          actionPlan: workHomeAction
        },

      },

      familySupport:{
        parentingGuidelines:{
          description: parentDescription,
          actionPlan: parentAction
        },

        accompaniment:{
          description: accompanimentDescription,
          actionPlan: accompanimentAction
        }
      }
    };
    service.add(fullPrincipal);
    resolve(fullPrincipal);
  });
};

function getPrincipal(filterPrincipal){
  return new Promise ((resolve) => {
    resolve(service.list(filterPrincipal));
  });
};

function updatePrincipal(id, schoolDescription, schoolAction, behaviorDescription, behaviorAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction){
  return new Promise ((resolve, reject) => {
    if(!id){
      reject('INVALID DATA');
    };
    const result = service.update(id, schoolDescription, schoolAction, behaviorDescription, behaviorAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction);
    resolve(result);
  });
};

function deletePrincipal(id){
  return new Promise ((resolve, reject) => {
    if(!id){
      reject('INVALID DATA');
      return false;
    } else{
      service.remove(id)
        .then((data) => {
          if(!data){
            reject('Principal form not found, check id or already deleted')
          }
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    };
  });
};

module.exports = {
  addPrincipal,
  getPrincipal,
  updatePrincipal,
  deletePrincipal
};
