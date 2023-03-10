const express = require('express');
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')

router.post('/', function (req,res){
  controller.addAffective(req.body.q1,req.body.q2, req.body.q3, req.body.q4, req.body.q5, req.body.q6, req.body.q7, req.body.q8, req.body.q9, req.body.q10, req.body.q11, req.body.q12, req.body.q13, req.body.q14,  req.body.q15, req.body.q16, req.body.q17, req.body.q18 )
    .then((fullAfective)=>{
      response.success(req, res, fullAfective, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});

router.put('/:id', function (req, res) {
  controller.updateAffective(req.params.id, req.body.q1, req.body.q2, req.body.q3, req.body.q4, req.body.q5, req.body.q6, req.body.q7, req.body.q8, req.body.q9, req.body.q10, req.body.q11, req.body.q12, req.body.q13, req.body.q14, req.body.q15, req.body.q16, req.body.q17, req.body.q18)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

router.delete('/:id', function (req, res) {
  let id = req.params.id;
  controller.deleteAffective(id)
    .then((deleteAffective) => {
      if (deleteAffective !== null){
        response.success(req, res, `Affective ${req.params.id} deleted`, 200);
      } else{
        response.error(req, res, `The Affective with id: ${req.params.id} was already deleted or does not exist`);
      }
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

module.exports = router;


