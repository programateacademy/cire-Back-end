
const store = require('./store')

function addDiagnostic(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22) {
  return new Promise((resolve) => {
    const fullDiagnostic = {
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
      q18: q18,
      q19: q19,
      q20: q20,
      q21: q21,
      q22: q22
    };
    store.add(fullDiagnostic);
    resolve(fullDiagnostic);
  });
};

module.exports = {
  addDiagnostic,

};

function getDiagnostic(filterKid) {
  return new Promise ((resolve) => {
    resolve(store.list(filterKid));
  });
};

function updateDiagnostic(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17,    q18, q19, q20, q21, q22){
  return new Promise((resolve) => {

    const result = store.updateDiagnostic(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22)
    resolve(result);
  });
};

function deleteDiagnostic(id){
  return new Promise ((resolve, reject) => {
    if (!id){
      reject('INVALID DATA');
    } else{
      store.remove(id)
        .then(() => {
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    };
  });
};



module.exports ={
 addDiagnostic,
getDiagnostic,
updateDiagnostic,
deleteDiagnostic

}