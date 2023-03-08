const store = require('./store');

function addAdmin(email, password){
  return new Promise((resolve, reject) => {
    if (!email || !password){
      reject('INVALID DATA');
    };
    const admin = {
      email: email,
      password: password
    }
    store.addAdmin(admin);
    resolve(admin);
  });
};

function updateAdmin(id, password){
  return new Promise((resolve, reject) => {
    if (!id || !password){
      reject('INVALID DATA');
    };
    const result = store.updateAdmin(id, password);
    resolve(result);
  });
};

function deleteAdmin(id){
  return new Promise ((resolve, reject) => {
    if (!id){
      reject('INVALID DATA');
    } else {
      store.deleteAdmin(id)
        .then(() => {
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    };
  });
};


exports.module = {
  add: addAdmin,
  update: updateAdmin,
  delete: deleteAdmin
};
