const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/', function (req, res){
  const filterKid= req.query.age || null;
  controller.getKid(filterKid)
    .then((kidList) => {
      response.success(req, res, kidList, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.get('/:id', function (req,res){
  const filterKid = req.params.id || null;
  controller.getKidById(filterKid)
    .then((oneKid) => {
      response.success(req, res, oneKid, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', function (req,res){
  const {name, age, sex, namAttendant, numAttendant} = req.body
  controller.addKid(name, age, sex, namAttendant, numAttendant)
    .then((fullKid)=>{
      response.success(req, res, fullKid, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});

router.put('/:id', function (req, res) {
  const {name, age, sex, namAttendant, numAttendant} = req.body
  controller.updateKid(req.params.id, name,age, sex, namAttendant, numAttendant)
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
    .then(() => {
      response.success(req, res, `Kid ${req.params.id} deleted`, 200);
    })
    .catch(err => {
      response.error(req, res, `Kid with id: ${id} was not found, check id or already deleted`, 404, err);
    });
});

module.exports = router;
