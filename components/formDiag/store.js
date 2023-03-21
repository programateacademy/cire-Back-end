const model = require('../../models/modelFormDiag')

function addDiagnostic(Diagnostic) {
  const myDiagnostic = new model(Diagnostic);
  myDiagnostic.save();
};

function getDiagnostic(filterDiag){
  let filter = {};
  return new Promise ((resolve, reject) =>{
    if(filterDiag !== null){
      filter = {_id: filterDiag}
    }
    model.find(filter)
      .populate('kid', {name: true, age: true, sex: true, namAttendant: true, numAttendant:true})
      .exec((error, populated) => {
        if (error){
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
};

async function updateDiagnostic(id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22) {
  const foundDiagnostic = await model.findById(id);
  foundDiagnostic.q1 = q1;
  foundDiagnostic.q2 = q2;
  foundDiagnostic.q3 = q3;
  foundDiagnostic.q4 = q4;
  foundDiagnostic.q5 = q5;
  foundDiagnostic.q6 = q6;
  foundDiagnostic.q7 = q7;
  foundDiagnostic.q8 = q8;
  foundDiagnostic.q9 = q9;
  foundDiagnostic.q10 = q10;
  foundDiagnostic.q11 = q11;
  foundDiagnostic.q12 = q12;
  foundDiagnostic.q13 = q13;
  foundDiagnostic.q14 = q14;
  foundDiagnostic.q15 = q15;
  foundDiagnostic.q16 = q16;
  foundDiagnostic.q17 = q17;
  foundDiagnostic.q18 = q18;
  foundDiagnostic.q18 = q19;
  foundDiagnostic.q18 = q20;
  foundDiagnostic.q18 = q21;
  foundDiagnostic.q18 = q22;

  const updateDiagnostic = {
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q12,
    q13,
    q14,
    q15,
    q16,
    q17,
    q18,
    q19,
    q20,
    q21,
    q22





  };
  const newDiag = await foundDiagnostic.save(updateDiagnostic);
  return newDiag;
};

async function existDB(id){
  const exist = await model.exists({_id: id});
  return exist
}

async function removeDiagnostic(id) {
  if (await existDB(id)){
    return await model.findByIdAndDelete(id);
  }
  return false;
};



module.exports = {
  add: addDiagnostic,
  updateDiagnostic: updateDiagnostic,
  remove: removeDiagnostic,
  list: getDiagnostic
}
