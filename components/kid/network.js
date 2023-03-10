const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/', function (req, res){
  const filterKid= req.query.name || null;
  controller.getKid(filterKid)
    .then((kidList) => {
      response.success(req, res, kidList, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', function (req,res){
  controller.addKid(req.body.name,req.body.age, req.body.sex, req.body.namAttendant, req.body.numAttendant)
    .then((fullKid)=>{
      response.success(req, res, fullKid, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});

router.put('/:id', function (req, res) {
  controller.updateKid(req.params.id, req.body.age, req.body.namAttendant, req.body.numAttendant)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

router.delete('/:id', function (req, res) {
  let id = req.params.id;
  controller.deleteKid(id)
    .then((deletedKid) => {
      if (deletedKid !== null){
        response.success(req, res, `Professional ${req.params.id} deleted`, 200);
      } else{
        response.error(req, res, `The professional with id: ${req.params.id} was already deleted or does not exist`);
      }
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

module.exports = router;
