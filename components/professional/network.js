const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/', function (req, res){
  const filterProfessional = req.query.name || null;
  controller.getProfessional(filterProfessional)
    .then((professionalList) => {
      response.success(req, res, professionalList, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.get('/:id', function(req, res){
  const filterProfessional = req.params.id || null;
  controller.getProfessionalById(filterProfessional)
    .then((oneProfessional) => {
      response.success(req, res, oneProfessional, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Unexpected Error', 500, err);
    });
});

router.post('/', function (req,res){
  const {name, age, phone, occupation, email, password} = req.body
  controller.addProfessional(name, age, phone, occupation, email, password)
    .then((fullProfessional)=>{
      response.success(req, res, fullProfessional, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});

router.put('/:id', function (req, res) {
  const {name, age, phone, occupation, email, password} = req.body
  controller.updateProfessional(req.params.id, name, age, phone, occupation, email, password)
    .then((data) => {
      response.success(req, res, data, 200);
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
        response.success(req, res, `Professional ${req.params.id} deleted`, 200);
      } else{
        response.error(req, res, `The professional with id: ${req.params.id} was already deleted or does not exist`);
      }
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

router.post('/login', function(req, res){
  const {email, password} = req.body
  controller.login(email, password)
    .then((token) =>{
      response.success(req, res, {token}, 200);
    })
    .catch(err => {
      response.error(req, res, 'INVALID CREDENTIALS', 400, err);
    });
});

module.exports = router;


