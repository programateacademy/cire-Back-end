const store = require('./store')

function addAffective(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18) {
  return new Promise((resolve, reject) => {
    if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8 || !q9 || !q10 || !q11 || !q12 || !q13 || q14 || !q15 || !q16 || !q17 || !q18) {
      reject('INVALID DATA')
    };
    const fullAffective = {
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
    store.add(fullAffective);
    resolve(fullAffective)
  });
};

function updateAffective(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18){
  return new Promise((resolve, reject) => {
    if(!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8 || !q9 || !q10 || !q11 || !q12 || !q13 || q14 || !q15 || !q16 || !q17 || !q18){
      reject('INVALID DATA');
    };
    const result = store.updateAffective(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18)
    resolve(result);
  });
};







module.exports = {
  addAffective,
  updateAffective
}

