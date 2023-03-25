const express = require('express');
const router = express.Router();
const validator = require('../validators/validatorObservationForm');
const response = require('../helpers/response');

router.get('/', function (req, res){
  let filterObservation = req.query.id || null;
  validator.getObservation(filterObservation)
    .then((formObservation) => {
      response.success(req, res, formObservation, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', function (req,res){
  const {kid, managesWeeksMonday, managesWeeksTuesday, managesWeeksWednesday, managesWeeksThursday, managesWeeksFriday, managesBehavior, beforeWeeksMonday, beforeWeeksTuesday, beforeWeeksWednesday, beforeWeeksThursday, beforeWeeksFriday, beforeBehavior, finishWeeksMonday, finishWeeksTuesday, finishWeeksWednesday, finishWeeksThursday, finishWeeksFriday, finishBehavior, runtimeWeeksMonday, runtimeWeeksTuesday, runtimeWeeksWednesday, runtimeWeeksThursday, runtimeWeeksFriday, runtimeBehavior, getsWeeksMonday, getsWeeksTuesday, getsWeeksWednesday, getsWeeksThursday, getsWeeksFriday, getsBehavior, requiresWeeksMonday, requiresWeeksTuesday, requiresWeeksWednesday, requiresWeeksThursday, requiresWeeksFriday, requiresBehavior, striveWeeksMonday, striveWeeksTuesday, striveWeeksWednesday, striveWeeksThursday, striveWeeksFriday,striveBehavior,makesWeeksMonday, makesWeeksTuesday, makesWeeksWednesday, makesWeeksThursday, makesWeeksFriday, makesBehavior, frustrationWeeksMonday, frustrationWeeksTuesday, frustrationWeeksWednesday, frustrationWeeksThursday, frustrationWeeksFriday, frustrationBehavior, ifWeeksMonday, ifWeeksTuesday, ifWeeksWednesday, ifWeeksThursday, ifWeeksFriday, ifBehavior, relatesWeeksMonday, relatesWeeksTuesday, relatesWeeksWednesday, relatesWeeksThursday,  relatesWeeksFriday, relatesBehavior, feelsWeeksMonday, feelsWeeksTuesday, feelsWeeksWednesday, feelsWeeksThursday, feelsWeeksFriday, feelsBehavior, includeWeeksMonday, includeWeeksTuesday, includeWeeksWednesday, includeWeeksThursday, includeWeeksFriday, includeBehavior, hourInitial, hourFinal,observation,} = req.body
  validator.addObservation(kid, managesWeeksMonday, managesWeeksTuesday, managesWeeksWednesday, managesWeeksThursday, managesWeeksFriday, managesBehavior, beforeWeeksMonday, beforeWeeksTuesday, beforeWeeksWednesday, beforeWeeksThursday, beforeWeeksFriday, beforeBehavior, finishWeeksMonday, finishWeeksTuesday, finishWeeksWednesday, finishWeeksThursday, finishWeeksFriday, finishBehavior, runtimeWeeksMonday, runtimeWeeksTuesday, runtimeWeeksWednesday, runtimeWeeksThursday, runtimeWeeksFriday, runtimeBehavior, getsWeeksMonday, getsWeeksTuesday, getsWeeksWednesday, getsWeeksThursday, getsWeeksFriday, getsBehavior, requiresWeeksMonday, requiresWeeksTuesday, requiresWeeksWednesday, requiresWeeksThursday, requiresWeeksFriday, requiresBehavior, striveWeeksMonday, striveWeeksTuesday, striveWeeksWednesday, striveWeeksThursday, striveWeeksFriday,striveBehavior,makesWeeksMonday, makesWeeksTuesday, makesWeeksWednesday, makesWeeksThursday, makesWeeksFriday, makesBehavior, frustrationWeeksMonday, frustrationWeeksTuesday, frustrationWeeksWednesday, frustrationWeeksThursday, frustrationWeeksFriday, frustrationBehavior, ifWeeksMonday, ifWeeksTuesday, ifWeeksWednesday, ifWeeksThursday, ifWeeksFriday, ifBehavior, relatesWeeksMonday, relatesWeeksTuesday, relatesWeeksWednesday, relatesWeeksThursday,  relatesWeeksFriday, relatesBehavior, feelsWeeksMonday, feelsWeeksTuesday, feelsWeeksWednesday, feelsWeeksThursday, feelsWeeksFriday, feelsBehavior, includeWeeksMonday, includeWeeksTuesday, includeWeeksWednesday, includeWeeksThursday, includeWeeksFriday, includeBehavior, hourInitial, hourFinal,observation,)
    .then((Observation)=>{
      response.success(req, res, Observation, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});


router.put('/:id', function (  req, res) {
  const {managesWeeksMonday, managesWeeksTuesday, managesWeeksWednesday, managesWeeksThursday, managesWeeksFriday, managesBehavior, beforeWeeksMonday, beforeWeeksTuesday, beforeWeeksWednesday, beforeWeeksThursday, beforeWeeksFriday, beforeBehavior, finishWeeksMonday, finishWeeksTuesday, finishWeeksWednesday, finishWeeksThursday, finishWeeksFriday, finishBehavior, runtimeWeeksMonday, runtimeWeeksTuesday, runtimeWeeksWednesday, runtimeWeeksThursday, runtimeWeeksFriday, runtimeBehavior, getsWeeksMonday, getsWeeksTuesday, getsWeeksWednesday, getsWeeksThursday, getsWeeksFriday, getsBehavior, requiresWeeksMonday, requiresWeeksTuesday, requiresWeeksWednesday, requiresWeeksThursday, requiresWeeksFriday, requiresBehavior, striveWeeksMonday, striveWeeksTuesday, striveWeeksWednesday, striveWeeksThursday, striveWeeksFriday,striveBehavior,makesWeeksMonday, makesWeeksTuesday, makesWeeksWednesday, makesWeeksThursday, makesWeeksFriday, makesBehavior, frustrationWeeksMonday, frustrationWeeksTuesday, frustrationWeeksWednesday, frustrationWeeksThursday, frustrationWeeksFriday, frustrationBehavior, ifWeeksMonday, ifWeeksTuesday, ifWeeksWednesday, ifWeeksThursday, ifWeeksFriday, ifBehavior, relatesWeeksMonday, relatesWeeksTuesday, relatesWeeksWednesday, relatesWeeksThursday,  relatesWeeksFriday, relatesBehavior, feelsWeeksMonday, feelsWeeksTuesday, feelsWeeksWednesday, feelsWeeksThursday, feelsWeeksFriday, feelsBehavior, includeWeeksMonday, includeWeeksTuesday, includeWeeksWednesday, includeWeeksThursday, includeWeeksFriday, includeBehavior, hourInitial, hourFinal,observation}  = req.body
  validator.updateObservation(req.params.id, managesWeeksMonday, managesWeeksTuesday, managesWeeksWednesday, managesWeeksThursday, managesWeeksFriday, managesBehavior, beforeWeeksMonday, beforeWeeksTuesday, beforeWeeksWednesday, beforeWeeksThursday, beforeWeeksFriday, beforeBehavior, finishWeeksMonday, finishWeeksTuesday, finishWeeksWednesday, finishWeeksThursday, finishWeeksFriday, finishBehavior, runtimeWeeksMonday, runtimeWeeksTuesday, runtimeWeeksWednesday, runtimeWeeksThursday, runtimeWeeksFriday, runtimeBehavior, getsWeeksMonday, getsWeeksTuesday, getsWeeksWednesday, getsWeeksThursday, getsWeeksFriday, getsBehavior, requiresWeeksMonday, requiresWeeksTuesday, requiresWeeksWednesday, requiresWeeksThursday, requiresWeeksFriday, requiresBehavior, striveWeeksMonday, striveWeeksTuesday, striveWeeksWednesday, striveWeeksThursday, striveWeeksFriday,striveBehavior,makesWeeksMonday, makesWeeksTuesday, makesWeeksWednesday, makesWeeksThursday, makesWeeksFriday, makesBehavior, frustrationWeeksMonday, frustrationWeeksTuesday, frustrationWeeksWednesday, frustrationWeeksThursday, frustrationWeeksFriday, frustrationBehavior, ifWeeksMonday, ifWeeksTuesday, ifWeeksWednesday, ifWeeksThursday, ifWeeksFriday, ifBehavior, relatesWeeksMonday, relatesWeeksTuesday, relatesWeeksWednesday, relatesWeeksThursday,  relatesWeeksFriday, relatesBehavior, feelsWeeksMonday, feelsWeeksTuesday, feelsWeeksWednesday, feelsWeeksThursday, feelsWeeksFriday, feelsBehavior, includeWeeksMonday, includeWeeksTuesday, includeWeeksWednesday, includeWeeksThursday, includeWeeksFriday, includeBehavior, hourInitial, hourFinal,observation)

    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

router.delete('/:id', function (req, res) {
  let id = req.params.id;
  validator.deleteObservation(id)
    .then(() => {
        response.success(req, res, `Observation form ${req.params.id} deleted`, 200);
    })
    .catch(err => {
      response.error(req, res, `Observation form not found, check id or already deleted`, 404, err);
    });
});

module.exports = router;
