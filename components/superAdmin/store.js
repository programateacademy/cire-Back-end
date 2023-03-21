const { model } = require('../../models/modelSuperAdmin');



function addAdmin(admin){
  const myAdmin = new model(admin);
  return myAdmin.save();

};

async function updateAdmin(id, password){
  const foundAdmin = await model.findById(id);

  foundAdmin.password = password;
  const updateAdmin = {
    password
  };
  const newAdmin = await foundAdmin.save(updateAdmin);
  return newAdmin;
};

async function removeAdmin(id){
  return await model.findByIdAndDelete(id);
}


async function login(credentials) {
  const superAdmin = await model.findOne(credentials);
  if (!superAdmin) {
    throw new Error('Incorrect email or password');
  }

  const token = await superAdmin.generateAuthToken();
  return token;
}



module.exports = {
  addAdmin,
  updateAdmin,
  removeAdmin,
  login,

}
