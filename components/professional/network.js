const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/', function (req, res){
  const filterProfessional = req.query.name || null;
  controller.getProfessional(filterProfessional)
    .then((professionalList) => {
      response.succes(req, res, professionalList, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', function (req,res){
  controller.addProfessional(req.body.name,req.body.age, req.body.phone, req.body.occupation, req.body.email, req.body.password)
    .then((fullProfessional)=>{
      response.succes(req, res, fullProfessional, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});

router.put('/:id', function (req, res) {
  controller.updateProfessional(req.params.id, req.body.age, req.body.phone)
    .then((data) => {
      response.succes(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

router.delete('/:id', function (req, res) {
  let id = req.params.id;
  controller.deleteProfessional(id)
    .then((deletedProfessional) => {
      if (deletedProfessional !== null){
        response.succes(req, res, `Professional ${req.params.id} deleted`, 200);
      } else{
        response.error(req, res, `The professional with id: ${req.params.id} was already deleted or does not exist`);
      }
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

module.exports = router;


