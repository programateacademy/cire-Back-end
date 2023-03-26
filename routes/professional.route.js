const { Router } = require('express');
const router = Router();

const {
  getProfessional,
  getProfessionals,
  deleteProfessional,
  updateProfessional
} = require('../controller/professional.controller');
const { authAdmin } = require('../middlewares/Auth');

router
  .route('/')
  .get( getProfessionals)

router
  .route('/:id')
  .get(getProfessional)
  .delete(authAdmin, deleteProfessional)
  .put(updateProfessional)

module.exports = router;
