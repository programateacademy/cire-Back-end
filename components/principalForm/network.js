const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/', function (req, res){
  controller.getPrincipal()
    .then((principalForm) => {
      response.success(req, res, principalForm, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
  });

  router.post('/', function (req,res){
  console.log(req.body.kid);
  const {schoolDescription, schoolAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction} = req.body
  controller.addPrincipal(schoolDescription, schoolAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction)
  .then((principalForm)=>{
    response.success(req, res, principalForm, 201);
  })
  .catch(err => {
    response.error(req, res, 'INVALID INFORMATION', 400,err);
  });
});

router.put('/:id', function (req, res) {
  const {schoolDescription, schoolAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction} = req.body
  controller.updatePrincipal(schoolDescription, schoolAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

router.delete('/:id', function (req, res) {
  let id = req.params.id;
  controller.deletePrincipal(id)
    .then((deletedForm) => {
      if (deletedForm !== null){
        response.success(req, res, `Principal form ${req.params.id} deleted`, 200);
      } else{
        response.error(req, res, `The form with id: ${req.params.id} was already deleted or does not exist`);
      }
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

module.exports = router;
