const express = require('express');
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')

router.post('/', function (req,res){
  const {q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22} = req.body
  controller.addDiagnostic(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22)
    .then((fullDiagnostic)=>{
      response.success(req, res, fullDiagnostic, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});

router.get('/', function (req, res){
  controller.getDiagnostic()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.put('/:id', function (req, res) {
  controller.updateDiagnostic(req.params.id, )
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});


router.delete('/:id', function (req, res) {
  let id = req.params.id;
  controller.deleteDiagnostic(id)
    .then((deleteDiagnostic) => {
      if (deleteDiagnostic){
        response.success(req, res, `Diagnostic ${req.params.id} deleted`, 200);
      } else{
        response.error(req, res, `The Diacnostic with id: ${req.params.id} was already deleted or does not exist`);
      }
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});



module.exports = router;
