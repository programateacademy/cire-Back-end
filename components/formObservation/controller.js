const store = require ('./store')



function addObservation( managesWeeksMonday, managesWeeksTuesday, managesWeeksWednesday, managesWeeksThursday, managesWeeksFriday, managesBehavior, beforeWeeksMonday, beforeWeeksTuesday, beforeWeeksWednesday, beforeWeeksThursday, beforeWeeksFriday, beforeBehavior, finishWeeksMonday, finishWeeksTuesday,finishWeeksWednesday, finishWeeksThursday, finishWeeksFriday, finishBehavior, runtimeWeeksMonday, runtimeWeeksTuesday, runtimeWeeksWednesday, runtimeWeeksThursday, runtimeWeeksFriday, runtimeBehavior, getsWeeksMonday, getsWeeksTuesday, getsWeeksWednesday, getsWeeksThursday, getsWeeksFriday, getsBehavior, requiresWeeksMonday, requiresWeeksTuesday, requiresWeeksWednesday, requiresWeeksThursday, requiresWeeksFriday, requiresBehavior, striveWeeksMonday, striveWeeksTuesday, striveWeeksWednesday, striveWeeksThursday, striveWeeksFriday, striveBehavior,makesWeeksMonday,makesWeeksTuesday, makesWeeksWednesday, makesWeeksThursday, makesWeeksFriday, makesBehavior, frustrationWeeksMonday, frustrationWeeksTuesday, frustrationWeeksWednesday, frustrationWeeksThursday, frustrationWeeksFriday, frustrationBehavior, ifWeeksMonday, ifWeeksTuesday, ifWeeksWednesday, ifWeeksThursday, ifWeeksFriday, ifBehavior, relatesWeeksMonday, relatesWeeksTuesday, relatesWeeksWednesday, relatesWeeksThursday,  relatesWeeksFriday, relatesBehavior, feelsWeeksMonday, feelsWeeksTuesday, feelsWeeksWednesday, feelsWeeksThursday, feelsWeeksFriday, feelsBehavior, includeWeeksMonday, includeWeeksTuesday, includeWeeksWednesday, includeWeeksThursday, includeWeeksFriday, includeBehavior, hourInitial, hourFinal,
  observation
  ) {
  return new Promise((resolve) => {
    const fullObservation = {
      planning: {
        manages_to_classify_The_step_by_step_To_develop_The_task: {
          monday: managesWeeksMonday,
          tuesday: managesWeeksTuesday,
          wednesday: managesWeeksWednesday,
          thursday: managesWeeksThursday,
          friday: managesWeeksFriday,

          description: {
            behavior: managesBehavior
          }
        },

        before_Starting_the_Task_prepare_The_material_That_you_Will_use: {
          monday: beforeWeeksMonday,
          tuesday: beforeWeeksTuesday,
          wednesday: beforeWeeksWednesday,
          thursday: beforeWeeksThursday,
          friday: beforeWeeksFriday,

          description: {
            behavior: beforeBehavior
          }
        },

        finish_the_task_I_started: {
          monday: finishWeeksMonday,
          tuesday: finishWeeksTuesday,
          wednesday: finishWeeksWednesday,
          thursday: finishWeeksThursday,
          friday: finishWeeksFriday,

          description: {
            behavior: finishBehavior
          }
        },

        runtime_is_adequate_for_the_task: {
          monday: runtimeWeeksMonday,
          tuesday: runtimeWeeksTuesday,
          wednesday: runtimeWeeksWednesday,
          thursday: runtimeWeeksThursday,
          friday: runtimeWeeksFriday,

          description: {
            behavior: runtimeBehavior
          }
        },

        gets_distracted_while_performing_the_task: {
          monday: getsWeeksMonday,
          tuesday: getsWeeksTuesday,
          wednesday: getsWeeksWednesday,
          thursday: getsWeeksThursday,
          friday: getsWeeksFriday,

          description: {
            behavior: getsBehavior
          }
        },

        requires_reinforcement_in_the_execution_of_an_instruction: {
          monday: requiresWeeksMonday,
          tuesday: requiresWeeksTuesday,
          wednesday: requiresWeeksWednesday,
          thursday: requiresWeeksThursday,
          friday: requiresWeeksFriday,

          description: {
            behavior: requiresBehavior
          }
        },

        strive_to_hand_in_homework_with_good_presentation: {
          monday: striveWeeksMonday,
          tuesday: striveWeeksTuesday,
          wednesday: striveWeeksWednesday,
          thursday: striveWeeksThursday,
          friday: striveWeeksFriday,

          description: {
            behavior: striveBehavior
          }
        },

        makes_adequate_use_of_the_space_stipulated_for_the_task: {
          monday: makesWeeksMonday,
          tuesday: makesWeeksTuesday,
          wednesday: makesWeeksWednesday,
          thursday: makesWeeksThursday,
          friday: makesWeeksFriday,

          description: {
            behavior: makesBehavior
          }
        },

        frustration_tolerance_or_recognition_of_success_is_evident: {
          monday: frustrationWeeksMonday,
          tuesday: frustrationWeeksTuesday,
          wednesday: frustrationWeeksWednesday,
          thursday: frustrationWeeksThursday,
          friday: frustrationWeeksFriday,

          description: {
            behavior: frustrationBehavior
          }
        },

        if_you_are_from_the_province_keep_your_dialect: {
          monday: ifWeeksMonday,
          tuesday: ifWeeksTuesday,
          wednesday: ifWeeksWednesday,
          thursday: ifWeeksThursday,
          friday: ifWeeksFriday,

          description: {
            behavior: ifBehavior
          }
        },

        relates_to_other_children_with_notable_differences: {
          monday: relatesWeeksMonday,
          tuesday: relatesWeeksTuesday,
          wednesday: relatesWeeksWednesday,
          thursday: relatesWeeksThursday,
          friday: relatesWeeksFriday,

          description: {
            behavior: relatesBehavior
          }
        },

        feels_included_accepted_and_loved_with_peers: {
          monday: feelsWeeksMonday,
          tuesday: feelsWeeksTuesday,
          wednesday: feelsWeeksWednesday,
          thursday: feelsWeeksThursday,
          friday: feelsWeeksFriday,

          description: {
            behavior: feelsBehavior
          }
        },

        include_accept_and_show_love_for_your_peers: {
          monday: includeWeeksMonday,
          tuesday: includeWeeksTuesday,
          wednesday: includeWeeksWednesday,
          thursday: includeWeeksThursday,
          friday: includeWeeksFriday,

          description: {
            behavior: includeBehavior
          }


        },

        hour: {
          initial:hourInitial,
          final: hourFinal
        },

        observations: observation

      }

    }

      store.add(fullObservation);
    resolve(fullObservation);
  });
};

function getObservation(filterKid){
  return new Promise ((resolve) => {
    resolve(store.list(filterKid));
  });
};

function updateObservation( id, managesWeeksMonday, managesWeeksTuesday, managesWeeksWednesday, managesWeeksThursday, managesWeeksFriday, managesBehavior, beforeWeeksMonday, beforeWeeksTuesday, beforeWeeksWednesday, beforeWeeksThursday, beforeWeeksFriday, beforeBehavior, finishWeeksMonday, finishWeeksTuesday,finishWeeksWednesday, finishWeeksThursday, finishWeeksFriday, finishBehavior, runtimeWeeksMonday, runtimeWeeksTuesday, runtimeWeeksWednesday, runtimeWeeksThursday, runtimeWeeksFriday, runtimeBehavior, getsWeeksMonday, getsWeeksTuesday, getsWeeksWednesday, getsWeeksThursday, getsWeeksFriday, getsBehavior, requiresWeeksMonday, requiresWeeksTuesday, requiresWeeksWednesday, requiresWeeksThursday, requiresWeeksFriday, requiresBehavior, striveWeeksMonday, striveWeeksTuesday, striveWeeksWednesday, striveWeeksThursday, striveWeeksFriday, striveBehavior,makesWeeksMonday,makesWeeksTuesday, makesWeeksWednesday, makesWeeksThursday, makesWeeksFriday, makesBehavior, frustrationWeeksMonday, frustrationWeeksTuesday, frustrationWeeksWednesday, frustrationWeeksThursday, frustrationWeeksFriday, frustrationBehavior, ifWeeksMonday, ifWeeksTuesday, ifWeeksWednesday, ifWeeksThursday, ifWeeksFriday, ifBehavior, relatesWeeksMonday, relatesWeeksTuesday, relatesWeeksWednesday, relatesWeeksThursday,  relatesWeeksFriday, relatesBehavior, feelsWeeksMonday, feelsWeeksTuesday, feelsWeeksWednesday, feelsWeeksThursday, feelsWeeksFriday, feelsBehavior, includeWeeksMonday, includeWeeksTuesday, includeWeeksWednesday, includeWeeksThursday, includeWeeksFriday, includeBehavior, hourInitial, hourFinal,
  observation) {
return new Promise ((resolve, reject) => {
  if(!id){
    reject ('INVALID DATA');
  };
  const result = store.update(id, managesWeeksMonday, managesWeeksTuesday, managesWeeksWednesday, managesWeeksThursday, managesWeeksFriday, managesBehavior, beforeWeeksMonday, beforeWeeksTuesday, beforeWeeksWednesday, beforeWeeksThursday, beforeWeeksFriday, beforeBehavior, finishWeeksMonday, finishWeeksTuesday,finishWeeksWednesday, finishWeeksThursday, finishWeeksFriday, finishBehavior, runtimeWeeksMonday, runtimeWeeksTuesday, runtimeWeeksWednesday, runtimeWeeksThursday, runtimeWeeksFriday, runtimeBehavior, getsWeeksMonday, getsWeeksTuesday, getsWeeksWednesday, getsWeeksThursday, getsWeeksFriday, getsBehavior, requiresWeeksMonday, requiresWeeksTuesday, requiresWeeksWednesday, requiresWeeksThursday, requiresWeeksFriday, requiresBehavior, striveWeeksMonday, striveWeeksTuesday, striveWeeksWednesday, striveWeeksThursday, striveWeeksFriday, striveBehavior,makesWeeksMonday,makesWeeksTuesday, makesWeeksWednesday, makesWeeksThursday, makesWeeksFriday, makesBehavior, frustrationWeeksMonday, frustrationWeeksTuesday, frustrationWeeksWednesday, frustrationWeeksThursday, frustrationWeeksFriday, frustrationBehavior, ifWeeksMonday, ifWeeksTuesday, ifWeeksWednesday, ifWeeksThursday, ifWeeksFriday, ifBehavior, relatesWeeksMonday, relatesWeeksTuesday, relatesWeeksWednesday, relatesWeeksThursday,  relatesWeeksFriday, relatesBehavior, feelsWeeksMonday, feelsWeeksTuesday, feelsWeeksWednesday, feelsWeeksThursday, feelsWeeksFriday, feelsBehavior, includeWeeksMonday, includeWeeksTuesday, includeWeeksWednesday, includeWeeksThursday, includeWeeksFriday, includeBehavior, hourInitial, hourFinal,
  observation);
  resolve(result)
});
};

function deleteObservation(id){
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
addObservation,
getObservation,
updateObservation,
deleteObservation
}
