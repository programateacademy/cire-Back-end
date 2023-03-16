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
  controller.addaObservation(req.body.managesWeeksMonday, req.body.managesWeeksTuesday, req.body.managesWeeksWednesday, req.body.managesWeeksThursday, req.body.managesWeeksFriday, req.body.managesBehavior, req.body.beforeWeeksMonday, req.body.beforeWeeksTuesday, req.body.beforeWeeksWednesday, req.body.beforeWeeksThursday, req.body.beforeWeeksFriday, req.body.beforeBehavior, req.body.finishWeeksMonday, req.body.finishWeeksTuesday,req.body.finishWeeksWednesday, req.body.finishWeeksThursday, req.body.finishWeeksFriday, req.body.finishBehavior, req.body.runtimeWeeksMonday, req.body.runtimeWeeksTuesday, req.body.runtimeWeeksWednesday, req.body.runtimeWeeksThursday, req.body.runtimeWeeksFriday, req.body.runtimeBehavior, req.body.getsWeeksMonday, req.body.getsWeeksTuesday, req.body.getsWeeksWednesday, req.body.getsWeeksThursday, req.body.getsWeeksFriday, req.body.getsBehavior, req.body.requiresWeeksMonday, req.body.requiresWeeksTuesday, req.body.requiresWeeksWednesday, req.body.requiresWeeksThursday, req.body.requiresWeeksFriday, req.body.requiresBehavior, req.body.striveWeeksMonday, req.body.striveWeeksTuesday, req.body.striveWeeksWednesday, req.body.striveWeeksThursday, req.body.striveWeeksFriday, req.body.striveBehavior,req.body.makesWeeksMonday, req.body.makesWeeksTuesday, req.body.makesWeeksWednesday, req.body.makesWeeksThursday, req.body.makesWeeksFriday, req.body.makesBehavior, req.body.frustrationWeeksMonday, req.body.frustrationWeeksTuesday, req.body.frustrationWeeksWednesday, req.body.frustrationWeeksThursday, req.body.frustrationWeeksFriday, req.body.frustrationBehavior, req.body.ifWeeksMonday, req.body.ifWeeksTuesday, req.body.ifWeeksWednesday, req.body.ifWeeksThursday, req.body.ifWeeksFriday, req.body.ifBehavior, req.body.relatesWeeksMonday, req.body.relatesWeeksTuesday, req.body.relatesWeeksWednesday, req.body.relatesWeeksThursday,  req.body.relatesWeeksFriday, req.body.relatesBehavior, req.body.feelsWeeksMonday, req.body.feelsWeeksTuesday, req.body.feelsWeeksWednesday, req.body.feelsWeeksThursday, req.body.feelsWeeksFriday, req.body.feelsBehavior, req.body.includeWeeksMonday, req.body.includeWeeksTuesday, req.body.includeWeeksWednesday, req.body.includeWeeksThursday, req.body.includeWeeksFriday, req.body.includeBehavior, req.body.hourInital, req.body.hourFinal,
    req.body.observation)
    .then((Observation)=>{
      response.success(req, res, Observation, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});


router.put('/:id', function ( id, req, res) {
  controller.updateObservation(id, req.body.managesWeeksMonday, req.body.managesWeeksTuesday, req.body.managesWeeksWednesday, req.body.managesWeeksThursday, req.body.managesWeeksFriday, req.body.managesBehavior, req.body.beforeWeeksMonday, req.body.beforeWeeksTuesday, req.body.beforeWeeksWednesday, req.body.beforeWeeksThursday, req.body.beforeWeeksFriday, req.body.beforeBehavior, req.body.finishWeeksMonday, req.body.finishWeeksTuesday,req.body.finishWeeksWednesday, req.body.finishWeeksThursday, req.body.finishWeeksFriday, req.body.finishBehavior, req.body.runtimeWeeksMonday, req.body.runtimeWeeksTuesday, req.body.runtimeWeeksWednesday, req.body.runtimeWeeksThursday, req.body.runtimeWeeksFriday, req.body.runtimeBehavior, req.body.getsWeeksMonday, req.body.getsWeeksTuesday, req.body.getsWeeksWednesday, req.body.getsWeeksThursday, req.body.getsWeeksFriday, req.body.getsBehavior, req.body.requiresWeeksMonday, req.body.requiresWeeksTuesday, req.body.requiresWeeksWednesday, req.body.requiresWeeksThursday, req.body.requiresWeeksFriday, req.body.requiresBehavior, req.body.striveWeeksMonday, req.body.striveWeeksTuesday, req.body.striveWeeksWednesday, req.body.striveWeeksThursday, req.body.striveWeeksFriday, req.body.striveBehavior,req.body.makesWeeksMonday, req.body.makesWeeksTuesday, req.body.makesWeeksWednesday, req.body.makesWeeksThursday, req.body.makesWeeksFriday, req.body.makesBehavior, req.body.frustrationWeeksMonday, req.body.frustrationWeeksTuesday, req.body.frustrationWeeksWednesday, req.body.frustrationWeeksThursday, req.body.frustrationWeeksFriday, req.body.frustrationBehavior, req.body.ifWeeksMonday, req.body.ifWeeksTuesday, req.body.ifWeeksWednesday, req.body.ifWeeksThursday, req.body.ifWeeksFriday, req.body.ifBehavior, req.body.relatesWeeksMonday, req.body.relatesWeeksTuesday, req.body.relatesWeeksWednesday, req.body.relatesWeeksThursday,  req.body.relatesWeeksFriday, req.body.relatesBehavior, req.body.feelsWeeksMonday, req.body.feelsWeeksTuesday, req.body.feelsWeeksWednesday, req.body.feelsWeeksThursday, req.body.feelsWeeksFriday, req.body.feelsBehavior, req.body.includeWeeksMonday, req.body.includeWeeksTuesday, req.body.includeWeeksWednesday, req.body.includeWeeksThursday, req.body.includeWeeksFriday, req.body.includeBehavior, req.body.hourInital, req.body.hourFinal,
    req.body.observation, )
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
