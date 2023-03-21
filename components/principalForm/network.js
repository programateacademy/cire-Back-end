const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/', function (req, res){
  let filterPrincipal = req.query.id || null;
  controller.getPrincipal(filterPrincipal)
    .then((principalForm) => {
      response.success(req, res, principalForm, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
  });

  router.post('/', function (req,res){
  // console.log(req.body);
  const {kid, schoolDescription, schoolAction, behaviorDescription, behaviorAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction} = req.body

  controller.addPrincipal(kid, schoolDescription, schoolAction, behaviorDescription, behaviorAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction)
  .then((principalForm)=>{
    response.success(req, res, principalForm, 201);
  })
  .catch(err => {
    response.error(req, res, 'INVALID INFORMATION', 400,err);
  });
});

router.put('/:id', function (req, res) {
  const {schoolDescription, schoolAction, behaviorDescription, behaviorAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction} = req.body;
  controller.updatePrincipal(req.params.id, schoolDescription, schoolAction, behaviorDescription, behaviorAction, relationDescription, relationACtion, workClassDescription, workClassAction, workCireDescription, workCireAction, workHomeDescription, workHomeAction, parentDescription, parentAction, accompanimentDescription, accompanimentAction)
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
    .then(() => {
      response.success(req, res, `Principal form ${req.params.id} deleted`, 200);
    })
    .catch(err => {
      response.error(req, res, 'Principal form not found check id or already deleted', 404, err);
    });
});

module.exports = router;
