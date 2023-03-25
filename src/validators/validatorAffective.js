const service = require('../services/serviceAffective')

function addAffective(kid, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18) {
  return new Promise((resolve) => {
    const fullAffective = {
      kid: kid,
      q1: q1,
      q2: q2,
      q3: q3,
      q4: q4,
      q5: q5,
      q6: q6,
      q7: q7,
      q8: q8,
      q9: q9,
      q10: q10,
      q11: q11,
      q12: q12,
      q13: q13,
      q14: q14,
      q15: q15,
      q16: q16,
      q17: q17,
      q18: q18
    };
    service.add(fullAffective);
    resolve(fullAffective);
  });
};

function getAffective(filterAffective) {
  return new Promise ((resolve) => {
    resolve(service.list(filterAffective));
  });
};

function updateAffective(id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18){
  return new Promise((resolve) => {

    const result = service.updateAffective(id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18)
    resolve(result);
  });
};

function deleteAffective(id){
  return new Promise ((resolve, reject) => {
    if (!id){
      reject('INVALID DATA');
    } else{
      service.remove(id)
        .then((data) => {
          if (!data){
            reject('Affective form not found, check id or already deleted')
          }
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    };
  });
};







module.exports = {
  addAffective,
  updateAffective,
  deleteAffective,
  getAffective
}

