const model = require('../models/modelKid');

function addKid(kid){
  const myKid = new model(kid);
  myKid.save();
}

function getKid(filterKid){
  return new Promise ((resolve) => {
    let filter = {};
    if (filterKid !== null){
      filter = {age: filterKid};
    };
    const kids = model.find(filter);
    resolve(kids);
  });
};

function getKidById(kidId){
  return new Promise ((resolve, reject) => {
    if(!kidId){
      reject('Invalid ID')
    }
    const kid = model.findById(kidId);
    resolve(kid);
  })
}

async function updateKid(id, name, age, sex, namAttendant, numAttendant){
  const foundKid = await model.findById(id);
  foundKid.name = name;
  foundKid.age = age;
  foundKid.sex = sex;
  foundKid.namAttendant = namAttendant;
  foundKid.numAttendant = numAttendant;
  const updateKid = {
    name,
    age,
    sex,
    namAttendant,
    numAttendant
  };
  const newKid = await foundKid.save(updateKid);
  return newKid;
};

async function existDB(id){
  const exist = await model.exists({_id: id})
  return exist;
};

async function removeKid(id){
  if(await existDB(id)){
    return await model.findByIdAndDelete(id);
  };
  return false;
};

module.exports = {
  add: addKid,
  list: getKid,
  updateKid: updateKid,
  removeKid: removeKid,
  getKidById: getKidById
};

