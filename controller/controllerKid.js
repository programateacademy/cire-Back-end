const validator = require('../validators/validatorKid');
const response = require('../helpers/response');

function getKid(req, res){
  const filterKid= req.query.age || null;
  validator.getKid(filterKid)
    .then((kidList) => {
      response.success(req, res, kidList, 200);
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
};

function getKidId(req,res){
  const filterKid = req.params.id || null;
  validator.getKidById(filterKid)
    .then((oneKid) => {
      response.success(req, res, oneKid, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
};

function postKid(req,res){
  const {name, age, sex, namAttendant, numAttendant} = req.body
  validator.addKid(name, age, sex, namAttendant, numAttendant)
    .then((fullKid)=>{
      response.success(req, res, fullKid, 201);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400,err);
    });
};

function putKid(req, res) {
  const {name, age, sex, namAttendant, numAttendant} = req.body
  validator.updateKid(req.params.id, name,age, sex, namAttendant, numAttendant)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
};

function deleteKid(req, res) {
  let id = req.params.id;
  validator.deleteKid(id)
    .then(() => {
      response.success(req, res, `Kid ${req.params.id} deleted`, 200);
    })
    .catch(err => {
      response.error(req, res, `Kid with id: ${id} was not found, check id or already deleted`, 404, err);
    });
};

module.exports = {
  getKid,
  putKid,
  deleteKid,
  postKid,
  getKidId
};
