const model = require('../../models/modelSuperAdmin');

function addAdmin(admin){
  const myAdmin = new model(admin);
  myAdmin.save();
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


exports.module = {
  addAdmin,
  updateAdmin,
  removeAdmin
}
