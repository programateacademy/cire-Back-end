const professionalCtrl = {};

const Professional = require('../models/modelProfessional');
const User = require('../models/User');

professionalCtrl.getProfessionals = async (req, res) => {
  try {
    const professionals = await Professional.find().populate('userId');
    return res.status(200).json(professionals);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

professionalCtrl.getProfessional = async (req, res) => {
  try {
    const professional = await Professional.findById(req.params.id).populate(
      'userId'
    );
    return res.status(200).json(professional);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

//Update professioal with put
professionalCtrl.updateProfessional = async (req, res) => {
  try {
    const { name, age, phone, occupation, numberId, email, password } =
      req.body;

    if (password || email) {
      return res
        .status(400)
        .json({ msg: 'No se puede actualizar email y password' });
    }

    const updatePro = await Professional.findByIdAndUpdate(req.params.id, {
      name,
      age,
      phone,
      occupation,
      numberId,
    });
    
    updatePro.save()
    return res.status(200).json({ msg: 'professional update' });
  } catch (err) {
    return res.status(500).json({ msg: 'Error al actualizar: ' + err.message });
  }
};

//Delete Professional
professionalCtrl.deleteProfessional = async (req, res) => {
  try {
    const { email } = req.body;

    await Professional.findOneAndRemove(req.params.id);

    const user = await User.find({ email });

    await User.findOneAndRemove(user._id);

    return res.status(200).json({ msg: 'Delete-Professional' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = professionalCtrl;
