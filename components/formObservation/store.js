const model = require('../../models/modelObservationForm')

function addObservation(Observation) {
  const myObservation = new model(Observation);
  myObservation.save();
};

function getObservation(filterKid){
  let filter = {};
  return new Promise ((resolve,reject) => {
    if(filterKid !== null){
      filter = {kid: filterKid};
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


