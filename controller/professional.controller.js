const professionalCtrl = {};

const Professional = require('../models/modelProfessional');

//All Movies
professionalCtrl.getProfessionals = async (req, res) => {
  try {
    const professionals = await Professional.find();
    res.json(professionals);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

//One Movie
professionalCtrl.getProfessional = async (req, res) => {
  try {
    const professional = await Professional.findById(req.params.id);
    res.json(professional);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

//Update Movie with put
professionalCtrl.updateProfessional = async (req, res) => {
  try {
    const { name, age, phone, occupation, email, password } =
      req.body;
    await Professional.findByIdAndUpdate(req.params.id, {
      name,
      age,
      phone,
      occupation,
      email,
      password,
    });
    res.json({ msg: 'professional update' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

//Update Movie with patch
professionalCtrl.updatePatchProfessional = async (req, res) => {
  try {
    await Professional.findByIdAndUpdate(req.params.id, req.body);
    res.json({ msg: 'Professional update with patch' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

//Delete Movie
professionalCtrl.deleteProfessional = async (req, res) => {
  try {
    await Professional.findOneAndRemove(req.params.id);
    res.json({ msg: 'Delete-Professional' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

//Delete All Movies
professionalCtrl.deleteProfessionals = async (req, res) => {
  try {
    await Professional.remove();
    res.json({ msg: 'Delete all Professional' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = professionalCtrl;
