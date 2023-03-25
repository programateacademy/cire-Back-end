const { Router } = require('express');
const router = Router();

const {
  getProfessional,
  getProfessionals,
  deleteProfessional,
  deleteProfessionals,
  updatePatchProfessional,
  updateProfessional,
} = require('../controller/professional.controller');
const { authAdmin } = require('../middlewares/Auth');

router
  .route('/')
  .get(authAdmin, getProfessionals)
  .delete(authAdmin, deleteProfessionals);

router
  .route('/id')
  .get(authAdmin, getProfessional)
  .delete(authAdmin, deleteProfessional)
  .put(authAdmin, updateProfessional)
  .patch(authAdmin, updatePatchProfessional);

module.exports = router;
