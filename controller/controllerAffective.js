const express = require('express');
const router = express.Router()
const validator = require('../validators/validatorAffective')
const response = require('../helpers/response')

router.post('/', function (req,res){
  const {kid, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18} = req.body
  validator.addAffective(kid, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18)
    .then((fullAffective)=>{
      response.success(req, res, fullAffective, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
});

router.get('/', function (req, res){
  let filterAffective = req.query.id || null;
  validator.getAffective(filterAffective)
    .then((FormAffective) => {
      response.success(req, res, FormAffective, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.put('/:id', function (req, res) {
  const {q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18} = req.body
  validator.updateAffective(req.params.id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});



router.delete('/:id', function (req, res) {
  let id = req.params.id;
  validator.deleteAffective(id)
    .then(() => {
        response.success(req, res, `Affective ${req.params.id} deleted`, 200);
    })
    .catch(err => {
      response.error(req, res, `Affective form not found, check id or already deleted`, 404, err);
    });
});

module.exports = router;


