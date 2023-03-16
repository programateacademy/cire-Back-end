const store = require('./store');

function login(email, password){
  return new Promise ((resolve, reject) => {
    if(!email || !password){
      reject('Invalid data');
    };
    const credentials = {
      email: email,
      password: password
    }
    resolve(store.login(credentials));
  })
}

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
function getProfessionalById(filterProfessional) {
  return new Promise ((resolve) => {
    resolve(store.getProfessionalById(filterProfessional));
  });
};

function updateProfessional(id, name, age, phone, occupation, email, password, numberId){
  return new Promise((resolve, reject) => {
    if (!id){
      reject('Invalid ID');
    }
    const result = store.updateProfessional(id, name, age, phone, occupation, email, password, numberId);
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
  deleteProfessional,
  getProfessionalById,
  login
};


