const express = require('express');
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')

router.post('/', function (req,res){
  const {q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18} = req.body
  controller.addAffective(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18)
    .then((fullAffective)=>{
      response.success(req, res, fullAffective, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});

router.get('/', function (req, res){
  controller.getAffective()
    .then((FormAffective) => {
      response.success(req, res, FormAffective, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.put('/:id', function (req, res) {
  const {q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18} = req.body
  controller.updateAffective(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18)
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


