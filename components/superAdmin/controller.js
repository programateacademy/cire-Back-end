const store = require('./store');
const jwt = require('jsonwebtoken');
const secretKey = 'mySecretKey';

function generateToken(user) {
  const payload = { id: user._id, email: user.email };
  const options = { expiresIn: '1h' };
  return jwt.sign(payload, secretKey, options);
}


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

function addAdmin(email, password) {
  return new Promise((resolve, reject) => {
    if (!email || !password) {
      reject('INVALID DATA');
    }
    const admin = {
      email: email,
      password: password
    };
    store.addAdmin(admin);
    const user = { _id: admin._id, email: admin.email };
    const token = generateToken(user);
    resolve({ user, token });
  });
}



function updateAdmin(id, password){
  return new Promise((resolve, reject) => {
    if (!id || !password){
      reject('INVALID DATA');
    };
    const result = store.updateAdmin(id, password);
    resolve(result);
  });
};

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).send('Unauthorized');
  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).send('Forbidden');
    req.user = user;
    next();
  });
}




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
  login,
  generateToken,
  authenticateToken
};
