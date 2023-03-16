const express = require('express');
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')

router.post('/', function (req,res){
  controller.addDiagnostic(req.body.q1, req.body.q2, req.body.q3, req.body.q4, req.body.q5, req.body.q6, req.body.q7, req.body.q8, req.body.q9, req.body.q10, req.body.q11, req.body.q12, req.body.q13, req.body.q14,  req.body.q15, req.body.q16, req.body.q17, req.body.q18, req.body.q19, req.body.q20, req.body.q21, req.body.q22  )
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
