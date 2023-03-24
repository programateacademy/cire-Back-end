const service = require('../services/serviceKid');

function addKid(name, age, sex, namAttendant, numAttendant){
  return new Promise ((resolve, reject) => {
    if (!name || !age || !sex || !namAttendant || !numAttendant){
      reject('INVALID DATA')
    };
    const fullKid = {
      name: name,
      age: age,
      sex: sex,
      namAttendant: namAttendant,
      numAttendant: numAttendant
    };
    service.add(fullKid);
    resolve(fullKid);
  });
};

function getKid(filterKid){
  return new Promise ((resolve) => {
    resolve(service.list(filterKid));
  });
};
function getKidById(filterKid){
  return new Promise ((resolve) => {
    resolve(service.getKidById(filterKid));
  });
};

function updateKid(id, name, age, sex, namAttendant, numAttendant){
  return new Promise ((resolve, reject) => {
    if(!id){
      reject('INVALID DATA');
    };
    const result = service.updateKid(id, name, age, sex, namAttendant, numAttendant);
    resolve(result);
  });
};

function deleteKid(id){
  return new Promise ((resolve, reject) => {
    if (!id){
      reject('INVALID DATA');
    } else{
      service.removeKid(id)
        .then((data) => {
          if(!data){
            reject('Kid was not found, check id or already deleted')
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
  addKid,
  getKid,
  updateKid,
  deleteKid,
  getKidById
};
