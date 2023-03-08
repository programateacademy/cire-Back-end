const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', function(req, res){
  controller.add(req.body.email, req.body.password)
    .then((admin) =>{
      response.success(req, res, admin, 200);
    })
    .catch(err => {
      response.error(req, res, 'INVALID DATA', 400,err);
    });
});

router.put('/:id', function(req, res){
  controller.update(req.params.id, req.body.password)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400, err);
    });
})

router.delete('/:id', function(req,res){
  let id = req.params.id;
  controller.delete(id)
    .then((deletedAdmin) => {
      if (deletedAdmin !== null){
        response.success(req, res, `Admin ${deletedAdmin} deleted`)
      } else{
        response.error(req, res, `The professional with id: ${id} was already deleted or does not exist`);
      }
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

module.exports = router;
