const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerPsychoSocial');

router.post('/', controller.postPsychoSocial);
router.get('/', controller.getPsychoSocial);
router.put('/:id', controller.putPsychoSocial);
router.delete('/:id', controller.deletePsychoSocial);


module.exports = router;
