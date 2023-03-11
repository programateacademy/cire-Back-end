const store = require('./store');

function addPrincipal(schoolDescription, schoolAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction){
  return new Promise ((resolve) => {
    const fullPrincipal = {
      coexistence:{
        schoolBehavior:{
          description: schoolDescription,
          actionPlan:schoolAction
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
    store.add(fullPrincipal);
    resolve(fullPrincipal);
  });
};

function getPrincipal(){
  return new Promise ((resolve) => {
    resolve(store.list());
  });
};

function updatePrincipal(id, schoolDescription, schoolAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction){
  return new Promise ((resolve, reject) => {
    if(!id){
      reject('INVALID DATA');
    };
    const result = store.update(id, schoolDescription, schoolAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction);
    resolve(result);
  });
};

function deletePrincipal(id){
  return new Promise ((resolve, reject) => {
    if(!id){
      reject('INVALID DATA');
    } else{
      store.remove(id)
        .then(() => {
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
