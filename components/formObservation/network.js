const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/', function (req, res){
  controller.getObservation()
    .then((formObservation) => {
      response.success(req, res, formObservation, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', function (req,res){
  const {managesWeeksMonday, managesWeeksTuesday, managesWeeksWednesday, managesWeeksThursday, managesWeeksFriday, managesBehavior, beforeWeeksMonday, beforeWeeksTuesday, beforeWeeksWednesday, beforeWeeksThursday, beforeWeeksFriday, beforeBehavior, finishWeeksMonday, finishWeeksTuesday, finishWeeksWednesday, finishWeeksThursday, finishWeeksFriday, finishBehavior, runtimeWeeksMonday, runtimeWeeksTuesday, runtimeWeeksWednesday, runtimeWeeksThursday, runtimeWeeksFriday, runtimeBehavior, getsWeeksMonday, getsWeeksTuesday, getsWeeksWednesday, getsWeeksThursday, getsWeeksFriday, getsBehavior, requiresWeeksMonday, requiresWeeksTuesday, requiresWeeksWednesday, requiresWeeksThursday, requiresWeeksFriday, requiresBehavior, striveWeeksMonday, striveWeeksTuesday, striveWeeksWednesday, striveWeeksThursday, striveWeeksFriday,striveBehavior,makesWeeksMonday, makesWeeksTuesday, makesWeeksWednesday, makesWeeksThursday, makesWeeksFriday, makesBehavior, frustrationWeeksMonday, frustrationWeeksTuesday, frustrationWeeksWednesday, frustrationWeeksThursday, frustrationWeeksFriday, frustrationBehavior, ifWeeksMonday, ifWeeksTuesday, ifWeeksWednesday, ifWeeksThursday, ifWeeksFriday, ifBehavior, relatesWeeksMonday, relatesWeeksTuesday, relatesWeeksWednesday, relatesWeeksThursday,  relatesWeeksFriday, relatesBehavior, feelsWeeksMonday, feelsWeeksTuesday, feelsWeeksWednesday, feelsWeeksThursday, feelsWeeksFriday, feelsBehavior, includeWeeksMonday, includeWeeksTuesday, includeWeeksWednesday, includeWeeksThursday, includeWeeksFriday, includeBehavior, hourInitial, hourFinal,observation,} = req.body
  controller.addObservation(managesWeeksMonday, managesWeeksTuesday, managesWeeksWednesday, managesWeeksThursday, managesWeeksFriday, managesBehavior, beforeWeeksMonday, beforeWeeksTuesday, beforeWeeksWednesday, beforeWeeksThursday, beforeWeeksFriday, beforeBehavior, finishWeeksMonday, finishWeeksTuesday, finishWeeksWednesday, finishWeeksThursday, finishWeeksFriday, finishBehavior, runtimeWeeksMonday, runtimeWeeksTuesday, runtimeWeeksWednesday, runtimeWeeksThursday, runtimeWeeksFriday, runtimeBehavior, getsWeeksMonday, getsWeeksTuesday, getsWeeksWednesday, getsWeeksThursday, getsWeeksFriday, getsBehavior, requiresWeeksMonday, requiresWeeksTuesday, requiresWeeksWednesday, requiresWeeksThursday, requiresWeeksFriday, requiresBehavior, striveWeeksMonday, striveWeeksTuesday, striveWeeksWednesday, striveWeeksThursday, striveWeeksFriday,striveBehavior,makesWeeksMonday, makesWeeksTuesday, makesWeeksWednesday, makesWeeksThursday, makesWeeksFriday, makesBehavior, frustrationWeeksMonday, frustrationWeeksTuesday, frustrationWeeksWednesday, frustrationWeeksThursday, frustrationWeeksFriday, frustrationBehavior, ifWeeksMonday, ifWeeksTuesday, ifWeeksWednesday, ifWeeksThursday, ifWeeksFriday, ifBehavior, relatesWeeksMonday, relatesWeeksTuesday, relatesWeeksWednesday, relatesWeeksThursday,  relatesWeeksFriday, relatesBehavior, feelsWeeksMonday, feelsWeeksTuesday, feelsWeeksWednesday, feelsWeeksThursday, feelsWeeksFriday, feelsBehavior, includeWeeksMonday, includeWeeksTuesday, includeWeeksWednesday, includeWeeksThursday, includeWeeksFriday, includeBehavior, hourInitial, hourFinal,observation,)
    .then((Observation)=>{
      response.success(req, res, Observation, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});


router.put('/:id', function (  req, res) {
  const  {managesWeeksMonday, managesWeeksTuesday, managesWeeksWednesday, managesWeeksThursday, managesWeeksFriday, managesBehavior, beforeWeeksMonday, beforeWeeksTuesday, beforeWeeksWednesday, beforeWeeksThursday, beforeWeeksFriday, beforeBehavior, finishWeeksMonday, finishWeeksTuesday, finishWeeksWednesday, finishWeeksThursday, finishWeeksFriday, finishBehavior, runtimeWeeksMonday, runtimeWeeksTuesday, runtimeWeeksWednesday, runtimeWeeksThursday, runtimeWeeksFriday, runtimeBehavior, getsWeeksMonday, getsWeeksTuesday, getsWeeksWednesday, getsWeeksThursday, getsWeeksFriday, getsBehavior, requiresWeeksMonday, requiresWeeksTuesday, requiresWeeksWednesday, requiresWeeksThursday, requiresWeeksFriday, requiresBehavior, striveWeeksMonday, striveWeeksTuesday, striveWeeksWednesday, striveWeeksThursday, striveWeeksFriday,striveBehavior,makesWeeksMonday, makesWeeksTuesday, makesWeeksWednesday, makesWeeksThursday, makesWeeksFriday, makesBehavior, frustrationWeeksMonday, frustrationWeeksTuesday, frustrationWeeksWednesday, frustrationWeeksThursday, frustrationWeeksFriday, frustrationBehavior, ifWeeksMonday, ifWeeksTuesday, ifWeeksWednesday, ifWeeksThursday, ifWeeksFriday, ifBehavior, relatesWeeksMonday, relatesWeeksTuesday, relatesWeeksWednesday, relatesWeeksThursday,  relatesWeeksFriday, relatesBehavior, feelsWeeksMonday, feelsWeeksTuesday, feelsWeeksWednesday, feelsWeeksThursday, feelsWeeksFriday, feelsBehavior, includeWeeksMonday, includeWeeksTuesday, includeWeeksWednesday, includeWeeksThursday, includeWeeksFriday, includeBehavior, hourInitial, hourFinal,observation,}  = req.body
  controller.updateObservation(managesWeeksMonday, managesWeeksTuesday, managesWeeksWednesday, managesWeeksThursday, managesWeeksFriday, managesBehavior, beforeWeeksMonday, beforeWeeksTuesday, beforeWeeksWednesday, beforeWeeksThursday, beforeWeeksFriday, beforeBehavior, finishWeeksMonday, finishWeeksTuesday, finishWeeksWednesday, finishWeeksThursday, finishWeeksFriday, finishBehavior, runtimeWeeksMonday, runtimeWeeksTuesday, runtimeWeeksWednesday, runtimeWeeksThursday, runtimeWeeksFriday, runtimeBehavior, getsWeeksMonday, getsWeeksTuesday, getsWeeksWednesday, getsWeeksThursday, getsWeeksFriday, getsBehavior, requiresWeeksMonday, requiresWeeksTuesday, requiresWeeksWednesday, requiresWeeksThursday, requiresWeeksFriday, requiresBehavior, striveWeeksMonday, striveWeeksTuesday, striveWeeksWednesday, striveWeeksThursday, striveWeeksFriday,striveBehavior,makesWeeksMonday, makesWeeksTuesday, makesWeeksWednesday, makesWeeksThursday, makesWeeksFriday, makesBehavior, frustrationWeeksMonday, frustrationWeeksTuesday, frustrationWeeksWednesday, frustrationWeeksThursday, frustrationWeeksFriday, frustrationBehavior, ifWeeksMonday, ifWeeksTuesday, ifWeeksWednesday, ifWeeksThursday, ifWeeksFriday, ifBehavior, relatesWeeksMonday, relatesWeeksTuesday, relatesWeeksWednesday, relatesWeeksThursday,  relatesWeeksFriday, relatesBehavior, feelsWeeksMonday, feelsWeeksTuesday, feelsWeeksWednesday, feelsWeeksThursday, feelsWeeksFriday, feelsBehavior, includeWeeksMonday, includeWeeksTuesday, includeWeeksWednesday, includeWeeksThursday, includeWeeksFriday, includeBehavior, hourInitial, hourFinal,observation,)

    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

router.delete('/:id', function (req, res) {
  let id = req.params.id;
  controller.deleteObservation(id)
    .then((deleteObservation) => {
      if (deleteObservation !== null){
        response.success(req, res, `Observation form ${req.params.id} deleted`, 200);
      } else{
        response.error(req, res, `The Observation with id: ${req.params.id} was already deleted or does not exist`);
      }
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

module.exports = router;
