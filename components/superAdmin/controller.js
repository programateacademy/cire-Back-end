const store = require('./store');


function login(email, password){
  return new Promise ((resolve, reject)=>{
    if(!email || !password){
      reject('Invalid data');
    };
    const credentials = {
      email: email,
      password: password
    };
    resolve(store.login(credentials));
  });
};

function addAdmin (email, password){
  return new Promise((resolve, reject) => {
    if (!email || !password){
      reject('INVALID DATA');

    };
    const   admin =  {
      email: email,
      password: password.passHash
    }


    resolve(store.addAdmin(admin));
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


module.exports = {
  add: addAdmin,
  update: updateAdmin,
  delete: deleteAdmin,
  login
};
