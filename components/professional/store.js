const model = require('../../models/modelProfessional');

function addProfessional(professional){
  const myProfessional = new model(professional);
  myProfessional.save();
};
function getProfessional(filterProfessional){
  return new Promise ((resolve) =>{
    let filter = {};
    if (filterProfessional !== null){
      filter = {user: filterProfessional}
    }
    const professionals = model.find(filter)
    resolve(professionals)
  })
};

async function updateProfessional(id, age, phone){
  const foundProfessional = await model.findById(id);
  foundProfessional.age = age;
  foundProfessional.phone = phone;
  const updateProfessional = {
    age,
    phone
  };
  const newProfessional = await foundProfessional.save(updateProfessional);
  return newProfessional;
};

async function removeProfessional(id){
  return await model.findByIdAndDelete(id);
};

module.exports = {
  add: addProfessional,
  list: getProfessional,
  updateProfessional: updateProfessional,
  remove: removeProfessional
};
