const model = require('../models/modelAffectiveForm');

function addAffective(Affective) {
  const myAffective = new model(Affective);
  myAffective.save();
};

function getAffective(filterAffective){
  let filter = {};
  return new Promise ((resolve,reject) => {
    if(filterAffective !== null){
      filter = {_id: filterAffective};
    };
    model.find(filter)
      .populate('kid', {name: true, age: true, sex: true, namAttendant: true, numAttendant: true})
      .exec((error, populated) => {
        if (error){
          reject(error);
          return false;
        };
        resolve(populated);
      });
  });
};

async function updateAffective(id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18) {
  const foundAffective = await model.findById(id);
  foundAffective.q1 = q1;
  foundAffective.q2 = q2;
  foundAffective.q3 = q3;
  foundAffective.q4 = q4;
  foundAffective.q5 = q5;
  foundAffective.q6 = q6;
  foundAffective.q7 = q7;
  foundAffective.q8 = q8;
  foundAffective.q9 = q9;
  foundAffective.q10 = q10;
  foundAffective.q11 = q11;
  foundAffective.q12 = q12;
  foundAffective.q13 = q13;
  foundAffective.q14 = q14;
  foundAffective.q15 = q15;
  foundAffective.q16 = q16;
  foundAffective.q17 = q17;
  foundAffective.q18 = q18;

  const updateAffective = {
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
    q18
  };
  const newAffective = await foundAffective.save(updateAffective);
  return newAffective;
};

async function existDB(id){
  const exist = await model.exists({_id: id});
  return exist
}

async function removeAffective(id) {
  if (await existDB(id)){
    return await model.findByIdAndDelete(id);
  }
  return false;
};

module.exports = {
  add: addAffective,
  updateAffective: updateAffective,
  remove: removeAffective,
  list: getAffective
}
