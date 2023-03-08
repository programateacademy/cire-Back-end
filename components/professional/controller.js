const store = require('./store');

function addProfessional(name, age, phone, occupation, email, password){
  return new Promise((resolve, reject) => {
    if (!name || !age || !phone || !occupation || !email || !password){
      reject('INVALID DATA');
    };
    const fullProfessional = {
      name: name,
      age: age,
      phone: phone,
      occupation: occupation,
      email: email,
      password: password
    };
    store.add(fullProfessional);
    resolve(fullProfessional);
  });
};

function getProfessional(filterProfessional) {
  return new Promise ((resolve) => {
    resolve(store.list(filterProfessional));
  });
};

function updateProfessional(id, age, phone){
  return new Promise((resolve, reject) => {
    if(!id || !age || !phone){
      reject('INVALID DATA');
    };
    const result = store.updateProfessional(id, age, phone)
    resolve(result);
  });
};

function deleteProfessional(id){
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

module.exports = {
  addProfessional,
  getProfessional,
  updateProfessional,
  deleteProfessional
};


