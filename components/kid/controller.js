const store = require('./store');

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
    store.add(fullKid);
    resolve(fullKid);
  });
};

function getKid(filterKid){
  return new Promise ((resolve) => {
    resolve(store.list(filterKid));
  });
};
function getKidById(filterKid){
  return new Promise ((resolve) => {
    resolve(store.getKidById(filterKid));
  });
};

function updateKid(id, name, age, sex, namAttendant, numAttendant){
  return new Promise ((resolve, reject) => {
    if(!id){
      reject('INVALID DATA');
    };
    const result = store.updateKid(id, name, age, sex, namAttendant, numAttendant);
    resolve(result);
  });
};

function deleteKid(id){
  return new Promise ((resolve, reject) => {
    if (!id){
      reject('INVALID DATA');
    } else{
      store.removeKid(id)
        .then(() => {
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
