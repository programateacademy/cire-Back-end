const validator = require('../validators/validatorDiagForm')
const response = require('../helpers/response')

function postDiag(req, res){
  const {kid, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22} = req.body
  validator.addDiagnostic(kid, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22)
    .then((fullDiagnostic)=>{
      response.success(req, res, fullDiagnostic, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
};


function getDiag (req, res){
  let filterDiag = req.query.id || null
  validator.getDiagnostic(filterDiag)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
};

function putDiag(req, res) {
  const {q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14,  q15, q16, q17, q18, q19, q20, q21, q22} = req.body
  validator.updateDiagnostic(req.params.id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14,  q15, q16, q17, q18, q19, q20, q21, q22 )
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
};


function deleteDiag(req, res) {
  let id = req.params.id;
  validator.deleteDiagnostic(id)
  .then(() => {
      response.success(req, res, `Diagnostic form ${req.params.id} deleted`, 200);
  })
    .catch(err => {
      response.error(req, res, `Diagnostic form not found, check id or already deleted`, 404, err);
    });
};



module.exports = {
  postDiag,
  getDiag,
  putDiag,
  deleteDiag
};
