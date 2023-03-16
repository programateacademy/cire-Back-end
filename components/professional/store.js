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

function getProfessionalById(professionalId){
  return new Promise ((resolve, reject) => {
    if (!professionalId){
      reject('Invalid ID');
    };
    const professional = model.findById(professionalId);
    resolve(professional);
  });
};

async function updateProfessional(id, name, age, phone, occupation, email, password, numberId){
  const foundProfessional = await model.findById(id);
  foundProfessional.name = name;
  foundProfessional.age = age;
  foundProfessional.phone = phone;
  foundProfessional.occupation = occupation;
  foundProfessional.email = email;
  foundProfessional.password = password;
  foundProfessional.numberId = numberId;
  const updateProfessional = {
    name,
    age,
    phone,
    occupation,
    email,
    password,
    numberId
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
  remove: removeProfessional,
  getProfessionalById
};
